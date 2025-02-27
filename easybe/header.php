<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit; ?>
<!DOCTYPE HTML>
<html class="no-js">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="renderer" content="webkit">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title><?php $this->archiveTitle(array(
            'category'  =>  _t('分类 - %s'),
            'search'    =>  _t('关键字 - %s'),
            'tag'       =>  _t('标签 - %s'),
            'author'    =>  _t('作者 - %s')
        ), '', ' - '); ?><?php $this->options->title(); ?></title>

    <!-- 使用url函数转换相关路径 -->
    <link rel="stylesheet" href="<?php $this->options->themeUrl('simple-memory.css'); ?>">
    <script src="<?php $this->options->jqueryConfig(); ?>"></script>

    <!-- 通过自有函数输出HTML头部信息 -->
    <?php $this->header(); ?>
</head>
<body>

<!--done-->
<div id="home">
    <div id="header">
        <div id="blogTitle">
            <a id="lnkBlogLogo" >
                <img id="blogLogo" alt="返回主页">
            </a>
            <!--done-->
            <h1>
                <a id="Header1_HeaderTitle" class="headermaintitle HeaderMainTitle"></a>
            </h1>
            <h2></h2>
        </div><!--end: blogTitle 博客的标题和副标题 -->
        <div id="navigator">
            <div class="blogStats">
                <?php Typecho_Widget::widget('Widget_Stat')->to($stat); ?>
                <span id="stats_post_count">随笔 - <?php $stat->publishedPostsNum() ?>&nbsp; </span>
                <span id="stats_article_count">分类 - <?php $stat->categoriesNum() ?>&nbsp; </span>
                <span id="stats-comment_count">评论 - <?php $stat->publishedCommentsNum() ?>&nbsp; </span>
                <span id="stats-total-view-count">阅读 - <?php getAllPostViews() ?></span>
            </div><!--end: blogStats -->
        </div><!--end: navigator 博客导航栏 -->
    </div><!--end: header 头部 -->
    <div id="main">


