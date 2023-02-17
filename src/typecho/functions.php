<?php
if (!defined('__TYPECHO_ROOT_DIR__')) exit;


// 主题配置
function themeConfig($form) {

    $jqueryConfig = new Typecho_Widget_Helper_Form_Element_Text('jqueryConfig', NULL, '//lf26-cdn-tos.bytecdntp.com/cdn/expire-1-y/jquery/3.6.0/jquery.min.js', _t('JQuery CDN'));
    $form->addInput($jqueryConfig);

    $globalConfig = new Typecho_Widget_Helper_Form_Element_Textarea('globalConfig', NULL, '<script src="//cdn.jsdelivr.net/gh/wangyang0210/EasyBe@v2.1.7/easybe/simple-memory.js" defer></script>', _t('全局配置'));
    $form->addInput($globalConfig);

    $postRank = new Typecho_Widget_Helper_Form_Element_Text('postRank', NULL, '10', _t('阅读排行'), _t('阅读排行显示数量'));
    $postRank->input->setAttribute('class', 'w-20');
    $form->addInput($postRank->addRule('isInteger', _t('请输入纯数字')));

    $commentsRank = new Typecho_Widget_Helper_Form_Element_Text('commentsRank', NULL, '10', _t('评论排行'), _t('评论排行显示数量'));
    $commentsRank->input->setAttribute('class', 'w-20');
    $form->addInput($commentsRank->addRule('isInteger', _t('请输入纯数字')));



    $sidebarBlock = new Typecho_Widget_Helper_Form_Element_Checkbox('sidebarBlock',
        array('ShowRecentPosts' => _t('显示最新文章'),
            'ShowRecentComments' => _t('显示最近回复'),
            'ShowCategory' => _t('显示分类'),
            'ShowArchive' => _t('显示归档'),
            'ShowOther' => _t('显示其它杂项')),
        array('ShowRecentPosts', 'ShowRecentComments', 'ShowCategory', 'ShowArchive', 'ShowOther'), _t('侧边栏显示'));

    $form->addInput($sidebarBlock->multiMode());
}

// 获取全部文章阅读量
function getAllPostViews() {
    $db = Typecho_Db::get();
    if (!array_key_exists('views', $db->fetchRow($db->select()->from('table.contents')))) {
        $db->query("ALTER TABLE `{$db->getPrefix()}contents` ADD `views` INT(10) DEFAULT 0;");
    }
    $row = $db->fetchAll("select sum(views) as views from `{$db->getPrefix()}contents`;");
    echo $row[0]['views'];
}


// 获取指定文章的阅读访问量
function getPostView($archive) {
    $cid    = $archive->cid;
    $db     = Typecho_Db::get();
    $row = $db->fetchRow($db->select('views')->from('table.contents')->where('cid = ?', $cid))['views'];
    if ($archive->is('single')) $db->query($db->update('table.contents')->rows(array('views' => (int) $row + 1))->where('cid = ?', $cid));
    echo $row;
}

// 获取阅读量最多的文章
function getPostViewRank($limit) {
    $db     = Typecho_Db::get();
    $posts = $db->fetchAll($db->select()->from('table.contents')
        ->where('type = ? AND status = ? AND password is NULL', 'post', 'publish')
        ->order('views', Typecho_Db::SORT_DESC)
        ->limit($limit)
    );

    if ($posts) {
        foreach ($posts as $post) {
            $result = Typecho_Widget::widget('Widget_Abstract_Contents')->push($post);
            $postTitle = htmlspecialchars($result['title']);
            $permalink = $result['permalink'];
            $postViews = $result['views'];
            echo "<li><a href='$permalink' title='$postTitle'>$postTitle($postViews)</a></li>";
        }
    }
}

