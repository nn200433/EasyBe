<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit; ?>
<?php $this->need('header.php'); ?>
<div class="box" id="topics">
    <div class="box-ghost">
        <div class="symbol"></div>
        <div class="symbol"></div>
        <div class="symbol"></div>
        <div class="symbol"></div>
        <div class="symbol"></div>
        <div class="symbol"></div>

        <div class="box-ghost-container">
            <div class="box-ghost-eyes">
                <div class="box-eye-left"></div>
                <div class="box-eye-right"></div>
            </div>
            <div class="box-ghost-bottom">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="box-ghost-shadow"></div>
    </div>

    <div class="box-description">
        <div class="box-description-container">
            <div class="box-description-title">o_o ....</div>
            <div class="box-description-text">你竟然来到了无人区</div>
            <form method="post">
                <input type="text" name="s" class="text" style="border: 1px solid #332f63;height: 28px;outline:0;padding: 0px 0px 0px 12px;" autofocus placeholder="找找看" />
                <button type="submit" class="box-button" style="float: right;top: -30px;left: 54px;">搜索</button>
            </form>
        </div>
    </div>

</div>

<script>
    let pageX = $(document).width();
    let pageY = $(document).height();
    let mouseY=0;
    let mouseX=0;

    $(document).mousemove(function( event ) {
        mouseY = event.pageY;
        yAxis = (pageY/2-mouseY)/pageY*300;
        //horizontalAxis
        mouseX = event.pageX / -pageX;
        xAxis = -mouseX * 100 - 100;

        $('.box-ghost-eyes').css({ 'transform': 'translate('+ xAxis +'%,-'+ yAxis +'%)' });

    });
</script>
<?php $this->need('sidebar.php'); ?>
<?php $this->need('footer.php'); ?>
