(self.webpackChunkeasybe=self.webpackChunkeasybe||[]).push([[289],{8476:function(t,e,i){var n={"./particles":[4451,290],"./particles.js":[4451,290],"./ribbons":[3600,663],"./ribbons.js":[3600,663],"./season":[5077,77],"./season.js":[5077,77]};function o(t){if(!i.o(n,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=n[t],o=e[0];return i.e(e[1]).then((function(){return i(o)}))}o.keys=function(){return Object.keys(n)},o.id=8476,t.exports=o},4284:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return a}});var n=i(5299);function o(t){"function"==typeof $.__config.hooks.dayNightControl&&$.__config.hooks.dayNightControl(t)}function a(){!function(){const t=$("#footer"),e=`Copyright © ${(new Date).getFullYear()} ${$.__config.info.name}`;let i=' <div class="footer-image" id="footerStyle1" style="display:none"></div> <footer id="footerStyle2" style="display:none"> <footer-background> <figure class="clouds"></figure> <figure class="background"></figure> <figure class="foreground"></figure> </footer-background> </footer> <div class="footer-box"> <div class="footer-text" style="display:##textShow##"> [ ##textLeft## <span class="footer-text-icon"> <span class="iconfont ##iconFont##" style="color:##iconColor##;font-size:##iconSize##"></span> </span> ##textRight## ] </div> <div> <span id="blogRunTimeSpan"></span> <span class="my-face">ღゝ◡╹)ノ♡</span> </div> <div id="linksHtml" style="display:##linkShow##">##linksHtml##</div> <div id="cnzzInfo" style="display:none"> ##cnzzHtml## </div> <div> ##footerText## <a href="https://typecho.org/" style="margin-left:5px" target="_blank"> <svg style="width:16px;height:16px;vertical-align:-4px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="26px" viewBox="0 0 30 26" version="1.1"> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <path d="M13,26 C3.36833333,26 0,22.631 0,13 C0,3.36866667 3.36833333,0 13,0 C22.6316667,0 26,3.36866667 26,13 C26,22.631 22.6316667,26 13,26 Z M6,9 L20,9 L20,7 L6,7 L6,9 Z M6,14 L16,14 L16,12 L6,12 L6,14 Z M6,19 L18,19 L18,17 L6,17 L6,19 Z" id="icon" fill="#000000" sketch:type="MSShapeGroup"></path> </g> </svg> </a> <a href="https://github.com/wangyang0210/EasyBe" target="_blank"> <span>Theme by easybe</span> </a> </div> <div><span id="gonganbeian" style="display:none"><a href="##gonganbeianLink##">##gonganbeian##</a> | </span><span id="beian" style="display:none"><a href="https://beian.miit.gov.cn/">##beian##</a></span></div> <div id="notification" class="el-notification right" style="top:16px;z-index:2000;display:none"> <i class="el-notification__icon icon-warn"></i> <div class="el-notification__group is-with-icon"> <h2 class="el-notification__title">评论通知</h2> <div class="el-notification__content"> <p>这是一条警告的提示消息</p> </div> <div class="el-notification__closeBtn iconfont icon-close"></div> </div> </div> </div> <script async="" src="//at.alicdn.com/t/c/font_3628204_br29bzmhrps.js"><\/script> ',o=$.__config.footer;i=$.__tools.tempReplacement(i,"footerText",e),o.aplayer.enable&&Promise.all([$.__tools.dynamicLoadingJs($.__config.default.aplayer),$.__tools.dynamicLoadingJs($.__config.default.meting)]).then((t=>{$.__tools.dynamicLoadingCss($.__config.default.aplayercss),$("#footer").append(`\n               <meting-js \n                  id="${o.aplayer.options.id}"\n                  server="${o.aplayer.options.server}"\n                  type="${o.aplayer.options.type}"\n                  auto="${o.aplayer.options.auto}"\n                  fixed="${o.aplayer.options.fixed}"\n                  mini="${o.aplayer.options.mini}"\n                  autoplay="${o.aplayer.options.autoplay}"\n                  theme="${o.aplayer.options.theme}"\n                  loop="${o.aplayer.options.loop}"\n                  order="${o.aplayer.options.order}"\n                  preload="${o.aplayer.options.preload}"\n                  volume="${o.aplayer.options.volume}"\n                  mutex="${o.aplayer.options.mutex}"\n                  lrc-type="${o.aplayer.options.lrcType}"\n                  list-folded="${o.aplayer.options.listFolded}"\n                  list-max-height="${o.aplayer.options.listMaxHeight}"\n                  storage-hame="${o.aplayer.options.storageHame}"\n               > \n              </meting-js>`)})).catch((t=>console.error("aplayer|meting",t))),(()=>{if(o.text.left||o.text.right){let t=[["textLeft",o.text.left],["iconFont",o.text.iconFont.icon],["iconColor",o.text.iconFont.color],["iconSize",o.text.iconFont.fontSize],["textRight",o.text.right],["textShow","block"]];i=$.__tools.batchTempReplacement(i,t)}else i=$.__tools.tempReplacement(i,"textShow","none")})(),(()=>{if($.__config.links.footer.length>0){let t="友情链接：";for(let e=0;e<$.__config.links.footer.length;e++)t+='<a href="'+$.__config.links.footer[e][1]+'" target="_blank">'+$.__config.links.footer[e][0]+"</a>",e<$.__config.links.footer.length-1&&(t+='<span style="margin: 0 3px;">/</span>');i=$.__tools.batchTempReplacement(i,[["linksHtml",t],["linkShow","block"]])}else i=$.__tools.tempReplacement(i,"linkShow","none")})(),$.__config.beian.info&&(i=$.__tools.tempReplacement(i,"beian",$.__config.beian.info)),$.__config.gonganbeian.info&&$.__config.gonganbeian.link&&(i=$.__tools.batchTempReplacement(i,[["gonganbeian",$.__config.gonganbeian.info],["gonganbeianLink",$.__config.gonganbeian.link]])),t.html(i),$.__config.beian.info&&$("#beian").show(),$.__config.gonganbeian.info&&$("#gonganbeian").show(),(()=>{if(1===parseInt(o.style))$("#footer").addClass("footer-t1").find("#footerStyle1").show().css("background","url(//www.wangyangyang.vip/usr/uploads/imgs/o_221114131838_footer.webp)  no-repeat 50%");else{$("#footer .footer-text").css({"padding-bottom":"0","border-bottom":"none","margin-bottom":"0"});let t=$("#footerStyle2");t.show().find(".clouds").css("background","url(//www.wangyangyang.vip/usr/uploads/imgs/o_221114132857_clouds.webp)  repeat-x"),t.find(".background").css("background","url(//www.wangyangyang.vip/usr/uploads/imgs/o_221114134558_background.webp)  repeat-x"),t.find(".foreground").css("background","url(//www.wangyangyang.vip/usr/uploads/imgs/o_221114132230_foreground.webp)  repeat-x")}})(),window.setInterval((()=>{let t=$.__tools.getRunDate($.__config.info.startDate||="2021-01-01");$("#blogRunTimeSpan").text("This blog has running : "+t.daysold+" d "+t.hrsold+" h "+t.minsold+" m "+t.seconds+" s")}),500),(()=>{if($.__config.umami?.url&&$.__config.umami?.shareId){const t=$.__config.umami.url,e=$.__config.umami.shareId;let i=localStorage.getItem(e);!i&&(0,n.W)(`${t}api/share/${e}`).then((t=>{localStorage.setItem(e,t.websiteId)})),$.__timeIds.umamiTId=window.setInterval((()=>{Promise.all([(0,n.W)(`${t}api/website/${i}/stats?start_at=${$.__tools.getTodayStart()}&end_at=${$.__tools.getTodayEnd()}`),(0,n.W)(`${t}api/website/${i}/stats?start_at=${$.__tools.getYesterdayStart()}&end_at=${$.__tools.getYesterdayEnd()}`),(0,n.W)(`${t}api/website/${i}/active`)]).then((function(t){const e=t[0],i=t[1],n=t[2];$("#cnzzInfo").text(`Online: ${n[0].x} | Today: ${e.pageviews.value} / ${e.uniques.value} / ${e.totaltime.value} | Yesterday: ${i.pageviews.value} / ${i.uniques.value} / ${i.totaltime.value}`).show()})),$.__tools.clearIntervalTimeId($.__timeIds.umamiTId)}),5e3)}})()}(),function(){$("#blog-news").prepend('<div id="rightMenu"> <div id="rtaDirectory" class="rightMenuItem" style="display:none"> <span class="rightMenuSpan rtaDirectorySpan"> 文章目录 </span> <i banmv class="iconfont icon-mulu"></i> </div> <div id="rightMenuHome" class="rightMenuItem" style="display:none" clickflg="true"> <span class="rightMenuSpan"> 访问主页 </span> <i class="iconfont icon-home"></i> </div> <span class="hideRightMenu"> <div id="rightDiggit" class="rightMenuItem" clickflg="false" style="display:none"> <span class="rightMenuSpan rightDiggitSpan"></span> <i class="iconfont icon-dianzan"></i> </div> <div id="rightBuryit" class="rightMenuItem" clickflg="false" style="display:none"> <span class="rightMenuSpan rightBuryitSpan"></span> <i class="iconfont icon-buzan"></i> </div> <div id="rightDashang" class="rightMenuItem" clickflg="false" style="display:none"> <span class="rightMenuSpan rightDanshanSpan"> <div class="ds-pay"> <div class="ds-alipay" style="display:none"> <img \\> <span>Alipay</span> </div> <div class="ds-wecat" style="display:none"> <img \\> <span>WeChat</span> </div> </div> </span> <i class="iconfont icon-dashang"></i> </div> <div id="rightGzh" class="rightMenuItem" clickflg="false" style="display:none"> <span class="rightMenuSpan rightGzhSpan"> <div class="ds-pay"> <div class="ds-gzh"> <img/><span>qrCode</span> </div> </div> </span> <i class="iconfont icon-erweima"></i> </div> <div id="update" class="rightMenuItem" clickflg="false" style="display:none"> <span class="rightMenuSpan"> 更新 </span> <i style="font-size:25px;position:relative;left:2px;top:-1px"> <svg class="icon" viewBox="0 0 1191 1024" p-id="19396"><path d="M95.124898 686.252041H16.615264a16.615264 16.615264 0 0 1 0-33.230528h78.509634a16.615264 16.615264 0 0 1 0 33.230528z" fill="#50FBFF" p-id="19397"></path><path d="M55.877261 725.499677a16.586543 16.586543 0 0 1-16.615263-16.600903V630.432222a16.615264 16.615264 0 1 1 33.216167 0v78.509634A16.586543 16.586543 0 0 1 55.877261 725.499677z" fill="#50FBFF" p-id="19398"></path><path d="M1086.152862 807.340981m-29.582924 0a29.582924 29.582924 0 1 0 59.165849 0 29.582924 29.582924 0 1 0-59.165849 0Z" fill="#FE7E00" p-id="19399"></path><path d="M1007.729392 918.994979m-17.591788 0a17.591788 17.591788 0 1 0 35.183575 0 17.591788 17.591788 0 1 0-35.183575 0Z" fill="#FE7E00" p-id="19400"></path><path d="M1126.76476 612.553221m-64.651614 0a64.651614 64.651614 0 1 0 129.303228 0 64.651614 64.651614 0 1 0-129.303228 0Z" fill="#FEDF1D" p-id="19401"></path><path d="M642.768014 548.993016m-441.805178 0a441.805178 441.805178 0 1 0 883.610356 0 441.805178 441.805178 0 1 0-883.610356 0Z" fill="#FEDB03" p-id="19402"></path><path d="M864.180406 125.914117a476.601015 476.601015 0 0 1 98.643255 290.960985c0 264.422517-214.361316 478.783833-478.783833 478.783833a476.572294 476.572294 0 0 1-283.076992-92.69795c87.499397 114.15275 225.189241 187.837209 380.140577 187.837209 264.436878 0 478.798194-214.361316 478.798194-478.798194 0-158.498415-77.07357-298.945502-195.721201-386.085883z" fill="#FC8704" p-id="19403"></path><path d="M103.410989 578.446695a33.216167 33.216167 0 0 1-33.101282-30.947186c-0.789835-11.718285-1.220655-23.594536-1.220654-35.499509a515.417833 515.417833 0 0 1 4.896979-71.013379 33.216167 33.216167 0 0 1 65.800466 9.14773 450.134351 450.134351 0 0 0-4.308193 61.865649q0 15.624379 1.048327 30.947185a33.216167 33.216167 0 0 1-30.774858 35.427706c-0.804196 0.043082-1.56531 0.071803-2.340785 0.071804z" fill="#27233A" p-id="19404"></path><path d="M581.089053 1024A512.172328 512.172328 0 0 1 96.9487 678.942473a33.216167 33.216167 0 0 1 62.799091-21.67021 445.783076 445.783076 0 0 0 421.341262 300.295403c245.696239 0 445.567666-199.885788 445.567666-445.567666S826.799652 66.446695 581.089053 66.446695a446.285698 446.285698 0 0 0-389.604241 229.167138 33.216167 33.216167 0 1 1-58.045719-32.311446A512.746753 512.746753 0 0 1 581.089053 0c282.315878 0 512 229.770286 512 512S863.419292 1024 581.089053 1024z" fill="#27233A" p-id="19405"></path><path d="M799.126693 550.213671a33.173085 33.173085 0 0 1-23.494011-9.722156L581.089053 345.933526 386.574145 540.491515a33.220475 33.220475 0 0 1-46.973663-46.988023l218.02328-218.037641c12.450677-12.450677 34.465543-12.450677 46.973663 0l218.008919 218.037641a33.216167 33.216167 0 0 1-23.479651 56.710179z" fill="#27233A" p-id="19406"></path><path d="M581.089053 758.241943a33.216167 33.216167 0 0 1-33.216167-33.216167V298.959863a33.230528 33.230528 0 1 1 66.446694 0v426.094635A33.216167 33.216167 0 0 1 581.089053 758.241943z" fill="#27233A" p-id="19407"></path></svg> </i> </div> </span> <div id="rightMenuSite" class="rightMenuItem" clickflg="true"> <span class="rightMenuSpan"> 点击开启 </span> <i banmv class="iconfont icon-shezhi"></i> </div> <div id="toUpDown" class="rightMenuItem" data="up"> <span class="rightMenuSpan toUpDownSpan"> 返回顶部 </span> <div id="toUpDownI"> <i banmv class="iconfont icon-zhiding"></i> </div> </div> </div> ');const t=$("#rightMenu");t.find("i").on({mouseover:function(){void 0===$(this).attr("banmv")&&$(this).rotate({animateTo:-60,duration:250,callback:function(){$(this).rotate({animateTo:60,duration:250,callback:function(){$(this).rotate({animateTo:-30,duration:150,callback:function(){$(this).rotate({animateTo:30,duration:150,callback:function(){$(this).rotate({animateTo:0,duration:100})}})}})}})}})}}),t.find(".rightMenuItem").on({mouseover:function(){$(this).find(".rightMenuSpan").stop().fadeIn(300)},mouseout:function(){$(this).find(".rightMenuSpan").stop().fadeOut(300)}}),$("#toUpDown").click((function(){if("down"===$(this).attr("data")){let t;t=$.__config.rtMenu.downScrollDom&&$($.__config.rtMenu.downScrollDom).length>0?$($.__config.rtMenu.downScrollDom).offset().top+10:$(document).height()-$(window).height(),$.__tools.actScroll(t,900)}else $.__tools.actScroll(0,900)})),$.__event.scroll.handle.push((()=>{let t=$("#toUpDown"),e=$("#toUpDownI"),i=$(".toUpDownSpan");$.__event.scroll.docScroll=$(document).scrollTop(),$.__event.scroll.homeScroll=$("#home").offset().top-40,$.__event.scroll.homeScroll<=$.__event.scroll.docScroll?(e.rotate({animateTo:0}),t.attr("data","up"),i.text("返回顶部")):(e.rotate({animateTo:-180}),t.attr("data","down"),i.text("跳至底部"))})),(()=>{let t=0;setInterval((function(){t+=7,$("#rightMenuSite i").rotate(t)}),30),$("#rightMenuSite").click((function(){"true"===$(this).attr("clickflg")?($("#rightMenuSite .rightMenuSpan").text("点击关闭"),$(this).attr("clickflg","false")):($("#rightMenuSite .rightMenuSpan").text("点击开启"),$(this).attr("clickflg","true")),$("#rightMenu .hideRightMenu").slideToggle(350)}))})(),$.__config.rtMenu.qrCode&&$("#rightGzh").show().find(".ds-gzh img").attr("src",$.__config.rtMenu.qrCode),($.__config.rtMenu.reward.alipay||$.__config.rtMenu.reward.wechatpay)&&($("#rightDashang").show(),$.__config.rtMenu.reward.alipay&&$("#rightDashang .ds-alipay").show().find("img").attr("src",$.__config.rtMenu.reward.alipay),$.__config.rtMenu.reward.wechatpay&&$("#rightDashang .ds-wecat").show().find("img").attr("src",$.__config.rtMenu.reward.wechatpay)),(()=>{function t(t,e,i){"false"===t.attr("clickflg")&&(t.attr("clickflg","true"),e.text("提交中."),setTimeout((()=>{e.text("提交中..")}),300),setTimeout((()=>{e.text("提交中...")}),600),setTimeout((()=>{e.text("更新中.")}),900),setTimeout((()=>{e.text("更新中..")}),1200),setTimeout((()=>{e.text("更新中...")}),1500),setTimeout((()=>{e.text(i),t.attr("clickflg","false")}),1800))}$.__timeIds.diggitTId=window.setInterval((()=>{let e=$(".diggit");if(e.length>0){e.prepend('<i class="iconfont icon-dianzan"></i>');let i=$("#rightDiggit"),n=i.find(".rightMenuSpan");$.__config.articleContent.diggit&&$.__tools.dynamicLoadingJs($.__config.default.mojs).then((()=>{const t=new mojs.Shape({left:0,top:0,stroke:"#FF9C00",strokeWidth:{56:0},fill:"none",scale:{0:1,easing:"quad.out"},radius:28,duration:450}),e=new mojs.Burst({left:0,top:0,radius:{0:50},easing:mojs.easing.bezier(.1,1,.3,1),delay:300,children:{duration:750,radius:{0:"rand(5, 25)"},shape:["circle","rect","polygon"],fill:["#1abc9c","#2ecc71","#00cec9","#3498db","#9b59b6","#fdcb6e","#f1c40f","#e67e22","#e74c3c","#e84393"],degreeShift:"rand(-90, 90)",delay:"stagger(0, 40)"},opacity:.6,count:10});e.el.style.zIndex=999999;const i=new mojs.Timeline({speed:1.5});i.add(e,t),$(document).on("click touchend",".diggit, #rightDiggit",(function(n){const o={x:n.pageX,y:n.pageY};e.tune(o),t.tune(o),i.replay()}))})).catch((t=>console.error("rtMenu-mo.js: ",t))),i.attr("onclick",e.attr("onclick")),n.text($("#digg_count").text()),i.show().click((function(){t($(this),n,$("#digg_count").text())})),$.__tools.clearIntervalTimeId($.__timeIds.diggitTId)}}),1e3),$.__timeIds.buryitTId=window.setInterval((()=>{let e=$(".buryit");if(e.length>0){e.prepend('<i class="iconfont icon-buzan"></i>');let i=$("#rightBuryit"),n=i.find(".rightMenuSpan");i.attr("onclick",e.attr("onclick")),n.text($("#bury_count").text()),i.show().click((function(){t($(this),n,$("#bury_count").text())})),$.__tools.clearIntervalTimeId($.__timeIds.buryitTId)}}),1e3)})(),(()=>{if("home"!==$.__status.pageType){let t=$("#rtaDirectory");t.show(),t.click((function(){let t=$("#articleDirectory");t.length&&(t.is(":hidden")?t.fadeIn(300):t.fadeOut(300))}))}})(),(()=>{if("home"!==$.__status.pageType){let t=$("#rightMenuHome");t.show(),t.click((function(){window.location.href=$.__status.homeUrl}))}})(),window.isBlogOwner&&window.isLogined&&$.__tools.getVersion()&&($("#update").show(),$("#update").click((function(){window.open(localStorage.getItem("repoUrl"))})),console.log("\n  🎉%c新版本已经发布了,快点击下方链接查看吧~ \n","color: #fefefe;text-shadow: 0 0 0.5em #0ae642, 0 0 0.2em #5c5c5c;"),console.log("\n %c "+localStorage.getItem("version")+" %c "+localStorage.getItem("repoUrl")+" \n","color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; color:#000;padding:5px 0;"))}(),function(){if(!$.__config.switchDayNight.enable)return!0;let t,e=parseInt((new Date).getHours()),n="cnblogs_config_isNight";$.__status.dayNightCssHref="";let a=t=>{$.__config.articleContent.commentBackground.enable&&$.__tools.setCommentBackground(t)};function s(){$.__status.dayNightCssHref?$("head").append('<link type="text/css" id="baseDarkCss" rel="stylesheet" href="'+$.__status.dayNightCssHref+'">'):(i.e(984).then(i.bind(i,5438)),setTimeout((function(){let t=$("head link");for(let e=t.length-1;e>0;e--){let i=$(t[e]),n=i.attr("href");if(/^.*\/day-night\.[a-z0-9]{8}\.css$/.test(n)){$.__status.dayNightCssHref=n,i.attr("id","baseDarkCss");break}}}),500))}(()=>{switch($.__tools.getCookie(n)){case"day":t="daySwitch";break;case"night":t="";break;default:t=$.__config.switchDayNight.auto.enable?e>=$.__config.switchDayNight.auto.nightHour?"":e>=$.__config.switchDayNight.auto.dayHour?"daySwitch":"":"daySwitch"}})(),$.__config.switchDayNight.nightMode&&(t=""),$("body").prepend($.__tools.tempReplacement('<div id="dayNightSwitch" class="generalWrapper"> <div class="onOff ##daySwitch##"> <div class="star star1"></div> <div class="star star2"></div> <div class="star star3"></div> <div class="star star4"></div> <div class="star star5"></div> <div class="star sky"></div> <div class="sunMoon"> <div class="crater crater1"></div> <div class="crater crater2"></div> <div class="crater crater3"></div> <div class="cloud part1"></div> <div class="cloud part2"></div> </div> </div> </div>',"daySwitch",t)),t||s(),a(t?"day":"night"),$("#dayNightSwitch .onOff").click((function(){$(this).hasClass("daySwitch")?($.__tools.setCookie(n,"night",14400),$(this).removeClass("daySwitch"),s(),o("night"),a("night")):($.__tools.setCookie(n,"day",14400),$(this).addClass("daySwitch"),$("head link#baseDarkCss").remove(),o("day"),a("day"))}))}(),$.__tools.dynamicLoadingJs($.__config.default.toprogress).then((t=>{$("#blog-news").prepend('<div id="progressBar"></div>');let e=ToProgress&&new window.ToProgress($.__config.progressBar,"#progressBar");$.__event.scroll.handle.push((()=>{e.setProgress($.__tools.getScrollPercent())}))})).catch((t=>console.log("toprogress.js",t))),(()=>{let t=$.__config.animate.background;for(let e in t)t[e].enable&&i(8476)(`./${e}`).then((i=>{(0,i.default)(t[e]?.options)}))})(),(()=>{let t=$.__config.animate.mouse;for(let e in t)t[e].enable&&i(5536)(`./${e}`).then((i=>{(0,i.default)(t[e]?.options)}))})(),function(){let t=$('link[rel="shortcut icon"]');if($.__config.info.blogIcon&&t.length&&t.attr("href",$.__config.info.blogIcon),$.__config.info.blogIcon&&!t.length){let t=document.createElement("link");t.rel="shortcut icon",t.href=$.__config.info.blogIcon,document.getElementsByTagName("head")[0].appendChild(t)}}(),function(){let t,e,i,n=document.title,o=$.__config.title.onblur,a=$.__config.title.onblurTime,s=$.__config.title.focus,l=$.__config.title.focusTime;void 0!==document.hidden&&(t="hidden",e="visibilitychange"),void 0!==document.mozHidden&&(t="mozHidden",e="mozvisibilitychange"),void 0!==document.webkitHidden&&(t="webkitHidden",e="webkitvisibilitychange");let c=()=>{i&&clearTimeout(i),document[t]&&a>=0&&(i=setTimeout((()=>{document.title=o+" - "+n.split(" - ")[0]}),a)),!document[t]&&l>=0&&(document.title=s,i=setTimeout((()=>{document.title=n}),l)),!document[t]&&l<0&&(document.title=n)};void 0===document.addEventListener&&void 0===document[t]||document.addEventListener(e,c,!1)}(),window.console.log.apply(console,["\n %c %c %c EasyBe-GitHub %c  %c https://github.com/wangyang0210/EasyBe %c \n\n","background: #fadfa3; padding:5px 0;","background: #fadfa3; padding:5px 0;","color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;","background: #FCEDC9; color:#030307; padding:5px 0;","background: #fadfa3; padding:5px 0;"]),$.__config.consoleList.length&&$.each($.__config.consoleList,(function(t){let e=$.__config.consoleList[t];console.log("\n %c "+e[0]+" %c "+e[1]+" \n","color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; color:#000;padding:5px 0;")}))}},5536:function(t,e,i){var n={"./bubble":[6373,545],"./bubble.js":[6373,545],"./click":[8802,87],"./click.js":[8802,87],"./mo":[925,170],"./mo.js":[925,170],"./mouse":[2352,379],"./mouse.js":[2352,379]};function o(t){if(!i.o(n,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=n[t],o=e[0];return i.e(e[1]).then((function(){return i(o)}))}o.keys=function(){return Object.keys(n)},o.id=5536,t.exports=o}}]);