// 获取评论最多的文章
function getPostCommentRank($limit) {
    $db     = Typecho_Db::get();
    $posts = $db->fetchAll($db->select()->from('table.contents')
        ->where('type = ? AND status = ? AND password is NULL', 'post', 'publish')
        ->order('commentsNum', Typecho_Db::SORT_DESC)
        ->limit($limit)
    );

    if ($posts) {
        foreach ($posts as $post) {
            $result = Typecho_Widget::widget('Widget_Abstract_Contents')->push($post);
            $postTitle = htmlspecialchars($result['title']);
            $permalink = $result['permalink'];
            $postCommentsNum = $result['commentsNum'];
            echo "<li><a href='$permalink' title='$postTitle'>$postTitle($postCommentsNum)</a></li>";
        }
    }
}

// 留言@
function getPermalinkFromCoid($coid) {
    $db = Typecho_Db::get();
    $row = $db->fetchRow($db->select('author')->from('table.comments')->where('coid = ? AND status = ?', $coid, 'approved'));
    if (empty($row)) return '';
    return '<a href="#comment-'.$coid.'">@'.$row['author'].'</a>';
}

// 获取指定文章的点赞数量
function getDiggNum($cid, &$record = NULL) {
    $db = Typecho_Db::get();
    $res = [
        'digg' => 0,
        'recording' => false
    ];
    $data = $db->fetchRow($db->select()->from('table.contents')->where('cid = ?', $cid));
    if (!array_key_exists('digg', $data)) {
        $db->query("ALTER TABLE `{$db->getPrefix()}contents` ADD `digg` INT(10) NOT NULL DEFAULT 0;");
    } else {
        $res['digg'] = $data['digg'];
    }
    $recording = Typecho_Cookie::get('__typecho_digg_record');
    if (empty($recording)) {
        Typecho_Cookie::set('__typecho_digg_record', '[]');
    } else {
        $record = json_decode($recording);
        $res['recording'] = is_array($record) && in_array($cid, $record);
    }
    return $res;
}

// 请求点赞
function digg($cid) {
    $db = Typecho_Db::get();
    $res = getDiggNum($cid, $record);
    if (empty($record)) {
        Typecho_Cookie::set('__typecho_digg_record', "[$cid]");
    } else {
        if ($res['recording']) return $res['digg'];
        array_push($record, $cid);
        Typecho_Cookie::set('__typecho_digg_record', json_encode($record));
    }
    $digg = ++$res['digg'];
    $db->query("UPDATE `{$db->getPrefix()}contents` SET `digg` = {$digg} WHERE `cid` = {$cid};");
    return $digg;
}

// 获取指定文章的踩
function getBuryNum($cid, &$record = NULL) {
    $db = Typecho_Db::get();
    $res = [
        'bury' => 0,
        'recording' => false
    ];
    $data = $db->fetchRow($db->select()->from('table.contents')->where('cid = ?', $cid));
    if (!array_key_exists('bury', $data)) {
        $db->query("ALTER TABLE `{$db->getPrefix()}contents` ADD `bury` INT(10) NOT NULL DEFAULT 0;");
    } else {
        $res['bury'] = $data['bury'];
    }
    $recording = Typecho_Cookie::get('__typecho_bury_record');
    if (empty($recording)) {
        Typecho_Cookie::set('__typecho_bury_record', '[]');
    } else {
        $record = json_decode($recording);
        $res['recording'] = is_array($record) && in_array($cid, $record);
    }
    return $res;
}

// 请求踩
function bury($cid) {
    $db = Typecho_Db::get();
    $res = getDiggNum($cid, $record);
    if (empty($record)) {
        Typecho_Cookie::set('__typecho_bury_record', "[$cid]");
    } else {
        if ($res['recording']) return $res['bury'];
        array_push($record, $cid);
        Typecho_Cookie::set('__typecho_bury_record', json_encode($record));
    }
    $bury = ++$res['bury'];
    $db->query("UPDATE `{$db->getPrefix()}contents` SET `bury` = {$bury} WHERE `cid` = {$cid};");
    return $bury;
}
