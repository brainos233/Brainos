
/*
 * @name: Pure百度美化(ipad版)
 * @Author: 酷安搜CWorld
 * @version: 1.0
 * @description: 一个非常漂亮的百度质感美化皮肤
 * @include: *
 */

(function () {
  const whiteList = ["http://www.baidu.com/", "https://www.baidu.com/", "http://baidu.com/", "https://baidu.com/", "http://userstyles.org/styles/173673", "https://userstyles.org/styles/173673", "wenku.baidu.com", "zhidao.baidu.com", "passport.baidu.com", "i.baidu.com", "music.taihe.com", "play.taihe.com", "jingyan.baidu.com", "baike.baidu.com", "image.baidu.com", "site.baidu.com", "map.baidu.com", "nuomi.com", "pan.baidu.com", "yun.baidu.com", "duanxin.baidu.com", "wenzhang.baidu.com", "tongxunlu.baidu.com", "note.baidu.com", "tonghuajilu.baidu.com", "fanyi.baidu.com", "xueshu.baidu.com", "bce.baidu.com", "video.baidu.com", "news.baidu.com", "baijiahao.baidu.com", "mbd.baidu.com", "top.baidu.com", "cache.baiducontent.com", "dwz.cn"];
  const hostname = window.location.hostname;
  const key = encodeURIComponent('酷安搜CWorld:Pure百度美化(ipad版):执行判断');
  const canLoad = whiteList.some(url => {
    if (url.match(hostname)) {
      return true;
    };
    return false;
  });

  if (!canLoad) {
    return;
  };

  document.head.innerHTML += `
    <style id="pure-baidu-pc-css"></style>
  `;

  if (["http://www.baidu.com/", "https://www.baidu.com/", "http://baidu.com/", "https://baidu.com/"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            /*------------------自定义------------------*/

/* ---设置背景，修改此处第二行的图片链接--- */

body {
  background: url(http://www.pptbz.com/d/file/p/201708/a1d07b6201af8f574b6539cb724bbc16.png);
}

/* 
      　　　　　　　　　---以下内容使用方法：---
      将光标移至提示语下的代码处任意位置（点击代码）后按 Ctrl + / 切换
      */

/* 隐藏侧栏 */

#content_right{display:none!important}

/* 固定背景 */

/* body{background-attachment: fixed;} */

/* 搜索结果居中 */

#container{margin:0 auto;}#content_left {padding-left:0;}

/* 搜索框居中 */

.soutu-env-result #form{margin:10px 19.5%;}.s_tab_inner{margin:0 20%;}

/* 两列卡片，不带居中，请先隐藏侧栏 */

#wrapper #content_left {
  width: auto;
  display: inline-grid;
  grid-template-columns: 50% 50%;
}

#wrapper #content_left .result,
#wrapper #content_left .c-container {
  width: unset !important;
  max-width: 100%;
  margin-bottom: 30px;
  margin-left: 5px;
  margin-right: 15px;
}

.c-span18 {
  width: 300px;
}

/* 开启百度自带首页背景 */

/* .s-skin-container{display:block!important}.s_ipt_wr{background:#ffffffa8!important;box-shadow: 0 1px 4px #00000036} */

/* 开启百度首页导航 */

#s_wrap {
  display: block !important;
  margin-top: 80px;
}

#s_form_wrapper > #form {
  margin-top: -50px;
}

/* 搜索内容下划线样式，默认开启 */

#wrapper #content_left .c-container h3 a,
#wrapper #content_left .c-container[tpl="soft"] .op-soft-title a,
#wrapper #content_left .c-container[tpl="soft"] .op-soft-title a em,
#wrapper #content_left .result h3 a em {
  color: #2866bd;
  font-weight: 700;
}

#wrapper #content_left .op-soft-title a,
#wrapper #content_left .result h3 a {
  position: relative;
}

#wrapper #content_left .op-soft-title a:visited em,
#wrapper #content_left .result h3 a:visited,
#wrapper #content_left .result h3 a:visited em,
wrapper #content_left .op-soft-title a:visited {
  color: #609;
}

#wrapper #content_left .op-soft-title a:visited:after,
#wrapper #content_left .result h3 a:visited:after {
  content: "";
  position: absolute;
  border-bottom: 2px solid #e5b0ff;
  bottom: -2px;
  left: 100%;
  width: 0;
  -webkit-transition: width 350ms, left 350ms;
  -moz-transition: width 350ms, left 350ms;
  transition: width 350ms, left 350ms;
}

#wrapper #content_left .op-soft-title a:after,
#wrapper #content_left .result h3 a:after {
  content: "";
  position: absolute;
  border-bottom: 2px solid #2866bd;
  bottom: -2px;
  left: 100%;
  width: 0;
  -webkit-transition: width 350ms, left 350ms;
  -moz-transition: width 350ms, left 350ms;
  transition: width 350ms, left 350ms;
}

#wrapper #content_left .op-soft-title a:visited:hover:after,
#wrapper #content_left .result h3 a:visited:hover:after {
  left: 0;
  width: 100%;
  -webkit-transition: width 350ms;
  -moz-transition: width 350ms;
  transition: width 350ms;
}

#wrapper #content_left .op-soft-title a:hover:after,
#wrapper #content_left .result h3 a:hover:after {
  left: 0;
  width: 100%;
  -webkit-transition: width 350ms;
  -moz-transition: width 350ms;
  transition: width 350ms;
}
          </style>
        `;
  };

  if (["http://userstyles.org/styles/173673", "https://userstyles.org/styles/173673"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            #footer,
#installBox,
#ovals-wrapper,
#top_android_button,
.adContainer,
.android_button_banner,
.android_button_button,
.fallbackDiv,
.flags,
.overlay_background,
.walking {
  display: none !important;
}

#header {
  background-color: #778899;
}

#create_new_style {
  border: solid 1.1px #ffffff8c;
  color: #fff !important;
}

div.right {
  background-color: #f0f0f047;
  padding: 12px 20px;
  border-radius: 7px;
  position: relative;
  right: 30px;
}

.header_button:nth-child(2) {
  margin-right: 10px;
}

.header-search .search_input.focused {
  background-color: #fffc;
  color: #000;
}

#style_installed_button {
  transition: 0.9s;
  border-radius: 100px;
  background-color: #fff;
  border: solid 1px #2ecc71;
  box-shadow: 0 3px 10px #2ecc7187 !important;
}
          </style>
        `;
  };

  if (["http://www.baidu.com/", "https://www.baidu.com/", "http://baidu.com/", "https://baidu.com/"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            .result.c-container#1[tpl="se_com_default"],
div#m3012665277_canvas,
div#zsyx_im0 {
  display: none !important;
}

body {
  background-size: cover;
}

a {
  text-decoration: none !important;
}

h3 sup {
  display: none !important;
}

.s-top-wrap {
  border: none;
}

.sui-dialog {
  border: none;
  box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.3);
  background: #f4f4f4;
  overflow: hidden;
}

.sui-dialog-yellow.sui-dialog-hasmask,
.sui-dialog.sui-dialog-hasmask {
  border-radius: 3px;
  transition: 0.3s;
}

.sui-dialog-title {
  border: none;
  background: #fff;
  box-shadow: 0 0 10px #00000026;
}

span.check-item {
  background: #fff0 !important;
}

.tip-con-wrap .button-wrap .btn-ok {
  background: #4879bd !important;
}

#passport-login-pop {
  top: 250px !important;
}

#head {
  transition: 0.1s;
  border-bottom: none;
  background: #fff0;
}

.wrapper_l #head {
  background: #fbfbfb69;
}

#head.s_down {
  transition: 0.3s;
  border-bottom: none;
  background: #f7f7f7eb;
}

body.is-lite.s-manhattan-index #head {
  background: 0 0;
}

#head.s_down {
  box-shadow: 0 0 20px #00000038 !important;
}

#s_tab {
  background: #f8f8f8ad;
  box-shadow: 0 0 20px #00000038 !important;
}

#content_right {
  position: relative;
  left: 90px;
  border-left: none;
  background: #ffffffa8;
  margin-top: 20px;
  padding: 25px 0 0 30px;
  box-shadow: 0 0 10px #00000026;
}

.c-container {
  padding: 25px;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  width: 549px;
}

.video_list.video_short {
  padding: 20px 20px 15px !important;
}

.video_list_container.content_default.content1 {
  margin-top: 20px;
}

#content_left .result-op,
#wrapper #content_left .result,
#wrapper #rs,
.video_list.video_short,
div#wrapper #content_left .result-op.c-container {
  width: 600px;
  padding: 0 20px 15px;
  margin-top: 0;
  margin-bottom: 20px;
  border-radius: 0;
  background-color: #fff;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

#content_left .result-op:hover,
#wrapper #content_left .result-op:hover,
#wrapper #content_left .result:hover,
.video_list.video_short:hover {
  box-shadow: 0 0 2px gray !important;
  background: #f3f3f3c4 !important;
}

#wrapper #content_left .c-container h3,
#wrapper #content_left .result h3,
#wrapper #content_left .result[tpl="soft"] .op-soft-title {
  background-color: #f8f8f8;
  margin: 0 -20px 10px;
  padding: 8px 20px 5px;
  border-radius: 5px 5px 0 0;
}

.container_l .cr-content .c-span-last-s {
  margin-right: 0;
}

.c-span10,
.c-span11,
.c-span12,
.c-span13,
.c-span14,
.c-span15,
.c-span16,
.c-span17,
.c-span18,
.c-span19,
.c-span2,
.c-span20,
.c-span21,
.c-span22,
.c-span23,
.c-span24,
.c-span3,
.c-span4,
.c-span5,
.c-span6,
.c-span7,
.c-span8,
.c-span9 {
  transition: 0.3s;
  padding: 6.3px;
  margin-right: 0;
}

.c-span10:hover,
.c-span11:hover,
.c-span12:hover,
.c-span13:hover,
.c-span14:hover,
.c-span15:hover,
.c-span16:hover,
.c-span17:hover,
.c-span18:hover,
.c-span19:hover,
.c-span20:hover,
.c-span21:hover,
.c-span22:hover,
.c-span23:hover,
.c-span24:hover,
.c-span2:hover,
.c-span3:hover,
.c-span4:hover,
.c-span6:hover,
.c-span7:hover,
.c-span8:hover,
.c-span9:hover {
  background: #fff;
  box-shadow: 0 0 10px #00000026;
}

.c-table td,
.c-table th {
  border: none;
}

.c-table.opr-toplist1-table tr:nth-child(2n + 1) {
  background: #ffffff59;
}

.btn {
  transition: 0.3s;
  width: 100px;
  height: 43px;
  background: #4879bd;
  border: none;
  -webkit-appearance: none;
  -webkit-border-radius: 0;
  cursor: pointer;
}

.logo img {
  display: none;
}

#s_tab {
  padding-bottom: 80px;
  padding-top: 17px;
}

#main {
  position: relative;
  top: -70px;
  padding: 1px 0 20px 20px;
  margin-bottom: 35px;
  border-radius: 0;
  background-color: #fff;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.wgt-img-exp li.exp-item-hover {
  box-shadow: 0 0 2px gray !important;
  background: #f3f3f3 !important;
}

.con {
  transition: 0.3s;
  border: none;
  width: 220px;
}

.con:hover {
  box-shadow: 0 2px 10px #0000002b;
}

.bdlayer.pfpanel {
  transition: 0.3s;
  box-shadow: 0 10px 20px #0000002b;
}

.pftab_bd .item {
  overflow: visible;
}

#gxszButton .prefpanelgo,
#gxszButton .prefpanelrestore {
  transition: 0.3s;
}

#gxszButton .prefpanelgo:hover,
#gxszButton .prefpanelrestore:hover {
  box-shadow: 0 3px 4px #00000036;
}

#u_sp .s_bdbri {
  border-left: none;
  box-shadow: 0 2px 10px #0000002b;
}

#u_sp .s_bdbriwrapper > a {
  transition: 0.3s;
  border-bottom: #0000000a 1px solid;
}

#u_sp .s_bdbriwrapper > a:hover {
  background-color: #fff;
  box-shadow: 0 1px 3px #0000002b;
}

#bottom_layer {
  transition: 0.3s;
  opacity: 0;
  transform: translatey(-10px);
}

#bottom_layer:hover {
  opacity: 1;
  transform: translatey(0);
}

.s-skin-hasbg #bottom_layer {
  background-color: #00000052;
}

* {
  font-family: -apple-system, "Helvetica Neue", Helvetica, "Nimbus Sans L",
      Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB",
      "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei",
      "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei,
      "WenQuanYi Zen Hei Sharp", sans-serif;
}

::-webkit-scrollbar {
  width: 6px;
  height: 10px;
  background-color: rgba(0, 0, 0, 0);
}

::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
}

::-webkit-scrollbar-thumb:hover {
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
}

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

@-webkit-keyframes bounceInRight {
  60%, 75%, 90%, from, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes bounceInRight {
  60%, 75%, 90%, from, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

.bounceInRight {
  -webkit-animation-name: bounceInRight;
  animation-name: bounceInRight;
}

@-webkit-keyframes bounceInUp {
  60%, 75%, 90%, from, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

a {
  text-decoration: none;
  margin-bottom: 2px;
}

.c-showurl:hover {
  text-decoration: none;
  border: none;
  opacity: 0.8;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.res-gap-right16:hover {
  border-bottom: #4879bd 1.2px solid;
}

.c-showurl {
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.c-tip-arrow:hover {
  text-decoration: none;
  border: none;
}

.c-default a {
  text-decoration: none;
  border: none;
}

.c-gap-bottom a:hover {
  text-decoration: underline;
}

.op_dict3_morelink a:hover {
  text-decoration: underline;
}

.c-btn:hover {
  text-decoration: none !important;
}

td a:hover {
  text-decoration: underline;
}

em {
  text-decoration: none !important;
}

#s_wrap {
  display: none;
}

.s-top-nav {
  display: none;
}

#s_strpx_span1 {
  display: none;
}

#ftCon {
  display: none;
}

#bottom_container {
  display: none;
}

#lg {
  background-repeat: no-repeat;
  background-position: center;
  height: 70px;
  padding-top: 150px;
}

#lg img {
  display: none !important;
}

#lg a {
  display: none;
}

#head_wrapper {
  padding-bottom: 0;
}

#s_form_wrapper {
  margin-top: auto;
}

#s_lg_img {
  display: none !important;
}

.s_ipt_wr {
  border: none;
  border-radius: 3px;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  background-position: 100% !important;
  width: 600px;
  height: 39px;
  font-family: -apple-system, "Helvetica Neue", Helvetica, "Nimbus Sans L",
      Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB",
      "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei",
      "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei,
      "WenQuanYi Zen Hei Sharp", sans-serif;
  padding-top: 4px;
}

.s_ipt {
  font-family: -apple-system, "Helvetica Neue", Helvetica, "Nimbus Sans L",
      Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB",
      "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei",
      "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei,
      "WenQuanYi Zen Hei Sharp", sans-serif;
}

.s_ipt_wr:hover {
  border: none;
  border-radius: 2px;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.ipthover {
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.iptfocus {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.s_btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 0;
  border: none;
  box-shadow: none;
  margin-left: 0;
  z-index: 100;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  margin-top: 0;
  opacity: 0;
}

.s_btn:hover {
  opacity: 0.5;
  background: rgba(0, 0, 0, 0);
  border: none;
  box-shadow: none;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.s_btn_wr {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 0;
  background-color: rgba(0, 0, 0, 0);
  background-position: 50%;
  border: none;
  box-shadow: none;
  margin-left: 5px;
  z-index: 100;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  margin-top: 6px;
}

.s_btn_wr:hover {
  opacity: 0.5;
  background: rgba(0, 0, 0, 0);
  border: none;
  box-shadow: none;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.self-btn {
  display: none;
}

.btnhover {
  opacity: 0.5;
  background-color: rgba(0, 0, 0, 0) !important;
  border: none !important;
  box-shadow: none;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.hint_toprq_tips {
  margin-bottom: 12px;
}

.s_form {
  height: 75px;
  padding-top: 10px;
}

#s_tab {
  padding: 87px 0 0 121px;
}

.bdsug {
  transition: 0.3s;
  display: block !important;
  opacity: 0;
  transform: translatey(-5px);
  top: 42px !important;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border: none;
  border-radius: 0 0 2px 2px;
  font-family: -apple-system, "Helvetica Neue", Helvetica, "Nimbus Sans L",
      Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB",
      "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei",
      "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei,
      "WenQuanYi Zen Hei Sharp", sans-serif;
  width: 598px !important;
  height: 0 !important;
  overflow: hidden;
}

.bdsug[style="height: auto; display: block;"] {
  transition: 0.3s;
  opacity: 1;
  transform: translatey(0);
  height: auto !important;
}

.bgsug li {
  font-family: Helvetica, "Microsoft Yahei UI" !important;
  width: 100% !important;
  line-height: 36px !important;
}

.bgsug ul li {
  line-height: 32px !important;
}

.bdsug-overflow {
  font-family: Helvetica, "Microsoft Yahei UI" !important;
  width: 583px !important;
}

#quickdelete {
  top: 5px !important;
  opacity: 0.5;
}

#kw_tip {
  font-family: Helvetica, "Microsoft Yahei UI Light";
}

#result_logo,
a.logo {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMTAxIDMzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDEgMzM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojNDg3OUJEO30KCS5zdDF7ZmlsbDojREQ0NDM2O30KCS5zdDJ7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTUwLjQsMTUuM2MtMy44LDAuMy00LDIuNi01LjcsNC43Yy0xLjgsMi4yLTUuNSw0LjEtNiw2LjdjLTAuNiwzLjMsMS4zLDUuMSwzLDUuN2MxLjksMC42LDYuMi0wLjUsOC40LTAuNWgwLjIKCWgwLjJjMi4yLDAsNi40LDEuMSw4LjQsMC41YzEuOC0wLjYsMy41LTMuMiwzLTUuN2MtMC40LTIuMS00LjQtNC41LTYuMi02LjdDNTQuMiwxOCw1NC4zLDE1LjYsNTAuNCwxNS4zeiBNMzcsMTQuOAoJYzAsMi40LDEuNiw0LjMsMy40LDQuM2MxLjksMCwzLjQtMS45LDMuNC00LjNjMC0yLjQtMS42LTQuMy0zLjQtNC4zUzM3LDEyLjUsMzcsMTQuOHogTTQzLjksOC42YzAsMi41LDEuNSw0LjUsMy4zLDQuNQoJYzEuOCwwLDMuMy0yLjEsMy4zLTQuNVM0OSw0LjEsNDcuMSw0LjFDNDUuMyw0LDQzLjksNiw0My45LDguNnogTTUyLjIsOC41YzAsMi4zLDEuNCw0LjMsMy4yLDQuM3MzLjItMS45LDMuMi00LjNzLTEuNC00LjMtMy4yLTQuMwoJUzUyLjIsNi4yLDUyLjIsOC41eiBNNTcuNSwxNS45YzAsMi4zLDEuNSw0LjMsMy4zLDQuM2MxLjgsMCwzLjMtMS45LDMuMy00LjNzLTEuNS00LjMtMy4zLTQuM0M1OC45LDExLjYsNTcuNSwxMy42LDU3LjUsMTUuOXoiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTQsMzAuNHYtNS4xaDYuNGMxLjYsMCwxLjYsMC4zLDEuNiwydjEuNGMwLDEuNi0yLjMsMS44LTMuOSwxLjhMNCwzMC40TDQsMzAuNHogTTQsMjN2LTQuOGg0LjEKCWMxLjYsMCwzLjksMCwzLjksMi4xdjAuMWMwLDEuNC0wLjUsMi42LTEuOCwyLjZDMTAuMywyMyw0LDIzLDQsMjN6IE0xLjcsMTZ2MTYuM2g2LjRjMywwLDYuMiwwLDYuMi0zLjZ2LTEuMWMwLTEuNi0wLjEtMi43LTEuMS0zLjUKCWMxLTAuOCwxLjEtMi4zLDEuMS0zLjZsMCwwYzAtNC41LTMuMi00LjUtNi4yLTQuNUwxLjcsMTZMMS43LDE2eiIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjUsMjguOWMtMS4xLDEuMS0zLjMsMS4zLTMuNSwxLjNjLTEuMywwLTIuNy0wLjUtMi43LTIuMWMwLTEuNCwwLjUtMi4zLDIuMS0yLjNjMS4zLDAsMi44LDAuMSw0LjEsMC42VjI4Ljl6CgkgTTIxLjQsMzIuM2MwLjQsMCwyLjMtMC4xLDMuNy0wLjlsMC4yLDAuN2gyLjF2LTguOWMwLTMuNi0yLjMtNS01LjctNWMtMS44LDAtNC4zLDAuNy00LjcsMC45bDAuNCwyLjNjMS42LTAuNiwzLTAuNiw0LjItMC42CgljMS44LDAsMy4zLDAuNiwzLjMsMi42VjI0Yy0xLTAuNC0yLjQtMC42LTQuMS0wLjZjLTMsMC00LjUsMS42LTQuNSw0LjdDMTYuNCwzMS44LDE5LjYsMzIuMywyMS40LDMyLjN6Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zMC4yLDE2LjFjMCwwLjYsMC42LDEuMiwxLjMsMS4yYzAuOCwwLDEuMy0wLjYsMS4zLTEuMmMwLTAuNy0wLjYtMS4zLTEuMy0xLjNDMzAuOCwxNC44LDMwLjIsMTUuMywzMC4yLDE2LjF6CgkgTTMwLjMsMzIuMWgyLjRWMTguNWgtMi40VjMyLjF6Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik03MS4yLDIyLjFoOC40YzAuNCwwLjEsMC42LDAuMywwLjYsMC43djIuNmgtOS43di0yLjZDNzAuNiwyMi40LDcwLjgsMjIuMiw3MS4yLDIyLjF6IE03MS4yLDMwLjUKCWMtMC40LDAtMC42LTAuMy0wLjctMC44di0yLjZoOS43djIuNmMwLDAuNC0wLjIsMC43LTAuNiwwLjdINzEuMnogTTczLjYsMThjLTAuMSwwLjQtMC4xLDAuOS0wLjQsMS43Yy0wLjEsMC4zLTAuMSwwLjUtMC4xLDAuNwoJaC0yLjZjLTEuMywwLjEtMS45LDAuOC0yLDJ2Ny45YzAuMSwxLjEsMC44LDEuOCwyLDEuOWgxMGMxLjItMC4xLDEuOC0wLjcsMS45LTEuOHYtNy45Yy0wLjEtMS4zLTAuNy0xLjktMS45LTIuMWgtNQoJYzAuMS0wLjMsMC4xLTAuOCwwLjMtMS40YzAuMS0wLjQsMC4xLTAuNywwLjEtMC45aDcuMnYtMS44SDY3LjRWMThMNzMuNiwxOEw3My42LDE4eiIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNOTMuNywyMi43Yy0wLjQtMC4xLTAuNS0wLjItMC41LTAuNXYtMC42aDMuMnYwLjZjLTAuMSwwLjMtMC4yLDAuNC0wLjUsMC41SDkzLjd6IE05Ni42LDI0LjEKCWMxLjEtMC4xLDEuNi0wLjUsMS42LTEuNHYtMWgyLjN2LTEuNWgtMi4zdi0xLjFoLTEuOHYxLjFoLTMuMnYtMS4xaC0xLjh2MS4xaC0yLjN2MS41aDIuM3YxYzAuMSwwLjksMC42LDEuNCwxLjYsMS40SDk2LjZ6CgkgTTk0LjgsMzAuNGMxLjYsMC44LDMuNCwxLjMsNS40LDEuOGwwLjktMS43Yy0xLjQtMC4yLTIuOS0wLjYtNC40LTEuMWMxLjEtMC44LDItMS42LDIuNy0yLjVjMC4zLTAuNCwwLjQtMC45LDAuMi0xLjMKCWMtMC4zLTAuNi0wLjgtMC45LTEuNC0wLjloLTl2MS41aDcuN2MwLjIsMCwwLjQsMC4xLDAuNCwwLjFzMCwwLjEtMC4xLDAuM2MtMC42LDAuNi0xLjQsMS4zLTIuMywxLjhjLTEuMi0wLjctMi4xLTEuMy0yLjQtMS44aC0yLjIKCWMwLjksMSwxLjgsMS45LDIuOSwyLjdjLTEuNiwwLjYtMy4zLDEuMS00LjksMS4zbDAuOSwxLjZDOTEuMywzMS44LDkzLjIsMzEuMSw5NC44LDMwLjR6IE04OC4zLDI1LjJ2LTZjMC4xLTAuNiwwLjMtMC45LDAuOC0wLjkKCWgxMS44di0xLjZIOTVjLTAuMS0wLjEtMi4yLTAuMS0yLjIsMGgtNC43Yy0xLjEsMC4xLTEuNywwLjktMS44LDIuMlYyNWMwLjEsMi4xLTAuNCw0LjQtMS4xLDYuN2wxLjksMC42CglDODcuOSwyOS45LDg4LjMsMjcuNiw4OC4zLDI1LjJ6Ii8+CjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik00Ni4zLDI0LjJjMC42LDAsMS4yLDAuMSwxLjcsMC40djMuNGMwLDAuMy0wLjYsMS0xLjksMWMtMS41LDAtMS44LTAuNi0xLjgtMi4xdi0wLjYKCUM0NC4yLDI0LjgsNDQuNywyNC4yLDQ2LjMsMjQuMnogTTQ5LjIsMjAuN0g0OHYyLjVDNDcuNiwyMy4xLDQ3LDIzLDQ2LjMsMjNjLTIuNywwLTMuMywxLTMuMywzLjV2MC4zYzAsMi40LDAuOSwzLjMsMy4yLDMuMwoJYzAuOCwwLDEuMy0wLjEsMS44LTAuNWwwLjEsMC42aDEuMUw0OS4yLDIwLjdMNDkuMiwyMC43eiIvPgo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNTYuNywyM2gtMS4ydjUuMmMtMC42LDAuNC0xLjcsMC42LTIuNCwwLjZjLTAuOCwwLTEtMC40LTEtMS4zdi00LjZoLTEuMXY0LjhjMCwxLjYsMC41LDIuMywyLjEsMi4zCgljMSwwLDIuMS0wLjMsMi42LTAuNmwwLjEsMC42aDEuMVYyM3oiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTkyLjcsMTUuN2MwLTAuNywwLjYtMS4zLDEuMi0xLjNjMC42LDAsMS4yLDAuNiwxLjIsMS4zUzk0LjUsMTcsOTMuOSwxN0M5My4zLDE2LjksOTIuNywxNi4zLDkyLjcsMTUuN3oiLz4KPC9zdmc+Cg==);
  background-repeat: no-repeat;
  background-position: center;
  width: 101px;
  height: 33px;
  margin-top: 9px;
}

#result_logo img {
  display: none;
  visibility: hidden;
}

#result_logo a img {
  display: none;
  visibility: hidden;
}

.c-container {
  line-height: 1.65;
}

#rs {
  background-color: rgba(0, 0, 0, 0) !important;
}

.c-border {
  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 2px;
  border: none;
  padding: 20px;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.c-border:hover {
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16), 0 3px 10px rgba(0, 0, 0, 0.23);
  transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.c-tabs-nav {
  border: none;
  border-radius: 2px 2px 0 0;
  transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.c-tabs-nav-movetop {
  margin-left: -20px;
  margin-right: -20px;
  margin-top: -20px;
  transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.c-tabs-nav-selected {
  border-top: none !important;
  border-left: none !important;
  border-right: none !important;
  transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.c-tabs-nav-sep {
  display: none !important;
}

#page a {
  height: 34px;
  border-radius: 2px;
  border: none !important;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

#page a:hover {
  transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

#page a .pc:hover {
  transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

#page strong {
  height: 34px;
  border-radius: 2px;
  position: relative;
  top: -2px;
  transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

#page strong .pc {
  line-height: 34px;
  transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.fk {
  display: none !important;
}

.pc {
  border: none !important;
  height: 35px;
  transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.pc:hover {
  transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

#s_tab a {
  width: 59px;
  line-height: 44px;
}

#s_tab b {
  width: 59px;
  line-height: 44px;
}

#s_tab {
  padding-bottom: 8px;
  padding-top: 89px;
}

.c-icon-tieba {
  background-repeat: no-repeat;
  background-position: center;
}

.toindex {
  display: none;
}

#u .pf {
  background-repeat: no-repeat;
  background-position: center;
  font-size: 0;
  padding: 14px;
  opacity: 0.8;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  padding-top: 18px;
  padding-bottom: 10px;
}

#u .pf:hover {
  opacity: 1;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.pf .c-icon {
  display: none !important;
}

.c-icon-triangle-down {
  display: none;
}

.bdpfmenu {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 2px !important;
  border: none;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  margin-left: -10px;
  margin-top: 30px;
  z-index: 8888 !important;
}

.bdpfmenu a:hover {
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.bdnuarrow {
  display: none !important;
}

.setpref {
  border-radius: 2px 2px 0 0;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.setpref:hover {
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

#u .lb {
  padding: 23px;
  border-radius: 50px;
  font-size: 0;
  position: relative;
  top: -3px;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: rgba(0, 0, 0, 0.156863) 0 3px 10px,
      rgba(0, 0, 0, 0.227451) 0 3px 10px;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

#u .lb:hover {
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

#u .lb:active {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23);
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.tang-foreground {
  border-radius: 2px;
  box-shadow: 0 19px 60px rgba(0, 0, 0, 0.3), 0 15px 20px rgba(0, 0, 0, 0.22);
}

#s_upfunc_menus {
  display: none;
}

#bg {
  background-color: #fff !important;
  border: none;
  border-radius: 3px;
  background: #fff;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  background-position: 100% !important;
  z-index: -1;
  width: 600px;
  height: 39px;
  font-family: -apple-system, "Helvetica Neue", Helvetica, "Nimbus Sans L",
      Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB",
      "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei",
      "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei,
      "WenQuanYi Zen Hei Sharp", sans-serif;
  padding-top: 5px !important;
}

.s_ipt {
  border: 0 !important;
  height: 20px !important;
  border-radius: 2px;
  width: 586px !important;
}

.nobg_s_fm_hover {
  border: 0 !important;
}

.nobg_s_fm_focus {
  border: 0 !important;
  border-top: 0 solid #fff !important;
  border-bottom: 0 solid #fff !important;
  border-left: 0 solid #fff !important;
  border-right: 1px solid #38f;
}

.s-title-image {
  border: none !important;
  border-top: 0 solid #fff !important;
  border-bottom: 0 solid #fff !important;
  border-left: 0 solid #fff !important;
  border-right: 0 solid #fff !important;
}

#s_lg_img {
  display: none;
}

#form {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-name: fadeInUp;
  -webkit-animation-name: fadeInUp;
  animation-delay: 0.3s;
  -webkit-animation-delay: 0.3s;
}

.s-p-top {
  transform: scale(0.8);
  bottom: 9px !important;
}

.mnav {
  display: none;
}

#u_sp .mnav {
  display: none;
}

#u1 a.lb {
  right: 150px;
  top: 5%;
  padding: 23px;
  border-radius: 50%;
  font-size: 0;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDYgNDYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ2IDQ2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMywyM2MyLjksMCw1LjItMi4zLDUuMi01LjJzLTIuMy01LjItNS4yLTUuMnMtNS4yLDIuMy01LjIsNS4yUzIwLjEsMjMsMjMsMjN6IE0yMywyNS42CgljLTMuNSwwLTEwLjQsMS43LTEwLjQsNS4ydjIuNmgyMC43di0yLjZDMzMuNCwyNy4zLDI2LjUsMjUuNiwyMywyNS42eiIvPgo8L3N2Zz4K);
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: rgba(0, 0, 0, 0.156863) 0 3px 10px,
      rgba(0, 0, 0, 0.227451) 0 3px 10px;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  line-height: 0;
  z-index: 100;
}

#u1 a.lb:hover {
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

#u1 a.lb:active {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23);
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

#u1 a.pf {
  background-repeat: no-repeat;
  background-position: center;
  font-size: 0;
  padding: 14px;
  opacity: 0.8;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  z-index: 0;
}

#u1 a.bri {
  background-color: rgba(0, 0, 0, 0);
  background-repeat: no-repeat;
  background-position: center;
  font-size: 0;
  padding: 2px;
  opacity: 0.8;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  border: none;
  margin-top: 12px;
}

#wrapper .bdbriimgtitle {
  padding-top: 23px;
}

#wrapper .bdbri.bdbriimg .bdmainlink a {
  border: none;
}

#wrapper .bdbri {
  z-index: 2;
}

#u_sp .s_bri {
  padding: 5px;
  border-radius: 50%;
  font-size: 0;
  width: 32px;
  height: 32px;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4yLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRkZGO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTAsMTNoM3YtM2gtM1YxM3ogTTE0LjUsMjJoM3YtM2gtM0MxNC41LDE5LDE0LjUsMjIsMTQuNSwyMnogTTEwLDIyaDN2LTNoLTNWMjJ6IE0xMCwxNy41aDN2LTNoLTNWMTcuNXoNCgkgTTE0LjUsMTcuNWgzdi0zaC0zQzE0LjUsMTQuNSwxNC41LDE3LjUsMTQuNSwxNy41eiBNMTksMTB2M2gzdi0zSDE5eiBNMTQuNSwxM2gzdi0zaC0zQzE0LjUsMTAsMTQuNSwxMywxNC41LDEzeiBNMTksMTcuNWgzdi0zaC0zDQoJVjE3LjV6IE0xOSwyMmgzdi0zaC0zVjIyeiIvPg0KPC9zdmc+DQo=);
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: rgba(0, 0, 0, 0.156863) 0 3px 10px,
      rgba(0, 0, 0, 0.227451) 0 3px 10px;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -moz-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  -o-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  line-height: 0;
  z-index: 100;
  margin-right: 22px;
  margin-top: 1px;
}

#u_sp .s_bdbriimgtitle {
  padding-top: 73px;
}

#s_usersetting_top {
  background-repeat: no-repeat;
  background-position: center;
  font-size: 0;
  padding: 14px;
  opacity: 0.8;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  margin-top: 12px;
  margin-right: 4px;
  z-index: -100;
}

#s_top_wrap {
  z-index: -10;
}

#u .toindex {
  display: none !important;
}

#s_username_top {
  text-decoration: none;
  margin-top: 26px;
  margin-left: 5px;
  border: none;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 16px;
  margin-right: -3px;
}

.user-name {
  text-decoration: none !important;
}

.menu-arrow {
  display: none !important;
}

.s_user_name_menu {
  text-align: center !important;
}

.s-user-set-menu.menu-top {
  width: 100px;
}

.s-user-set-menu div {
  border: none !important;
  box-shadow: rgba(0, 0, 0, 0.156863) 0 3px 10px,
      rgba(0, 0, 0, 0.227451) 0 3px 10px;
}

.s-user-set-menu {
  padding-top: 0;
  margin-top: 36px;
  border-radius: 2px !important;
}

.s-user-set-menu a {
  padding-left: 25px;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.s-user-set-menu a:hover {
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

#user {
  text-decoration: none !important;
  margin-top: 30px;
  margin-left: 5px;
  border: none;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 16px;
  margin-right: -3px;
  height: 23px;
  padding-top: 8px;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-name: bounceInRight;
  -webkit-animation-name: bounceInRight;
}

.usermenu {
  transition: 0.3s;
  opacity: 0;
  border: none !important;
  box-shadow: rgba(0, 0, 0, 0.156863) 0 3px 10px,
      rgba(0, 0, 0, 0.227451) 0 3px 10px !important;
  -webkit-box-shadow: rgba(0, 0, 0, 0.156863) 0 3px 10px,
      rgba(0, 0, 0, 0.227451) 0 3px 10px !important;
  width: 83px;
  border-radius: 2px !important;
  top: 40px !important;
}

.usermenu[style="top: 22px; left: 91px; display: block;"] {
  opacity: 1;
}

.username a {
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  border-radius: 2px;
}

#u .usermenu a:active,
#u .usermenu a:hover,
.bdpfmenu a:active,
.bdpfmenu a:hover {
  background-color: #4879bd !important;
  text-decoration: none;
  color: #fff;
}

.username a:hover {
  background: #4879bd !important;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.username a:active {
  background: #4879bd !important;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

#user .c-icon {
  display: none;
}

#imsg {
  background-repeat: no-repeat;
  background-position: center;
  font-size: 0;
  padding: 14px;
  opacity: 0.8;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  z-index: 0;
  padding-top: 25px;
  padding-bottom: 21px;
}

#imsg:hover {
  opacity: 1;
}

#bds-message-wrapper {
  top: 64px;
}

.s-mod-msg {
  box-shadow: rgba(0, 0, 0, 0.156863) 0 3px 10px,
      rgba(0, 0, 0, 0.227451) 0 3px 10px !important;
  -webkit-box-shadow: rgba(0, 0, 0, 0.156863) 0 3px 10px,
      rgba(0, 0, 0, 0.227451) 0 3px 10px !important;
  border-radius: 3px;
}

.msg-btn {
  border-radius: 2px;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.msg-btn:hover {
  border-radius: 2px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.12);
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.msg-btn:active {
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.156863) 0 3px 10px,
      rgba(0, 0, 0, 0.227451) 0 3px 10px !important;
  -webkit-box-shadow: rgba(0, 0, 0, 0.156863) 0 3px 10px,
      rgba(0, 0, 0, 0.227451) 0 3px 10px !important;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.no-use:hover {
  box-shadow: none !important;
}

.top-logo img {
  display: none;
}

.top-logo {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMTAxIDMzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDEgMzM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojNDg3OUJEO30KCS5zdDF7ZmlsbDojREQ0NDM2O30KCS5zdDJ7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTUwLjQsMTUuM2MtMy44LDAuMy00LDIuNi01LjcsNC43Yy0xLjgsMi4yLTUuNSw0LjEtNiw2LjdjLTAuNiwzLjMsMS4zLDUuMSwzLDUuN2MxLjksMC42LDYuMi0wLjUsOC40LTAuNWgwLjIKCWgwLjJjMi4yLDAsNi40LDEuMSw4LjQsMC41YzEuOC0wLjYsMy41LTMuMiwzLTUuN2MtMC40LTIuMS00LjQtNC41LTYuMi02LjdDNTQuMiwxOCw1NC4zLDE1LjYsNTAuNCwxNS4zeiBNMzcsMTQuOAoJYzAsMi40LDEuNiw0LjMsMy40LDQuM2MxLjksMCwzLjQtMS45LDMuNC00LjNjMC0yLjQtMS42LTQuMy0zLjQtNC4zUzM3LDEyLjUsMzcsMTQuOHogTTQzLjksOC42YzAsMi41LDEuNSw0LjUsMy4zLDQuNQoJYzEuOCwwLDMuMy0yLjEsMy4zLTQuNVM0OSw0LjEsNDcuMSw0LjFDNDUuMyw0LDQzLjksNiw0My45LDguNnogTTUyLjIsOC41YzAsMi4zLDEuNCw0LjMsMy4yLDQuM3MzLjItMS45LDMuMi00LjNzLTEuNC00LjMtMy4yLTQuMwoJUzUyLjIsNi4yLDUyLjIsOC41eiBNNTcuNSwxNS45YzAsMi4zLDEuNSw0LjMsMy4zLDQuM2MxLjgsMCwzLjMtMS45LDMuMy00LjNzLTEuNS00LjMtMy4zLTQuM0M1OC45LDExLjYsNTcuNSwxMy42LDU3LjUsMTUuOXoiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTQsMzAuNHYtNS4xaDYuNGMxLjYsMCwxLjYsMC4zLDEuNiwydjEuNGMwLDEuNi0yLjMsMS44LTMuOSwxLjhMNCwzMC40TDQsMzAuNHogTTQsMjN2LTQuOGg0LjEKCWMxLjYsMCwzLjksMCwzLjksMi4xdjAuMWMwLDEuNC0wLjUsMi42LTEuOCwyLjZDMTAuMywyMyw0LDIzLDQsMjN6IE0xLjcsMTZ2MTYuM2g2LjRjMywwLDYuMiwwLDYuMi0zLjZ2LTEuMWMwLTEuNi0wLjEtMi43LTEuMS0zLjUKCWMxLTAuOCwxLjEtMi4zLDEuMS0zLjZsMCwwYzAtNC41LTMuMi00LjUtNi4yLTQuNUwxLjcsMTZMMS43LDE2eiIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjUsMjguOWMtMS4xLDEuMS0zLjMsMS4zLTMuNSwxLjNjLTEuMywwLTIuNy0wLjUtMi43LTIuMWMwLTEuNCwwLjUtMi4zLDIuMS0yLjNjMS4zLDAsMi44LDAuMSw0LjEsMC42VjI4Ljl6CgkgTTIxLjQsMzIuM2MwLjQsMCwyLjMtMC4xLDMuNy0wLjlsMC4yLDAuN2gyLjF2LTguOWMwLTMuNi0yLjMtNS01LjctNWMtMS44LDAtNC4zLDAuNy00LjcsMC45bDAuNCwyLjNjMS42LTAuNiwzLTAuNiw0LjItMC42CgljMS44LDAsMy4zLDAuNiwzLjMsMi42VjI0Yy0xLTAuNC0yLjQtMC42LTQuMS0wLjZjLTMsMC00LjUsMS42LTQuNSw0LjdDMTYuNCwzMS44LDE5LjYsMzIuMywyMS40LDMyLjN6Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zMC4yLDE2LjFjMCwwLjYsMC42LDEuMiwxLjMsMS4yYzAuOCwwLDEuMy0wLjYsMS4zLTEuMmMwLTAuNy0wLjYtMS4zLTEuMy0xLjNDMzAuOCwxNC44LDMwLjIsMTUuMywzMC4yLDE2LjF6CgkgTTMwLjMsMzIuMWgyLjRWMTguNWgtMi40VjMyLjF6Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik03MS4yLDIyLjFoOC40YzAuNCwwLjEsMC42LDAuMywwLjYsMC43djIuNmgtOS43di0yLjZDNzAuNiwyMi40LDcwLjgsMjIuMiw3MS4yLDIyLjF6IE03MS4yLDMwLjUKCWMtMC40LDAtMC42LTAuMy0wLjctMC44di0yLjZoOS43djIuNmMwLDAuNC0wLjIsMC43LTAuNiwwLjdINzEuMnogTTczLjYsMThjLTAuMSwwLjQtMC4xLDAuOS0wLjQsMS43Yy0wLjEsMC4zLTAuMSwwLjUtMC4xLDAuNwoJaC0yLjZjLTEuMywwLjEtMS45LDAuOC0yLDJ2Ny45YzAuMSwxLjEsMC44LDEuOCwyLDEuOWgxMGMxLjItMC4xLDEuOC0wLjcsMS45LTEuOHYtNy45Yy0wLjEtMS4zLTAuNy0xLjktMS45LTIuMWgtNQoJYzAuMS0wLjMsMC4xLTAuOCwwLjMtMS40YzAuMS0wLjQsMC4xLTAuNywwLjEtMC45aDcuMnYtMS44SDY3LjRWMThMNzMuNiwxOEw3My42LDE4eiIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNOTMuNywyMi43Yy0wLjQtMC4xLTAuNS0wLjItMC41LTAuNXYtMC42aDMuMnYwLjZjLTAuMSwwLjMtMC4yLDAuNC0wLjUsMC41SDkzLjd6IE05Ni42LDI0LjEKCWMxLjEtMC4xLDEuNi0wLjUsMS42LTEuNHYtMWgyLjN2LTEuNWgtMi4zdi0xLjFoLTEuOHYxLjFoLTMuMnYtMS4xaC0xLjh2MS4xaC0yLjN2MS41aDIuM3YxYzAuMSwwLjksMC42LDEuNCwxLjYsMS40SDk2LjZ6CgkgTTk0LjgsMzAuNGMxLjYsMC44LDMuNCwxLjMsNS40LDEuOGwwLjktMS43Yy0xLjQtMC4yLTIuOS0wLjYtNC40LTEuMWMxLjEtMC44LDItMS42LDIuNy0yLjVjMC4zLTAuNCwwLjQtMC45LDAuMi0xLjMKCWMtMC4zLTAuNi0wLjgtMC45LTEuNC0wLjloLTl2MS41aDcuN2MwLjIsMCwwLjQsMC4xLDAuNCwwLjFzMCwwLjEtMC4xLDAuM2MtMC42LDAuNi0xLjQsMS4zLTIuMywxLjhjLTEuMi0wLjctMi4xLTEuMy0yLjQtMS44aC0yLjIKCWMwLjksMSwxLjgsMS45LDIuOSwyLjdjLTEuNiwwLjYtMy4zLDEuMS00LjksMS4zbDAuOSwxLjZDOTEuMywzMS44LDkzLjIsMzEuMSw5NC44LDMwLjR6IE04OC4zLDI1LjJ2LTZjMC4xLTAuNiwwLjMtMC45LDAuOC0wLjkKCWgxMS44di0xLjZIOTVjLTAuMS0wLjEtMi4yLTAuMS0yLjIsMGgtNC43Yy0xLjEsMC4xLTEuNywwLjktMS44LDIuMlYyNWMwLjEsMi4xLTAuNCw0LjQtMS4xLDYuN2wxLjksMC42CglDODcuOSwyOS45LDg4LjMsMjcuNiw4OC4zLDI1LjJ6Ii8+CjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik00Ni4zLDI0LjJjMC42LDAsMS4yLDAuMSwxLjcsMC40djMuNGMwLDAuMy0wLjYsMS0xLjksMWMtMS41LDAtMS44LTAuNi0xLjgtMi4xdi0wLjYKCUM0NC4yLDI0LjgsNDQuNywyNC4yLDQ2LjMsMjQuMnogTTQ5LjIsMjAuN0g0OHYyLjVDNDcuNiwyMy4xLDQ3LDIzLDQ2LjMsMjNjLTIuNywwLTMuMywxLTMuMywzLjV2MC4zYzAsMi40LDAuOSwzLjMsMy4yLDMuMwoJYzAuOCwwLDEuMy0wLjEsMS44LTAuNWwwLjEsMC42aDEuMUw0OS4yLDIwLjdMNDkuMiwyMC43eiIvPgo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNTYuNywyM2gtMS4ydjUuMmMtMC42LDAuNC0xLjcsMC42LTIuNCwwLjZjLTAuOCwwLTEtMC40LTEtMS4zdi00LjZoLTEuMXY0LjhjMCwxLjYsMC41LDIuMywyLjEsMi4zCgljMSwwLDIuMS0wLjMsMi42LTAuNmwwLjEsMC42aDEuMVYyM3oiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTkyLjcsMTUuN2MwLTAuNywwLjYtMS4zLDEuMi0xLjNjMC42LDAsMS4yLDAuNiwxLjIsMS4zUzk0LjUsMTcsOTMuOSwxN0M5My4zLDE2LjksOTIuNywxNi4zLDkyLjcsMTUuN3oiLz4KPC9zdmc+Cg==);
  background-repeat: no-repeat;
  background-position: center;
  height: 100px;
  width: 200px;
}

#u_sp .s_bri {
  border: 0 !important;
}

.pass-text-input {
  background-image: none !important;
}

.pass-text-input-focus {
  background-image: none !important;
}

#passport-login-pop {
  font-family: -apple-system, "Helvetica Neue", Helvetica, "Nimbus Sans L",
      Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB",
      "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei",
      "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei,
      "WenQuanYi Zen Hei Sharp", sans-serif;
  border-radius: 2px;
}

#TANGRAM__PSP_2__titleText {
  font-family: Helvetica, "Microsoft Yahei UI Light";
}

.pass-fgtpwd {
  font-family: Helvetica, "Microsoft Yahei UI" !important;
}

.pass-sms-btn {
  font-family: Helvetica, "Microsoft Yahei UI" !important;
}

.pass-reglink {
  font-family: Helvetica, "Microsoft Yahei UI" !important;
}

.tang-foreground {
  border-radius: 2px !important;
  border: 0 !important;
}

.tang-title {
  border-radius: 2px 2px 0 0 !important;
}

.tang-pass-pop-login div.tang-title {
  border-radius: 2px 2px 0 0 !important;
}

.pass-checkbox-input {
  width: 17px;
  height: 17px;
  border: #e0e0e0 3px solid !important;
  background-color: #fff !important;
  box-shadow: none;
}

.tang-pass-pop-login-color-blue .pass-button:focus {
  box-shadow: rgba(0, 0, 0, 0.156863) 0 3px 10px,
      rgba(0, 0, 0, 0.227451) 0 3px 10px !important;
  -webkit-box-shadow: rgba(0, 0, 0, 0.156863) 0 3px 10px,
      rgba(0, 0, 0, 0.227451) 0 3px 10px !important;
}

.c-recommend,
body > div[class="result-op xpath-log"] {
  display: none !important;
}

.rrecom-btn-parent {
  display: none !important;
}

.s-p-top {
  bottom: -8px !important;
}

input[type="text"]:focus {
  border: none !important;
  border-top: 0 solid #fff !important;
  border-bottom: 0 solid #fff !important;
  border-left: 0 solid #fff !important;
  border-right: 0 solid #fff !important;
}

p#TANGRAM__PSP_10__userNameWrapper input[type="text"]:focus {
  border: none !important;
  border-top: 0 solid #fff !important;
  border-bottom: #4879bd 2px solid !important;
  border-left: 0 solid #fff !important;
  border-right: 0 solid #fff !important;
}

a[soft_id] {
  display: none;
}

.op-soft-btnbox .c-gap-left-small {
  margin-left: 0 !important;
  color: #fff;
  background-color: #4879bd;
  padding: 7px 15px;
  border-radius: 2px;
  font-size: 14px;
  transition: all 0.3s ease;
}

.op-soft-btnbox .c-gap-left-small:hover {
  background-color: #7098d0;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.soutu-input-image {
  top: 6px;
  left: 5px;
}

.op-soft-btnbox a:before {
  content: "没有流氓的";
}

#kw {
  background-color: transparent;
}

.s-skin-hasbg #kw {
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
}

.s-skin-hasbg .btn_wr,
.s_form_nologin .s_btn {
  width: 35px;
}

#s_usersetting_top {
  margin-top: -7px;
}

#s_username_top {
  margin-top: 7px;
}

#u_sp {
  padding-top: 16px;
}

.ipt_rec {
  background: 0 0;
  background-image: none;
}

.ipt_rec:hover {
  background: 0 0;
  background-image: none;
}

.ipt_rec:after {
  display: none;
  margin-top: 50px;
}

.bdpfmenu,
.usermenu {
  border: none;
  box-shadow: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  -o-box-shadow: none;
}

.qrcodeCon {
  visibility: hidden;
}

#head .headBlock {
  margin: 12px 0 6px 121px;
}

#s_lg_img_new {
  display: none !important;
}

@media screen and (min-width: 1921px) {
  .head_wrapper {
    left: 52px;
    width: 100vw;
  }
}

.con a,
a {
  color: #4879bd;
}

h3 a:hover {
  border-bottom: #4879bd 1.2px solid;
}

.c-showurl {
  color: #4caf50;
}

.op-se-listen-recommend:hover {
  border-bottom: #4879bd 1.2px solid;
}

.c-gap-bottom-small a:hover {
  border-bottom: #4879bd 1.2px solid;
}

#rs a:hover {
  border-bottom: #4879bd 1.2px solid;
}

.hint_toprq_tips_items a:hover {
  border-bottom: #4879bd 1.2px solid;
}

.c:hover {
  border-bottom: #4879bd 1.2px solid;
}

em {
  color: #ea4335;
}

body {
  background-color: #f7f7f7;
}

#head_wrapper .s_ipt_wr,
.s_ipt_wr.bg {
  background-color: #fff;
  background: #fff;
  border: none;
}

.s_ipt_wr:hover {
  background-color: #fff !important;
  background: #fff;
}

.ipthover {
  background-color: #fff !important;
}

.iptfocus {
  background-color: #fff !important;
}

.s_btn {
  background-color: rgba(0, 0, 0, 0);
}

.c-border {
  background-color: #fff0;
}

.c-tabs-nav {
  background-color: #eee;
}

.c-tabs-nav-selected {
  border-bottom: #f44336 2px solid !important;
  background-color: #2196f3 !important;
  color: #fff !important;
}

#page a {
  background: #fff;
  color: #424242;
}

#page a:hover {
  background-color: #e0e0e0 !important;
}

#page a .pc:hover {
  background-color: #e0e0e0;
}

#page strong {
  background-color: #4285f4 !important;
  color: #fff;
}

#page strong .pc {
  background-color: #4285f4 !important;
}

.pc:hover {
  background-color: #e0e0e0;
}

#s_tab b {
  border-bottom: 3px #4879bd solid;
  color: #4879bd;
}

#s_tab {
  border-bottom: #e0e0e0 1px solid;
}

.bdpfmenu a:hover {
  background-color: #4879bd !important;
}

.setpref:hover {
  background-color: #4879bd !important;
}

#u .lb {
  background-color: #4879bd;
}

#u .lb:hover {
  background-color: #618cc7;
}

#u .lb:active {
  background-color: #7da0d0;
}

#bg {
  background-color: #fff !important;
  background: #fff;
}

#u1 a.lb {
  background-color: #4879bd;
}

#u1 a.lb:hover {
  background-color: #618cc7;
}

#u1 a.lb:active {
  background-color: #7da0d0;
}

#u_sp .s_bri {
  background-color: #398bfb;
}

#s_username_top {
  background-color: #ffffff85;
}

.s-user-set-menu a:hover {
  background-color: #4879bd !important;
}

#user {
  background-color: #e0e0e0;
}

.msg-setting-btn {
  background-color: #4879bd !important;
}

.no-use {
  background-color: #e5e5e5 !important;
}

.pass-text-input {
  border-bottom: #e0e0e0 2px solid !important;
  border-left: #fff 0 solid !important;
  border-right: #fff 0 solid !important;
  border-top: #fff 0 solid !important;
}

.pass-text-input-focus {
  border-bottom: #4879bd 2px solid !important;
  border-left: #fff 0 solid !important;
  border-right: #fff 0 solid !important;
  border-top: #fff 0 solid !important;
}

.tang-pass-pop-login-color-blue .pass-button {
  background-color: #4879bd;
}

.tang-pass-pop-login-color-blue .pass-button:hover {
  background-color: #618cc7;
}

#lg {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4yLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjU5IDExNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjU5IDExNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6IzQyODVGNDt9DQoJLnN0MXtmaWxsOiNFQTQzMzU7fQ0KCS5zdDJ7ZmlsbDojRkZGRkZGO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTI4LjIsNzdjLTUuNCwwLjQtNS42LDMuNy04LjEsNi43Yy0yLjUsMy4xLTcuNyw1LjgtOC40LDkuNWMtMC44LDQuNywxLjgsNy4yLDQuMyw4YzIuNywwLjksOC44LTAuNywxMS45LTAuNw0KCWgwLjNoMC4zYzMuMSwwLDkuMSwxLjYsMTEuOSwwLjdjMi41LTAuOSw0LjktNC41LDQuMy04Yy0wLjUtMy02LjItNi40LTguNy05LjVDMTMzLjYsODAuNywxMzMuNyw3Ny40LDEyOC4yLDc3eiBNMTA5LjMsNzYuMw0KCWMwLDMuNCwyLjIsNi4xLDQuOCw2LjFjMi43LDAsNC44LTIuNyw0LjgtNi4xcy0yLjItNi4xLTQuOC02LjFTMTA5LjMsNzMsMTA5LjMsNzYuM3ogTTExOSw2Ny41YzAsMy41LDIuMSw2LjQsNC42LDYuNA0KCWMyLjYsMCw0LjctMi45LDQuNy02LjRzLTIuMS02LjQtNC43LTYuNEMxMjEsNjEsMTE5LDYzLjksMTE5LDY3LjV6IE0xMzAuNyw2Ny40YzAsMy4zLDIsNiw0LjUsNnM0LjUtMi43LDQuNS02YzAtMy4zLTItNi00LjUtNg0KCVMxMzAuNyw2NC4xLDEzMC43LDY3LjR6IE0xMzguMiw3Ny44YzAsMy4zLDIuMSw2LDQuNiw2YzIuNiwwLDQuNy0yLjcsNC43LTZjMC0zLjMtMi4xLTYtNC43LTZDMTQwLjIsNzEuOCwxMzguMiw3NC41LDEzOC4yLDc3Ljh6Ig0KCS8+DQo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjIuOCw5OC4yVjkxaDljMi4yLDAsMi4zLDAuNCwyLjMsMi44djJjMCwyLjMtMy4yLDIuNS01LjUsMi41aC01LjhWOTguMnogTTYyLjgsODcuOFY4MWg1LjgNCgljMi4zLDAsNS41LDAsNS41LDN2MC4xYzAsMi0wLjcsMy43LTIuNSwzLjdDNzEuNiw4Ny44LDYyLjgsODcuOCw2Mi44LDg3Ljh6IE01OS41LDc3Ljl2MjNoOS4xYzQuMywwLDguNywwLDguNy01LjF2LTEuNQ0KCWMwLTIuMy0wLjItMy44LTEuNS00LjljMS40LTEuMSwxLjUtMy4yLDEuNS01LjFsMCwwYzAtNi4zLTQuNS02LjMtOC43LTYuM0w1OS41LDc3LjlMNTkuNSw3Ny45eiIvPg0KPHBhdGggY2xhc3M9InN0MSIgZD0iTTkyLjQsOTYuMWMtMS41LDEuNi00LjYsMS44LTQuOSwxLjhjLTEuOSwwLTMuOC0wLjctMy44LTIuOWMwLTIsMC43LTMuMywyLjktMy4zYzEuOCwwLDQsMC4yLDUuOCwwLjhWOTYuMXoNCgkgTTg3LjMsMTAwLjljMC41LDAsMy4zLTAuMiw1LjItMS4zbDAuMywxaDIuOVY4OGMwLTUuMS0zLjItNy4xLTgtNy4xYy0yLjUsMC02LjEsMS02LjYsMS4ybDAuNiwzLjJjMi4yLTAuOCw0LjItMC45LDUuOS0wLjkNCgljMi42LDAsNC42LDAuOSw0LjYsMy43djEuMWMtMS40LTAuNS0zLjQtMC45LTUuOC0wLjljLTQuMiwwLTYuMywyLjMtNi4zLDYuNkM4MC4zLDEwMC4zLDg0LjcsMTAwLjksODcuMywxMDAuOXoiLz4NCjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik05OS43LDc4LjFjMCwwLjksMC45LDEuNywxLjgsMS43YzEuMSwwLDEuOS0wLjgsMS45LTEuN2MwLTEtMC44LTEuOC0xLjktMS44QzEwMC42LDc2LjMsOTkuNyw3Nyw5OS43LDc4LjF6DQoJIE05OS45LDEwMC42aDMuNFY4MS41aC0zLjRWMTAwLjZ6Ii8+DQo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTU3LjYsODYuNmgxMS44YzAuNSwwLjEsMC44LDAuNCwwLjksMXYzLjZoLTEzLjd2LTMuNkMxNTYuNyw4NywxNTcsODYuNywxNTcuNiw4Ni42eiBNMTU3LjYsOTguNA0KCWMtMC42LDAtMC45LTAuNC0xLTEuMXYtMy42aDEzLjd2My43YzAsMC42LTAuMywxLTAuOSwxSDE1Ny42eiBNMTYwLjksODAuN2MtMC4xLDAuNS0wLjIsMS4zLTAuNSwyLjRjLTAuMSwwLjQtMC4xLDAuNy0wLjIsMWgtMy43DQoJYy0xLjgsMC4xLTIuNywxLjEtMi44LDIuOFY5OGMwLjEsMS42LDEuMSwyLjUsMi44LDIuN2gxNC4xYzEuNy0wLjEsMi42LTEsMi43LTIuNVY4N2MtMC4xLTEuOC0xLTIuNy0yLjctMi45aC03DQoJYzAuMS0wLjQsMC4yLTEuMSwwLjQtMmMwLjEtMC42LDAuMS0xLDAuMi0xLjNoMTAuMnYtMi42aC0yMi4ydjIuNkwxNjAuOSw4MC43TDE2MC45LDgwLjd6Ii8+DQo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTg5LjQsODcuNGMtMC41LTAuMS0wLjctMC4zLTAuNy0wLjd2LTAuOWg0LjV2MC45Yy0wLjEsMC40LTAuMywwLjYtMC43LDAuN0gxODkuNHogTTE5My40LDg5LjQNCgljMS41LTAuMSwyLjItMC43LDIuMy0yVjg2aDMuMnYtMi4xaC0zLjJ2LTEuNmgtMi41djEuNmgtNC41di0xLjZoLTIuNnYxLjZoLTMuMlY4NmgzLjJ2MS40YzAuMSwxLjMsMC44LDIsMi4yLDJIMTkzLjR6IE0xOTAuOSw5OC4zDQoJYzIuMywxLjEsNC44LDEuOSw3LjYsMi42bDEuMi0yLjRjLTItMC4zLTQuMS0wLjgtNi4yLTEuNmMxLjUtMS4xLDIuOC0yLjIsMy44LTMuNWMwLjQtMC42LDAuNS0xLjIsMC4zLTEuOWMtMC40LTAuOC0xLjEtMS4yLTItMS4yDQoJaC0xMi43djIuMWgxMC44YzAuMywwLDAuNSwwLjEsMC42LDAuMnMwLDAuMi0wLjIsMC40Yy0wLjksMC45LTIsMS44LTMuMywyLjZjLTEuNy0xLTIuOS0xLjktMy40LTIuNmgtMy4xYzEuMiwxLjQsMi42LDIuNyw0LjEsMy44DQoJYy0yLjMsMC45LTQuNiwxLjUtNi45LDEuOGwxLjMsMi4yQzE4NS45LDEwMC4yLDE4OC42LDk5LjMsMTkwLjksOTguM3ogTTE4MS43LDkwLjl2LTguNWMwLjEtMC44LDAuNC0xLjIsMS4xLTEuM2gxNi43di0yLjNoLTguMw0KCWMtMC4xLTAuMi0zLjEtMC4xLTMuMSwwaC02LjdjLTEuNSwwLjItMi40LDEuMy0yLjUsMy4xdjguN2MwLjEsMy0wLjUsNi4yLTEuNiw5LjRsMi43LDAuOEMxODEuMSw5Ny42LDE4MS43LDk0LjMsMTgxLjcsOTAuOXoiLz4NCjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjIuNSw4OS41YzAuOCwwLDEuNywwLjIsMi40LDAuNXY0LjhjMCwwLjQtMC45LDEuNC0yLjcsMS40Yy0yLjEsMC0yLjYtMC45LTIuNi0yLjl2LTAuOA0KCUMxMTkuNSw5MC40LDEyMC4yLDg5LjUsMTIyLjUsODkuNXogTTEyNi42LDg0LjZoLTEuN3YzLjVjLTAuNi0wLjItMS41LTAuMy0yLjQtMC4zYy0zLjgsMC00LjYsMS40LTQuNiw0Ljl2MC40DQoJYzAsMy40LDEuMyw0LjYsNC41LDQuNmMxLjEsMCwxLjktMC4yLDIuNi0wLjdsMC4yLDAuOGgxLjVMMTI2LjYsODQuNkwxMjYuNiw4NC42eiIvPg0KPHBhdGggY2xhc3M9InN0MiIgZD0iTTEzNy4xLDg3LjhoLTEuN3Y3LjRjLTAuOSwwLjUtMi40LDAuOC0zLjQsMC44Yy0xLjEsMC0xLjQtMC42LTEuNC0xLjl2LTYuNUgxMjl2Ni44YzAsMi4zLDAuNywzLjIsMi45LDMuMg0KCWMxLjQsMCwyLjktMC40LDMuNi0wLjhsMC4xLDAuOGgxLjVWODcuOHoiLz4NCjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xODcuOSw3Ny41YzAtMSwwLjgtMS44LDEuNy0xLjhzMS43LDAuOCwxLjcsMS44cy0wLjgsMS44LTEuNywxLjhDMTg4LjcsNzkuMiwxODcuOSw3OC40LDE4Ny45LDc3LjV6Ii8+DQo8L3N2Zz4NCg==);
}

.s_btn {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzQ3NzlCRDt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNC44LDIxLjVjLTAuNCwwLTAuNywwLTEuMS0wLjFjLTIuMS0wLjMtMy45LTEuNC01LjItM2MtMS4zLTEuNy0xLjgtMy43LTEuNi01LjhjMC4zLTIuMSwxLjQtMy45LDMtNS4yCgljMS43LTEuMywzLjgtMS44LDUuOC0xLjZjMi4xLDAuMywzLjksMS40LDUuMiwzYzEuMywxLjcsMS44LDMuOCwxLjYsNS44Yy0wLjMsMi4xLTEuNCwzLjktMyw1LjJDMTguMiwyMSwxNi41LDIxLjUsMTQuOCwyMS41egoJIE0xNC44LDguMWMtMS4yLDAtMi40LDAuNC0zLjMsMS4xYy0yLjQsMS44LTIuOSw1LjMtMSw3LjdjMS44LDIuNCw1LjMsMi45LDcuNywxYzEuMi0wLjksMS45LTIuMiwyLjEtMy42YzAuMi0xLjUtMC4yLTIuOS0xLjEtNC4xCglTMTcsOC40LDE1LjUsOC4yQzE1LjMsOC4yLDE1LDguMSwxNC44LDguMXoiLz4KPGc+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjUuMywyNy41TDI1LjMsMjcuNWMtMC42LDAuNC0xLjQsMC4zLTEuOC0wLjJsLTUuMS02LjdjLTAuNC0wLjYtMC4zLTEuNCwwLjItMS44bDAsMAoJCQljMC42LTAuNCwxLjQtMC4zLDEuOCwwLjJsNS4xLDYuN0MyNiwyNi4zLDI1LjksMjcuMSwyNS4zLDI3LjV6Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==) !important;
}

.s_btn_wr {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzQ3NzlCRDt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNC44LDIxLjVjLTAuNCwwLTAuNywwLTEuMS0wLjFjLTIuMS0wLjMtMy45LTEuNC01LjItM2MtMS4zLTEuNy0xLjgtMy43LTEuNi01LjhjMC4zLTIuMSwxLjQtMy45LDMtNS4yCgljMS43LTEuMywzLjgtMS44LDUuOC0xLjZjMi4xLDAuMywzLjksMS40LDUuMiwzYzEuMywxLjcsMS44LDMuOCwxLjYsNS44Yy0wLjMsMi4xLTEuNCwzLjktMyw1LjJDMTguMiwyMSwxNi41LDIxLjUsMTQuOCwyMS41egoJIE0xNC44LDguMWMtMS4yLDAtMi40LDAuNC0zLjMsMS4xYy0yLjQsMS44LTIuOSw1LjMtMSw3LjdjMS44LDIuNCw1LjMsMi45LDcuNywxYzEuMi0wLjksMS45LTIuMiwyLjEtMy42YzAuMi0xLjUtMC4yLTIuOS0xLjEtNC4xCglTMTcsOC40LDE1LjUsOC4yQzE1LjMsOC4yLDE1LDguMSwxNC44LDguMXoiLz4KPGc+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjUuMywyNy41TDI1LjMsMjcuNWMtMC42LDAuNC0xLjQsMC4zLTEuOC0wLjJsLTUuMS02LjdjLTAuNC0wLjYtMC4zLTEuNCwwLjItMS44bDAsMAoJCQljMC42LTAuNCwxLjQtMC4zLDEuOCwwLjJsNS4xLDYuN0MyNiwyNi4zLDI1LjksMjcuMSwyNS4zLDI3LjV6Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==) !important;
}

.c-icon-tieba {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzM3QUJFMzt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMC45LDIzLjNIMy4xYy0xLjEsMC0yLTAuOS0yLTJWMi44YzAtMS4xLDAuOS0yLDItMmgxNy44YzEuMSwwLDIsMC45LDIsMnYxOC41QzIyLjksMjIuNCwyMiwyMy4zLDIwLjksMjMuM3oiCgkvPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01LjIsMTkuOUw0LDE5LjJjMS41LTEuOSwyLjMtMy45LDIuNC01LjhjMC0xLDAuMS0zLjEsMC4xLTYuM0g4YzAsMi4yLDAsNC4zLTAuMSw2LjRjMCwwLjYtMC4xLDEuMi0wLjMsMS44CgkJaDEuMWMwLjUsMC44LDEuMiwyLjQsMi4yLDQuNkg5Yy0wLjYtMS41LTEuMi0yLjgtMS42LTMuOUM3LDE3LjIsNi4zLDE4LjYsNS4yLDE5Ljl6IE00LjEsMTQuOFY2LjFjMC0xLjIsMC41LTEuOCwxLjYtMS44aDMKCQljMSwwLDEuNiwwLjcsMS42LDEuOHY4LjZIOC45VjYuM2MwLTAuNC0wLjMtMC42LTAuNi0wLjZoLTJjLTAuNCwwLTAuNiwwLjItMC42LDAuNnY4LjVINC4xeiBNMTIuOSwxOS41Yy0xLjEsMC0xLjctMC42LTEuOC0xLjZWMTMKCQljMC0xLjEsMC43LTEuNywxLjgtMS44aDFWNC4xaDEuN3YyLjVIMjBWOGgtNC4zdjMuMmgxLjhjMS4xLDAsMS43LDAuNywxLjgsMS44djQuOGMwLDEuMS0wLjYsMS42LTEuOCwxLjdIMTIuOXogTTEyLjgsMTMuM3Y0LjMKCQljMCwwLjQsMC4zLDAuNywwLjcsMC43aDMuMmMwLjUsMCwwLjctMC4zLDAuOC0wLjd2LTQuNGMwLTAuNC0wLjMtMC43LTAuNy0wLjdoLTMuM0MxMy4xLDEyLjYsMTIuOSwxMi44LDEyLjgsMTMuM3oiLz4KPC9nPgo8L3N2Zz4K);
}

#u .pf {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzZENkQ2RDt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNS4yLDE3LjJjMC0wLjQsMC4xLTAuOCwwLjEtMS4yYzAtMC40LDAtMC44LTAuMS0xLjJsMi42LTJjMC4yLTAuMiwwLjMtMC41LDAuMS0wLjhsLTIuNS00LjMKCWMtMC4xLTAuMy0wLjUtMC40LTAuOC0wLjNsLTMuMSwxLjJjLTAuNi0wLjUtMS4zLTAuOS0yLjEtMS4ybC0wLjUtMy4zYzAtMC4zLTAuMy0wLjUtMC42LTAuNWgtNWMtMC4zLDAtMC42LDAuMi0wLjYsMC41bC0wLjUsMy4zCgljLTAuOCwwLjMtMS40LDAuNy0yLjEsMS4yTDcuMyw3LjRDNyw3LjMsNi43LDcuNCw2LjUsNy43TDQsMTEuOWMtMC4yLDAuMy0wLjEsMC42LDAuMSwwLjhsMi42LDJjMCwwLjQtMC4xLDAuOC0wLjEsMS4yCgljMCwwLjQsMCwwLjgsMC4xLDEuMmwtMi42LDJjLTAuMiwwLjItMC4zLDAuNS0wLjEsMC44bDIuNSw0LjNjMC4xLDAuMywwLjUsMC40LDAuOCwwLjNsMy4xLTEuMmMwLjYsMC41LDEuMywwLjksMi4xLDEuMmwwLjUsMy4zCgljMCwwLjMsMC4zLDAuNSwwLjYsMC41aDVjMC4zLDAsMC42LTAuMiwwLjYtMC41bDAuNS0zLjNjMC44LTAuMywxLjQtMC43LDIuMS0xLjJsMy4xLDEuMmMwLjMsMC4xLDAuNiwwLDAuOC0wLjNsMi41LTQuMwoJYzAuMS0wLjMsMC4xLTAuNi0wLjEtMC44TDI1LjIsMTcuMnogTTE2LDIwLjNjLTIuNCwwLTQuMy0xLjktNC4zLTQuM3MxLjktNC4zLDQuMy00LjNzNC4zLDEuOSw0LjMsNC4zUzE4LjQsMjAuMywxNiwyMC4zeiIvPgo8L3N2Zz4K);
}

#u .lb {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDYgNDYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ2IDQ2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMywyM2MyLjksMCw1LjItMi4zLDUuMi01LjJzLTIuMy01LjItNS4yLTUuMnMtNS4yLDIuMy01LjIsNS4yUzIwLjEsMjMsMjMsMjN6IE0yMywyNS42CgljLTMuNSwwLTEwLjQsMS43LTEwLjQsNS4ydjIuNmgyMC43di0yLjZDMzMuNCwyNy4zLDI2LjUsMjUuNiwyMywyNS42eiIvPgo8L3N2Zz4K);
}

#u1 a.pf {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzZENkQ2RDt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNS4yLDE3LjJjMC0wLjQsMC4xLTAuOCwwLjEtMS4yYzAtMC40LDAtMC44LTAuMS0xLjJsMi42LTJjMC4yLTAuMiwwLjMtMC41LDAuMS0wLjhsLTIuNS00LjMKCWMtMC4xLTAuMy0wLjUtMC40LTAuOC0wLjNsLTMuMSwxLjJjLTAuNi0wLjUtMS4zLTAuOS0yLjEtMS4ybC0wLjUtMy4zYzAtMC4zLTAuMy0wLjUtMC42LTAuNWgtNWMtMC4zLDAtMC42LDAuMi0wLjYsMC41bC0wLjUsMy4zCgljLTAuOCwwLjMtMS40LDAuNy0yLjEsMS4yTDcuMyw3LjRDNyw3LjMsNi43LDcuNCw2LjUsNy43TDQsMTEuOWMtMC4yLDAuMy0wLjEsMC42LDAuMSwwLjhsMi42LDJjMCwwLjQtMC4xLDAuOC0wLjEsMS4yCgljMCwwLjQsMCwwLjgsMC4xLDEuMmwtMi42LDJjLTAuMiwwLjItMC4zLDAuNS0wLjEsMC44bDIuNSw0LjNjMC4xLDAuMywwLjUsMC40LDAuOCwwLjNsMy4xLTEuMmMwLjYsMC41LDEuMywwLjksMi4xLDEuMmwwLjUsMy4zCgljMCwwLjMsMC4zLDAuNSwwLjYsMC41aDVjMC4zLDAsMC42LTAuMiwwLjYtMC41bDAuNS0zLjNjMC44LTAuMywxLjQtMC43LDIuMS0xLjJsMy4xLDEuMmMwLjMsMC4xLDAuNiwwLDAuOC0wLjNsMi41LTQuMwoJYzAuMS0wLjMsMC4xLTAuNi0wLjEtMC44TDI1LjIsMTcuMnogTTE2LDIwLjNjLTIuNCwwLTQuMy0xLjktNC4zLTQuM3MxLjktNC4zLDQuMy00LjNzNC4zLDEuOSw0LjMsNC4zUzE4LjQsMjAuMywxNiwyMC4zeiIvPgo8L3N2Zz4K);
}

#u1 a.bri {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzZENkQ2RDt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zLjcsOS44aDYuMlYzLjdIMy43VjkuOHogTTEyLjksMjguM2g2LjJ2LTYuMmgtNi4yVjI4LjN6IE0zLjcsMjguM2g2LjJ2LTYuMkgzLjdWMjguM3ogTTMuNywxOS4xaDYuMnYtNi4yCglIMy43VjE5LjF6IE0xMi45LDE5LjFoNi4ydi02LjJoLTYuMlYxOS4xeiBNMjIuMiwzLjd2Ni4yaDYuMlYzLjdIMjIuMnogTTEyLjksOS44aDYuMlYzLjdoLTYuMlY5Ljh6IE0yMi4yLDE5LjFoNi4ydi02LjJoLTYuMlYxOS4xCgl6IE0yMi4yLDI4LjNoNi4ydi02LjJoLTYuMlYyOC4zeiIvPgo8L3N2Zz4K);
}

#s_usersetting_top {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzZENkQ2RDt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNS4yLDE3LjJjMC0wLjQsMC4xLTAuOCwwLjEtMS4yYzAtMC40LDAtMC44LTAuMS0xLjJsMi42LTJjMC4yLTAuMiwwLjMtMC41LDAuMS0wLjhsLTIuNS00LjMKCWMtMC4xLTAuMy0wLjUtMC40LTAuOC0wLjNsLTMuMSwxLjJjLTAuNi0wLjUtMS4zLTAuOS0yLjEtMS4ybC0wLjUtMy4zYzAtMC4zLTAuMy0wLjUtMC42LTAuNWgtNWMtMC4zLDAtMC42LDAuMi0wLjYsMC41bC0wLjUsMy4zCgljLTAuOCwwLjMtMS40LDAuNy0yLjEsMS4yTDcuMyw3LjRDNyw3LjMsNi43LDcuNCw2LjUsNy43TDQsMTEuOWMtMC4yLDAuMy0wLjEsMC42LDAuMSwwLjhsMi42LDJjMCwwLjQtMC4xLDAuOC0wLjEsMS4yCgljMCwwLjQsMCwwLjgsMC4xLDEuMmwtMi42LDJjLTAuMiwwLjItMC4zLDAuNS0wLjEsMC44bDIuNSw0LjNjMC4xLDAuMywwLjUsMC40LDAuOCwwLjNsMy4xLTEuMmMwLjYsMC41LDEuMywwLjksMi4xLDEuMmwwLjUsMy4zCgljMCwwLjMsMC4zLDAuNSwwLjYsMC41aDVjMC4zLDAsMC42LTAuMiwwLjYtMC41bDAuNS0zLjNjMC44LTAuMywxLjQtMC43LDIuMS0xLjJsMy4xLDEuMmMwLjMsMC4xLDAuNiwwLDAuOC0wLjNsMi41LTQuMwoJYzAuMS0wLjMsMC4xLTAuNi0wLjEtMC44TDI1LjIsMTcuMnogTTE2LDIwLjNjLTIuNCwwLTQuMy0xLjktNC4zLTQuM3MxLjktNC4zLDQuMy00LjNzNC4zLDEuOSw0LjMsNC4zUzE4LjQsMjAuMywxNiwyMC4zeiIvPgo8L3N2Zz4K);
}

#imsg {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4yLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojNkQ2RDZEO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjUuMyw0LjZoLTE5QzUsNC42LDMuOSw1LjcsMy45LDdsMCwyMS40bDQuOC00LjhoMTYuNmMxLjMsMCwyLjQtMS4xLDIuNC0yLjRWN0MyNy43LDUuNywyNi42LDQuNiwyNS4zLDQuNnoNCgkgTTIyLjksMTguOUg4LjZ2LTIuNGgxNC4zVjE4Ljl6IE0yMi45LDE1LjNIOC42di0yLjRoMTQuM1YxNS4zeiBNMjIuOSwxMS43SDguNlY5LjRoMTQuM1YxMS43eiIvPg0KPC9zdmc+DQo=);
}

div[style*="visibility:visible"] {
  display: none !important;
  visibility: hidden !important;
  opacity: 0;
  height: 0;
  overflow: hidden;
}

#contnet_left > div[id="10"] ~ div[id="1"],
#contnet_left > div[id="100"] ~ div[id="1"],
#contnet_left > div[id="20"] ~ div[id="1"],
#contnet_left > div[id="40"] ~ div[id="1"],
#contnet_left > div[id="60"] ~ div[id="1"],
#contnet_left > div[id="80"] ~ div[id="1"],
body > div[style*="position: absolute;"] {
  display: none !important;
}

#content_left > div[style*="display:block !important"] {
  position: absolute !important;
  top: -5000px !important;
}

h3 a:visited {
  opacity: 0.4 !important;
  color: #bbb !important;
}

.c-border {
  width: 559px;
  box-shadow: none !important;
  margin-top: 17px;
  margin-bottom: 23px;
  border: #eee 1px solid;
  background: #ffffff61;
}

#help {
  padding-left: 107px !important;
}

.c-tools a {
  border: 0 !important;
}

.f13 a:hover {
  border: none !important;
}

.f13 .m:hover {
  border-bottom: solid 1px #666 !important;
}

.g .m:hover {
  border-bottom: solid 1px #666 !important;
}

.c-span6 a:hover {
  border-bottom: none;
}

.op_vd_mininewest_link:hover {
  opacity: 0.8;
}

.op-tieba-offical-lookmore a:hover {
  border-bottom: #4879bd 1px solid;
}

op-tieba-general-lookmore a:hover {
  border-bottom: #4879bd 1px solid;
}

.c-tip-menu ul li a {
  color: #4879bd !important;
}

h3 a:hover {
  border: none !important;
  opacity: 0.7;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

h3 a {
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.sitelink_summary a:hover {
  border-bottom: #4879bd 1px solid;
}

.c-gray:hover {
  border-bottom: #666 1px solid;
}

.op_kefutable_committel:hover {
  border-bottom: #666 1px solid;
}

.op-soft-btnbox a:hover {
  border: none !important;
}

.op-soft-as-pc-downbtn {
  margin-left: 0 !important;
  color: #fff;
  background-color: #4879bd;
  padding: 3px 15px;
  border-radius: 2px;
  font-size: 14px;
  transition: all 0.3s ease;
  border: none;
  margin-top: -3px;
}

.op-soft-as-pc-downbtn:hover {
  background-color: #7098d0;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  background-image: none;
}

.c-btn-primary {
  margin-left: 0 !important;
  color: #fff;
  background-color: #4879bd;
  padding: 3px 15px;
  border-radius: 2px;
  font-size: 14px;
  transition: all 0.3s ease;
  border: none;
  margin-top: -3px;
}

.c-btn-primary:hover {
  background-color: #7098d0;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  background-image: none;
}

.op-soft-title a:hover {
  border: none !important;
  opacity: 0.7;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.op-soft-title a {
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.nums {
  width: 598px;
}

.search_tool_conter {
  width: 598px;
}

.op_offical_weibo_other a:hover {
  text-decoration: none !important;
}

.op_offical_weibo_info a:hover {
  text-decoration: none !important;
}

.op_offical_weibo_content a:hover {
  text-decoration: none !important;
}

.c-btn {
  border: none !important;
}

.op-zx-new-mvideo-info:hover {
  border-bottom: none;
}

.op-zx-new-mvideo-rlt a:hover {
  border-bottom: #4879bd 1px solid;
}

.op-zx-new-mvideo-oneline a:hover {
  border-bottom: #4879bd 1px solid;
}

.hint_common_restop {
  color: #ea4335;
  font-size: medium;
  font-weight: 700;
}

.op-tieba-general-main-col p:hover {
  border: none !important;
}

.c-text {
  transition: 0.3s;
  background: #fff0;
  color: #4879bd;
  border: #4879bd 1px solid;
  padding-top: 3px;
  border-radius: 2px;
}

.c-text:hover {
  background: #4879bd;
  color: #fff !important;
  border: #4879bd 1px solid !important;
  padding-top: 3px;
}

.tab-nav-name[data-a-7701177d] {
  background: #00000008;
  border: none;
}

.tabs-li > li.tabs-li-active[data-a-7701177d] {
  background-color: #fff;
  border-color: #2c99ff #fff0 #fff0 #fff0;
  box-shadow: 0 2px 5px #0000001f;
}

.tabs-split[data-a-7701177d] {
  border-width: 0;
}

.video-link[data-a-7701177d] {
  border: 1px solid #4879bd4d;
  border-radius: 100px;
}

#s_side_wrapper .qrcode-feed {
  display: none !important;
}

#head_wrapper.s-down .s_btn_wr,
.s_btn_wr {
  width: 32px;
  height: 32px;
}

.s_down #s_form_wrapper > #form {
  margin-top: 0;
}

#head_wrapper.s-down .soutu-env-newindex.soutu-env-nomac #kw {
  border: none !important;
}

#head_wrapper.s-down #result_logo {
  margin-top: -10px;
}

.s-skin-container {
  display: none;
}

#s_main {
  overflow: hidden;
  border-radius: 4px;
}

.s-opacity-85 .s-opacity-white-background {
  background: #ffffffd9 !important;
}

.s-block-nav .d-nav-item .border-for-item {
  transition: 0.3s;
}

.s-skin-hasbg .s-block-nav .d-nav-item a:hover,
.s-skin-hasbg .s-block-nav .nav-item a:hover {
  background: 0 0 !important;
  background: #f8f8f873 !important;
}

.s-nav-wrapper .nav-item .nav-block {
  transition: 0.3s;
  border: 1px solid #fff0 !important;
  border-radius: 4px;
}

.s-nav-wrapper .nav-item .nav-block:hover {
  box-shadow: 0 1px 10px #00000026;
  transform: translatey(-2px);
}

.s-cardsetting-left
    div[style="float:left;width:78px;text-align:center;margin-top:18px;border:1px solid #cdcdcd;height:24px;line-height:24px;"] {
  margin-top: 10px !important;
}

.s-cardsetting-wrap {
  border-bottom: none;
}

.op_kefu_border {
  border-left: none;
}

.s-skin-hasbg .s-top-wrap {
  background: 0 0;
}

.s_form_nologin .s_btn.btnhover,
.s_form_nologin .s_btn:hover {
  box-shadow: none;
  color: #fff0;
  background: 0 0;
}

:host {
  display: none !important;
}
          </style>
        `;
  };

  if (["wenku.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            body {
  background: url(http://www.pptbz.com/d/file/p/201708/a1d07b6201af8f574b6539cb724bbc16.png) !important;
}

@font-face {
  font-family: "宋体";
  src: local("Microsoft YaHei");
}

.new-filter-box .vip-free-alert a,
.new-filter-box .vip-special a {
  color: #4879bd;
}

a {
  text-decoration: none !important;
}

#hd {
  background: #fff0;
}

div#hd .top-search-box {
  transition: 0.5s;
  margin: 5% auto;
}

div#screen-hd {
  box-shadow: 0 10px 10px #0000000d;
}

.ui-nav .inner .cate {
  box-shadow: 0 3px 5px #00000029;
}

div#screen-bd {
  transition: 0.5s;
  background: #fff;
  opacity: 0;
}

div#screen-bd:hover {
  opacity: 1;
}

.logined-wrap .logined-doc-num,
.logined-wrap .logined-user-info,
.screen-hd-wrap .banner .banner-con .topic ul li,
.screen-hd-wrap .banner .banner-con .topic ul li:hover,
.ui-nav .inner .cate {
  border: 1px solid #fff0;
}

.search-form-header .search-form-header-content {
  background-color: #f9f9f9;
}

.search-form-box {
  border-bottom: none;
}

.fix-searchbar-wrap .fsb-search-form .s_ipt_wr,
.top-search-box .s_ipt_wr,
.top-search-box .s_ipt_wr-with535,
span.search-ipt-box.ib {
  transition: 0.3s;
  background: #fff;
  border: none !important;
  padding: 1px 5px;
  border-radius: 5px 0 0 5px;
  box-shadow: 0 2px 5px #0000001f;
}

.top-search-box .s_ipt_wr-with535:hover,
.top-search-box .s_ipt_wr:hover,
span.search-ipt-box.ib:hover {
  box-shadow: 0 2px 5px #0000003b;
}

input#sb {
  color: #fff;
  transition: 0.3s;
  border-radius: 0 5px 5px 0;
  font-size: 10px;
  background: #5892e3;
  border: none;
  box-shadow: 0 2px 5px #0000001f;
}

input#sb:hover {
  background: #4879bd;
  box-shadow: 0 2px 5px #0000003b;
}

a.sp-xs-tips.log-xsend {
  transition: 0.3s;
  font-size: 14px !important;
  border: 1px solid #0000000f !important;
  color: #5892e3 !important;
  background: #fff !important;
  border-radius: 5px;
  width: 102px;
  height: 32px;
  line-height: 32px;
}

a.sp-xs-tips.log-xsend:hover {
  border: 1px solid #fff0 !important;
  box-shadow: 0 2px 5px #0000001f !important;
}

.search-form-header .search-nav {
  margin-top: 56px;
}

.search-nav {
  background: #f8f8f899;
  box-shadow: 0 0 20px #00000038 !important;
}

.new-filter-box {
  border: none;
}

.new-filter-box,
.search-result dl {
  width: 600px;
  padding: 20px 20px 15px;
  margin-top: 0;
  margin-bottom: 20px;
  border-radius: 0;
  background-color: #fff;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.search-result dl:hover {
  box-shadow: 0 0 2px gray !important;
  background: #f3f3f3 !important;
}

.reader-back2top-wrap .go-crawer,
.reader-back2top-wrap
    .reader-backToTop
    .reader-tools-bar-wrap
    .reader-tools-bar
    .reader-feedback,
.reader-back2top-wrap .reader-convert,
.reader-back2top-wrap .reader-download-app,
.reader-back2top-wrap .reader-feedback {
  border: 1px solid #fff0 !important;
  background-color: #fff;
  margin-bottom: 0 !important;
  font-size: 10px !important;
}

.reader-back2top-wrap .reader-backToTop {
  background: #5892e3 !important;
  border-radius: 50%;
  box-shadow: 0 5px 10px #00000042;
}

.reader-back2top-wrap .reader-backToTop:hover {
  background: #2db68a !important;
}

.reader-back2top-wrap .reader-backToTop .top {
  margin: 18px auto !important;
  background-position: -41px 0 !important;
  height: 10px !important;
  width: 33px !important;
}

.reader-back2top-wrap a {
  transition: 0.3s;
}

.reader-back2top-wrap a:not([class="reader-backToTop"]) {
  opacity: 0;
}

.reader-back2top-wrap:hover a:not([class="reader-backToTop"]) {
  opacity: 0.8;
  transform: translateY(-20px);
}

.reader-back2top-wrap:hover a:not([class="reader-backToTop"]):hover {
  opacity: 1;
}

.wk-search-new-cntent .user-bar-new .user-my-name .text-dec-under {
  color: #333 !important;
  text-decoration: none;
}

.my-dynamic-box .doc-list .doc-row {
  transition: 0.5s;
}

.uc-main {
  border: none;
}

.fix-searchbar-wrap .bg-opacity {
  height: 46px;
  background-color: #fff;
  box-shadow: 0 5px 10px #0000000f;
}

.fixing-box {
  margin-top: 20px;
}

#doc-header-test .doc-value .wrap,
.fix-searchbar-wrap .qrHover .wrap-big {
  z-index: 999;
  background: #fff;
  border: none;
  box-shadow: 0 5px 5px #00000021;
}

.reader-tools-bar-wrap {
  background: #fff;
  box-shadow: 0 -5px 15px #0000001f;
}

.ugctest .doc-evaluate {
  display: none !important;
}

.reader-tools-bar-wrap .reader-tools-bar .download-btn .reader-download {
  margin-right: 15px;
}

.reader-tools-bar-wrap .reader-tools-bar .vip-free-auto,
.ui-bz-btn-senior {
  text-shadow: none;
  padding: 0 16px;
  border-radius: 50px;
}

.reader-tools-bar-wrap
    .reader-tools-bar
    .reader-tools-btn-wrap-new
    .reader-download
    .ui-btn-p-16 {
  line-height: normal;
}

.reader-tools-bar-wrap #tip-notice-new {
  line-height: 40px;
  height: 78%;
}

.ui-nav {
  position: relative;
  z-index: 999;
  background-color: #2aa198;
}

.ui-nav ul.main-nav a {
  background-color: #fff0;
  border: none;
}

.ui-nav ul.main-nav li.last a {
  border-right: none;
}

.ui-nav ul.main-nav li a:hover,
.ui-nav ul.main-nav li.current a {
  background-color: #248c84;
  margin-right: 0;
  border: none;
  z-index: 2;
}

.ui-nav ul.side-nav {
  background-color: #fff0;
}

.screen-hd-wrap .banner .banner-con .slide-bner {
  border-radius: 5px;
  overflow: hidden;
}

.screen-hd-wrap .banner .banner-con .slide-bner ul.play-nav li a {
  transition: 0.3s;
  background-color: #00000024;
  margin: 0 2px;
  border-radius: 5px;
  width: 30px;
}

.screen-hd-wrap .banner .banner-con .slide-bner ul.play-nav li.cur a {
  width: 40px;
  background-color: #2aa198;
}

.new-filter-box .vip-free-new .icon-box .btn-know {
  position: relative;
  top: -18px;
  left: -10px;
  color: #fff;
  background-color: #2aa198;
  padding: 10px 80px;
}

#doc-upload .btn-upload-new,
.aside .upbox .upload,
a.upload-btn {
  border-radius: 100px;
}

#doc-upload .btn-upload-new:hover,
.aside .upbox .upload:hover,
a.upload-btn:hover {
  border-radius: 20px 20px 0 0;
}

.aside .new-upload-btns,
.logined-wrap .logined-user-info .doc-info-wrap .my-wk .new-upload-btns {
  background: #fff;
  border: none;
  box-shadow: 0 1px 3px #00000021;
}

.new-filter-box .vip-free-new .cover-vip-box {
  background-color: #fff0;
  color: #555;
}

.new-filter-box .vip-free-new .icon-box {
  background-color: #fff0;
  margin: 20px;
}

.search-opt-1st-root.multiple {
  background: #fff;
}

.doc-tag-wrap.fixed {
  position: absolute;
}

.reader-container .reader-page {
  border: none;
  box-shadow: 0 1px 3px #00000021;
}

.reader-tools-bar-wrap.tools-bar-small {
  height: 50px;
  padding: 0;
}

.reader-tools-bar-wrap.tools-bar-small
    .reader-tools-bar
    .reader-tools-bar-center {
  background: #fff0;
  border: none;
}

.toolbar-core-btns-wrap .btn-download,
.toolbar-core-btns-wrap .btn-pay-vip {
  transition: 0.3s;
  border-radius: 100px;
  margin: 9px 0;
  height: 35px;
  padding: 7px 0;
  margin-left: 4px;
  line-height: 20px;
  font-size: 18px;
  min-width: 120px;
  text-align: center;
}

.toolbar-core-btns-wrap .btn-download {
  background-color: #2aa198;
}

.toolbar-core-btns-wrap .btn-pay-vip {
  background-color: #dd5a57;
  min-width: 130px;
}

.toolbar-core-btns-wrap .btn-pay-vip .text-primary::before {
  content: "VIP";
}

.page-input {
  transition: 0.3s;
  background-color: #fff0;
  border: none;
  border-bottom: 2px solid #00000026;
  text-align: right;
}

.page-input:focus {
  outline: 0;
  border-bottom: 2px solid #2aa198;
  text-align: right;
}

.doc-comment .post-comment-wrap .add-ct-tip .add-ct-wrap {
  border: none;
  box-shadow: 0 1px 3px #00000021;
}

.doc-comment a.add-new-btn {
  transition: 0.3s;
  border: none;
  border-radius: 100px;
  background: #2aa198;
  color: #fff;
}

.doc-comment a.add-new-btn:hover {
  background: #248c84;
}

#add-new .frist-item,
#banurl,
#doc-aside-border .commerce-flow,
#guess-like-doc,
#lastcell-dialog,
#nav-gaokao,
#share-tips,
#topSearchBox .s_tools,
#user-my-class,
#wkgg,
#xs-task,
.ad-icon,
.ad-taishan-bar,
.approve-entr-warp,
.banner-ad,
.doc-banner-btns .btn-download .new-user-discount-tip,
.doc-banner-btns .btn-download-disable .new-user-discount-tip,
.doc-banner-btns .btn-pay-doc .new-user-discount-tip,
.doc-banner-btns .btn-pay-rights .new-user-discount-tip,
.doc-banner-btns .btn-pay-vip .new-user-discount-tip,
.doc-banner-tip,
.ec-ad,
.end-download-bottom-layout,
.fix-searchbar-wrap .qrHover .add-has-money-pay,
.fix-searchbar-wrap .user-bar-new .inner a,
.footer-box-recommend.clearfix,
.new-filter-box .vip-free-new .arrow-img,
.new-filter-box .vip-free-new .icon-box .fire-img,
.page-banner,
.reader-convert-box .convert-tip,
.reader-wangpan-box .wangpan-tip,
.search-aside-adWrap,
.search-aside-newadWrap,
.search-form-box
    .search-wrapper-box
    .search-top-form
    .search-ipt-box
    .hot-box,
.tiger-lossUser-dialog,
.tiger-shifen-dialog,
.toolbar-core-btns-wrap .btn-pay-vip .new-user-discount-tip,
.toolbar-core-btns-wrap .btn-pay-vip .text-secondary,
.toolsbar-vip-wrap,
.top-ads-banner,
.top-ads-banner-wrap,
.topicBox.search-topicBox-wrap,
.ui-bz-hot-ic,
.ui-nav ul.side-nav b.havenew-ic,
.vip-card,
.zsj-toppos,
a#my-wkHome-vip-tips,
div[class^="ec_src"],
div[id^="html-reader-AD"],
div[id^="html-reader-banner"],
div[id^="wkad"],
span.hot-box,
span.ic-vip,
span.s-vip-text {
  display: none !important;
}

#activity-tg .num,
#adbg {
  background: 0 0 !important;
}

.bg-opacity,
.fix-searchbar-wrap {
  top: 0 !important;
}
          </style>
        `;
  };

  if (["zhidao.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            #answer-bar.exp-answerbtn-yh:after,
#deom,
#header > a,
#qb-content .related-exp,
#qb-content [class*="-more"],
#qb-content table i,
#qb-side,
#userbar-msg,
.close-question-tip,
.ec-oad,
.nav-menu-container
    .nav-show-control
    .nav-menu-layout
    .nav-menu
    .nav-menu-content
    .content-box
    .menu-right-section
    .menu-right-list
    .menu-right-list-item.activity-entry
    img,
.question-all-answers-number,
.receive-awards-bubble,
.shop-entrance,
.wgt-bottom-union,
.wgt-footer-new,
.wgt-header-title .wgt-header-title-content .exp-topwld-tip,
.wgt-push-intro.smooth,
.wgt-relate-search,
.wgt-silder-push,
.word-replace,
[class*="ad-block"],
[class*="ads"],
i.menu-new {
  display: none !important;
}

#body {
  margin-bottom: 50px;
}

a,
span {
  text-decoration: none !important;
}

.qb-section {
  width: 1000px;
  margin: auto;
}

.wgt-header-title .wgt-header-title-content {
  width: 1000px;
}

.wgt-header-title-btn {
  float: right;
  margin-top: 10px;
}

#qb-content {
  padding: 0;
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;
}

#qb-content > div {
  padding: 0;
  border: none;
  margin: 10px auto;
}

#qb-content > div:first-child {
  margin-top: 0;
}

#qb-content > div:last-child {
  margin-bottom: 0;
}

.wgt-ask {
  padding: 10px 20px !important;
}

div.wgt-best .hd {
  margin-top: 0 !important;
}

.wgt-best .hd {
  padding: 7px 10px;
}

.wgt-best .bd {
  padding: 0 20px;
}

.wgt-best .wgt-replyer-special-bg {
  border: none;
}

.wgt-answers {
  padding-bottom: 20px !important;
}

.wgt-answers .hd h2 {
  padding: 10px 20px;
}

.wgt-answers .bd-wrap {
  border: none;
}

.wgt-answers .bd {
  border-bottom: 1px dotted #e9e9e9;
  padding: 24px 20px 0;
}

.wgt-answers #show-fold-container,
.wgt-answers #show-hide-container,
.wgt-answers .show-answer-dispute {
  height: 40px;
  line-height: 40px;
  margin: 15px 400px 5px;
  border-radius: 60px;
}

.wgt-answers #show-answer-fold,
.wgt-answers #show-answer-hide,
.wgt-answers .show-hide-dispute {
  cursor: pointer;
  font-size: 16px;
}

.wgt-answers #show-answer-fold.hover,
.wgt-answers #show-answer-hide.hover,
.wgt-answers .show-hide-dispute.hover {
  border-radius: 60px;
  text-decoration: none;
}

.wgt-push,
.wgt-related,
.wgt-related .related-list,
.wgt-topic {
  padding: 0 !important;
}

.wgt-related .related-list,
.wgt-silder-push u1 {
  margin: 0;
}

.wgt-push h2,
.wgt-related h2,
.wgt-topic h2 {
  padding: 10px 20px;
}

.wgt-push .push-ul,
.wgt-push ul,
.wgt-related ul,
.wgt-topic .topic-list,
.wgt-topic ul {
  margin: 0;
  padding: 0;
}

.wgt-push ul li,
.wgt-related ul li,
.wgt-topic ul li {
  padding: 5px 20px;
}

#qb-content .push-ul,
#qb-content .related-list,
#qb-content .topic-list,
#qb-content .wgt-push,
#qb-content .wgt-related,
#qb-content .wgt-topic {
  margin-top: 0;
  padding-top: 0;
}

#qb-content .push-ul,
#qb-content .wgt-push {
  max-height: 500px;
}

.wgt-best-operator {
  padding-bottom: 10px;
}

.f-aid,
a.f-aid {
  color: #333;
}

body .pager a:hover {
  color: #fff;
  background: #2aa198;
  border: solid 1px #fff0;
}

.accuse-area .wgt-accuse {
  line-height: 1;
}

#answer-bar {
  line-height: 30px;
}

.wgt-ask .ask-info .wgt-accuse {
  top: 9px;
}

.wgt-replyer-all {
  margin-left: 20px;
}

body {
  background-color: #f1f2f3;
  background-size: cover;
}

#qb-content > div {
  background: #fff;
}

.wgt-ask:hover {
  background: #f5f5f5;
}

.wgt-best .hd {
  background: #2aa198;
}

.wgt-best .hd span {
  color: #fff;
}

.wgt-best .wgt-replyer-special-bg {
  background: rgba(218, 224, 228, 0.21);
}

div.wgt-best .answer-title {
  font-size: 20px;
  width: 100px;
}

.wgt-answers .hd h2 {
  background: #2aa198;
}

.wgt-answers .hd h2 {
  color: #fff;
}

.wgt-answers .bd:hover {
  background: #f8f8f8;
}

.wgt-answers #show-fold-container,
.wgt-answers #show-hide-container,
.wgt-answers .show-answer-dispute {
  transition: 0.3s;
  background: #2aa198;
  color: #fff;
}

.wgt-answers #show-answer-fold,
.wgt-answers #show-answer-hide,
.wgt-answers .show-hide-dispute {
  color: #fff;
}

.wgt-answers #show-answer-fold.hover,
.wgt-answers #show-answer-hide.hover,
.wgt-answers .show-hide-dispute.hover {
  transition: 0.3s;
  background: #248c84;
  color: #fff;
}

.wgt-push h2,
.wgt-related h2,
.wgt-topic h2 {
  background: #95a5a5;
}

.wgt-push h2,
.wgt-related h2,
.wgt-topic h2,
.wgt-topic h2 em {
  color: #fff;
}

.wgt-push ul li:nth-child(even),
.wgt-related ul li:nth-child(even),
.wgt-topic li:nth-child(even) {
  background: #f9fafb;
}

.wgt-push ul li:hover,
.wgt-related ul li:hover,
.wgt-topic ul li:hover {
  background: #f5f5f5;
}

.wgt-push .push-ul li:hover a,
.wgt-push ul li:hover a,
.wgt-push ul li:hover span,
.wgt-related ul li:hover span,
.wgt-topic .topic-list li:hover a,
.wgt-topic ul li:hover a {
  color: #333;
}

.wgt-push ul li span,
.wgt-related ul li span,
.wgt-topic ul li span {
  color: #333;
}

.f-aid,
a.f-aid {
  color: #333;
}

body .pager b {
  background: #2aa198;
}

#qb-content > div,
.slogan-wp .slogan-content .login-mask,
.slogan-wp .slogan-content .not-login-mask {
  box-shadow: 0 1px 10px #0000002b;
  border-radius: 0;
}

.slogan-wp .slogan-content .login-slogan .answer-question-section,
.slogan-wp
    .slogan-content
    .login-slogan
    .answer-question-section
    .answer-button,
.slogan-wp
    .slogan-content
    .login-slogan
    .answer-question-section
    .question-button {
  border-radius: 0;
}

#qb-content > div,
.userbar-renew ul.sub-list li a,
.wgt-answers .bd,
.wgt-business .business-list .business-item .link .name,
.wgt-business .business-list .business-item .link:hover .name,
.wgt-discussion .wgt-discussion-list .discussion-big,
.wgt-discussion .wgt-discussion-list .discussion-small-list .discussion-small,
.wgt-eva,
.wgt-push ul li,
.wgt-push ul li a,
.wgt-push ul li span,
.wgt-push ul li:hover a,
.wgt-push ul li:hover span,
.wgt-related ul li,
.wgt-related ul li span,
.wgt-related ul li:hover span,
.wgt-topic ul li,
.wgt-topic ul li a,
.wgt-topic ul li:hover a,
a,
body .pager a {
  transition: 0.3s;
}

.comment:hover,
.comment:hover .qb-comment-icon,
.header-level,
.main-content-menu li a.main-content-active,
.main-content-menu li a.main-content-active .uhome-icon,
.main-content-menu li a.main-content-active .uhome-icon-arrow,
.main-content-menu li a:hover,
.main-content-menu li a:hover .uhome-icon,
.main-content-menu li a:hover .uhome-icon-arrow,
.recommend-question-meta .recommend-question-answer,
.recommend-question-title .recommend-question-title-item:hover,
.slogan-wp
    .slogan-content
    .login-slogan
    .answer-question-section
    .user-button-item:hover,
.slogan-wp
    .slogan-content
    .login-slogan
    .answer-question-section
    .user-button-item:hover
    .item-title,
.slogan-wp .slogan-content .login-slogan .sign-in-section .go-sign-in,
.uhomeTagList .uhomeTagList-ul li:hover,
.wgt-activity .activity-list .activity-item:hover,
.wgt-business .business-list .business-item .link:hover .name,
.wgt-eva .evaluate .evaluate-num,
.wgt-eva .evaluate .evaluate-text,
.wgt-eva .evaluate .icon-evaluate,
.wgt-eva .evaluate .icon-evaluate-bad,
.wgt-eva .evaluate .icon-evaluated,
.wgt-eva .evaluate .icon-evaluated-bad,
.wgt-eva .evaluate-bad .evaluate-num,
.wgt-eva .evaluate-bad .evaluate-text,
.wgt-eva .evaluate-bad .icon-evaluate,
.wgt-eva .evaluate-bad .icon-evaluate-bad,
.wgt-eva .evaluate-bad .icon-evaluated,
.wgt-eva .evaluate-bad .icon-evaluated-bad,
.wgt-eva .wgt-eva-hasbad .evaluate-num,
.wgt-eva .wgt-eva-hasbad .evaluate-text,
.wgt-eva .wgt-eva-hasbad .icon-evaluate,
.wgt-eva .wgt-eva-hasbad .icon-evaluate-bad,
.wgt-eva .wgt-eva-hasbad .icon-evaluated,
.wgt-eva .wgt-eva-hasbad .icon-evaluated-bad,
.wgt-eva .wgt-eva-hasgood .evaluate-num,
.wgt-eva .wgt-eva-hasgood .evaluate-text,
.wgt-eva .wgt-eva-hasgood .icon-evaluate,
.wgt-eva .wgt-eva-hasgood .icon-evaluate-bad,
.wgt-eva .wgt-eva-hasgood .icon-evaluated,
.wgt-eva .wgt-eva-hasgood .icon-evaluated-bad,
.wgt-influence-rank
    .rank-list
    .rank-item
    .rank-user
    .text-con
    .name
    .link:hover,
.wgt-recommend .recommend-list .recommend-item .title:hover,
.wgt-set-tab li a.active {
  color: #2aa198;
}

.header-level,
.main-content-menu .wealthy-mall:hover,
.uhomeTagList .uhomeTagList-ul li.selected,
.uhomeTagList .uhomeTagList-ul li:hover,
.wgt-eva:hover,
.wgt-set-tab li a.active,
body.layout-uhome .uhome-menu li a.is-active {
  border-color: #2aa198;
}

#ihome-header .search-box,
.message-app-body .message-navigator,
.nav-menu-container .nav-show-control .nav-menu-layout .nav-menu {
  background: #2aa198;
}

.message-app-body .message-navigator .navigator-item.active,
.nav-menu-container
    .nav-show-control
    .nav-menu-layout
    .nav-menu
    .nav-menu-content
    .content-box
    .menu-item:hover
    .menu-title {
  background: #248c84;
}

.message-app-body .message-navigator .navigator-item:hover {
  background-color: #248c84;
}

#answer-bar,
.comment-area .comment-area-inner .comment-submit,
.comment-area .comment-area-inner .reply-comment-submit,
.header-meta .header-meta-attendance a,
.wgt-header-title .wgt-header-title-content .wgt-header-title-btn {
  border: none;
  transition: 0.3s;
  margin-bottom: 5px;
  background: #2aa198;
  border-radius: 0;
  color: #fff;
}

#answer-bar:hover,
.comment-area .comment-area-inner .comment-submit:hover,
.comment-area .comment-area-inner .reply-comment-submit:hover,
.header-meta .header-meta-attendance a:hover,
.wgt-header-title .wgt-header-title-content .wgt-header-title-btn:hover {
  background: #248c84;
  border-radius: 0;
  color: #fff;
  box-shadow: 0 5px 10px #00000038;
}

.mini-editor,
.uhome-search-container {
  transition: 0.3s;
  background: #fff0;
  border: none !important;
  border-bottom: 2px solid #00000024 !important;
  box-shadow: none !important;
  border-radius: 0 !important;
}

.mini-editor.focus,
.uhome-search-container.uhome-search-container-focus,
.uhome-search-container:hover {
  border-bottom: 2px solid #2aa198 !important;
}

.comment-area .comment-area-inner .mini-editor textarea {
  background: #fff0;
}

.comment-area .comment-pager .pager-item,
.comment-area .comment-pager .pager-next,
.comment-area .comment-pager .pager-now,
.comment-area .comment-pager .pager-pre {
  transition: 0.3s;
  background: #fff0;
  border: 1px solid #2aa19870;
  border-radius: 0;
  color: #2aa198;
}

.comment-area .comment-pager .pager-item:hover,
.comment-area .comment-pager .pager-now {
  border: 1px solid #fff0;
  color: #fff;
  background: #2aa198;
  border-radius: 0;
}

#ihome-header .search-box-main .search-form #kw,
.search-box-new .hdi {
  transition: 0.3s;
  background: #fff;
  border: none !important;
  padding: 7.5px 5px 6.5px 5px;
  border-radius: 5px 0 0 5px;
  box-shadow: 0 2px 5px #0000001f;
}

#ihome-header .search-box-main .search-form #kw:hover,
.search-box-new .hdi:hover {
  box-shadow: 0 2px 5px #0000003b;
}

#ihome-header .search-box-main .search-form #search-btn {
  width: 70px;
  height: 32px;
  left: 321px;
  top: 0;
}

#ihome-header .search-box-main .search-form #search-btn,
.search-box-new .btn-global {
  color: #fff;
  transition: 0.3s;
  border-radius: 0 5px 5px 0;
  font-size: 10px;
  background: #5892e3;
  border: none;
  box-shadow: 0 2px 5px #0000001f;
}

#ihome-header .search-box-main .search-form #search-btn:hover,
.search-box-new .btn-global:hover {
  background: #4879bd !important;
  box-shadow: 0 2px 5px #0000003b;
}

.search-box-new .i-ask-link {
  transition: 0.3s;
  font-size: 14px !important;
  border: 1px solid #0000000f !important;
  color: #5892e3 !important;
  background: #fff !important;
  border-radius: 5px;
  width: 102px;
  height: 32px;
  line-height: 32px;
}

.search-box-new .i-ask-link {
  border: 1px solid #fff0 !important;
  box-shadow: 0 2px 5px #0000001f !important;
}

.userbar-renew .user-name {
  padding: 7px 10px;
  border-radius: 100px;
  background: #dfdfdf54;
}

.userbar-renew .sublist-container {
  top: 15px;
}

.userbar-renew ul.sub-list {
  z-index: 998;
  border: none;
  -ms-box-shadow: 1px 1px 5px #d1d1d1;
  -o-box-shadow: 1px 1px 5px #d1d1d1;
  box-shadow: 0 2px 6px #00000029;
}

.userbar-renew ul.sub-list li a:hover {
  background: #5892e3;
}

.userbar-renew .sublist-container .sublist-arrow-up {
  display: none;
}

#ihome-header .search-box {
  height: 50px;
  position: fixed;
  z-index: 1001;
}

#ihome-header .search-box-main .search-form {
  margin-top: 10px;
}

.uhomeTagList .uhomeTagList-ul li {
  transition: 0.3s;
  border: none;
  color: #323232;
  border-radius: 0;
  background: #f7f7f7;
  box-shadow: 0 1px 3px #0000001a;
}

.uhomeTagList .uhomeTagList-ul li.selected,
.uhomeTagList .uhomeTagList-ul li:hover {
  color: #fff;
  background: #2aa198;
  box-shadow: 0 1px 5px #00000036;
}

.recommend-question-item {
  border-bottom: none;
  padding: 20px 1px 20px 20px;
}

.recommend-question-item:nth-child(2n) {
  background: #f7f7f7;
}

.recommend-question-meta .recommend-question-answer {
  right: 20px;
  top: 0;
}

.reflesh-question-container > .r-q-c-divider {
  display: none;
}

.reflesh-question-container .reflesh-question-btn {
  width: 86px;
  height: 22px;
  background-color: #fff;
  font-size: 12px;
  font-weight: 700;
  color: #2aa198;
  line-height: 22px;
  text-align: center;
  border-radius: 100px;
  border: none;
  padding: 5px;
  box-shadow: 0 1px 5px #00000036;
}

.wgt-answers .bd .wgt-answers-operator.fixed {
  margin-left: -20px;
  border: none;
}

.wgt-answers .bd .wgt-answers-operator.fixed .wgt-eva {
  margin-left: 25px;
}

.head-wrap .divider {
  border-bottom: none;
}
          </style>
        `;
  };

  if (["passport.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            .ucenter-steward {
  display: none !important;
}

.mod-center-ul li.pc-menu,
.pc-ucenter-bottom .ucenter-safe-link .ucenter-safe-link-block,
.ucenter-list .ucenter-list-li {
  transition: 0.3s;
}

a {
  text-decoration: none !important;
}
          </style>
        `;
  };

  if (["i.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            .card-enter-video-link {
  display: none !important;
}

.ibx-advice .ibx-advice-logo,
.ibx-advice:hover .ibx-advice-logo,
.ibx-manage .ibx-manage-logo,
.ibx-manage:hover .ibx-manage-logo,
.news-list-item {
  transition: 0.3s;
}

.header-tool-allmod,
.header-tool-cal,
.header-tool-config,
.header-tool-news,
.header-tool-ps,
.header-tool-user,
a {
  text-decoration: none !important;
}

header .header-stackup {
  box-shadow: 0 5px 10px #0003;
}

.card-panel,
.header-app,
.row.user-panel {
  background-color: #fff;
  border: none;
  box-shadow: 0 2px 5px #00000030;
}

.ibx-even,
.ibx-odd {
  margin-right: 0;
}

.card-panel {
  margin-right: 0;
}

#ibx-cal,
#ibx-uc {
  height: 100%;
}

.news-list-nav {
  border-color: #d2d2d24d;
}

.accoconf-link,
.ibx-ctab-link {
  background: #fff;
  border-radius: 3px;
}
          </style>
        `;
  };

  if (["music.taihe.com", "play.taihe.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            #__qianqian_pop,
#download-clients,
#toptip,
.__qianqian_qrcode,
.fixed .list-app-box[data-v-6a994542],
.music-head .search-wrap .search-info,
.panel-item.qianqian-box,
.sidebar .unic-lunbo {
  display: none !important;
}

.sub-nav-box .nav-list,
ui-slider-handle ui-state-default ui-corner-all {
  transition: 0.3s;
}

a {
  text-decoration: none !important;
}

#fixed-panel > div:not([class="panel-item js-go-top css-go-top"]) {
  transition: 0.3s;
  opacity: 0;
}

#fixed-panel:hover > div:not([class="panel-item js-go-top css-go-top"]) {
  transition: 0.3s;
  opacity: 1;
}

.btn-a1 {
  transition: 0.3s;
  background: #e13228;
}

.btn-a1:hover {
  background: #b9261d;
}

.btn-a1 .inner {
  background: #fff0;
}

.btn-b {
  transition: 0.3s;
  background: #eee;
}

.btn-b:hover {
  background: #e3e3e3;
}

.btn-b .inner {
  background: #fff0 !important;
}

.music-ui-tab li {
  border-color: #fff0;
  background: #eee;
}

.ui-slider-handle.ui-state-default.ui-corner-all.ui-state-hover.ui-slider-handle-hover {
  transition: 0.3s;
  transform: scale(1.5);
}
          </style>
        `;
  };

  if (["jingyan.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            #aside,
#exp-msgbox,
#msg-arrow,
#wgt-left-promo,
#wgt-like,
.footer,
.fresh-share-exp-e,
.magzine-list,
.new-icon,
.page-wrap__relative .show-fresh-mark,
.s-tools,
.warning-warpper,
.wgt-cms-entrance,
.wgt-cms-entrance.promo-middle,
.wgt-common-nav,
.wgt-common-nav .main-menu li:last-child,
.wgt-feeds-video,
div[class*="-ads-"] {
  display: none !important;
}

.exp-title .ori-txt,
.tab-list li.act a:link,
.tab-list li.act a:visited,
.wgt-exp-tab .on a,
.wgt-thumbs .step-read:hover {
  color: #2aa198;
}

.wgt-giftshop h3 .tag:hover,
.wgt-hot-tag a:hover,
.wgt-thumbs .zoom-wrap .shdow {
  background: #2aa198;
}

.tab-list li.act,
.wgt-giftshop h3 .tag:hover {
  border-color: #2aa198;
}

.exp-image-wraper .exp-album-enter-mask,
.exp-image-wraper:hover .exp-album-enter-mask,
.wgt-thumbs .step-read,
a {
  transition: 0.3s;
}

.cmt-btn-hads .btn-bg,
.cmt-btn-ques .btn-bg,
.cmt-btn-vote .btn-bg,
.exp-title .fancier-icon-r,
.exp-title .i-activity,
.hads-btn-wrp .cmt-btn-hover .btn-bg,
.hads-btn-wrp .cmt-btn-press .btn-bg,
.hads-list .author-hads .author-meta .icon-pin,
.hads-list .author-hads .author-meta .icon-zan,
.ques-btn-wrp .cmt-btn-hover .btn-bg,
.ques-btn-wrp .cmt-btn-press .btn-bg,
.vote-btn-wrp .cmt-btn-hover .btn-bg,
.vote-btn-wrp .cmt-btn-press .btn-bg,
.wgt-comments .cmt-btn-w .cmt-btn .btn-r-bg,
.wgt-comments .cmt-btn-w .cmt-btn-hover .btn-r-bg,
.wgt-comments .cmt-btn-w .cmt-btn-press .btn-r-bg,
.wgt-exp-share .wrp-exp-share .w-favor,
.wgt-exp-share .wrp-exp-share .w-jmags,
.wgt-income-money .income-title,
.wgt-like .btn-wrapper .dislike-btn i,
.wgt-like .btn-wrapper .like-btn i,
.wgt-like .btn-wrapper .like-btn.active i,
.wgt-like .btn-wrapper .like-btn.active.disabled i,
.wgt-like .btn-wrapper .like-btn.disabled i,
.wgt-like .btn-wrapper .like-btn:hover i,
.wgt-like .btn-wrapper .like-btn:hover.disabled i,
.wgt-like .help-tip,
.wgt-quote .quote-item .bkg-left,
.wgt-quote .quote-item .bkg-right,
.wgt-quote .quote-item .content i {
  transition: 0.1s;
}

.hads-btn-wrp .cmt-btn .btn-bg,
.hads-btn-wrp .cmt-btn-hover .btn-bg,
.main-menu .main-menu-title,
.main-menu a,
.ques-btn-wrp .cmt-btn .btn-bg,
.ques-btn-wrp .cmt-btn-hover .btn-bg,
.top-nav-bar .topbtns .topbtn,
.vote-btn-wrp .cmt-btn .btn-bg,
.vote-btn-wrp .cmt-btn-hover .btn-bg,
.wgt-mag-slider .mag-bg {
  transition: 0s;
}

@-webkit-keyframes left_logoR {
  0% {
    -webkit-transform: translateY(64px);
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.search-list .abstract,
a {
  text-decoration: none !important;
  font-family: -apple-system, "Helvetica Neue", Helvetica, "Nimbus Sans L",
      Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB",
      "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei",
      "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei,
      "WenQuanYi Zen Hei Sharp", sans-serif;
}

.search-list dt a {
  font-weight: 700;
}

.wgt-member .w-vcard .w-minfo .w-earn,
.wgt-user-info .info .btn-green {
  border: none;
  transition: 0.3s;
  margin-bottom: 5px;
  background: #2aa198;
  border-radius: 0;
  color: #fff;
}

.wgt-member .w-vcard .w-minfo .w-earn:hover,
.wgt-user-info .info .btn-green:hover {
  background: #248c84;
  border-radius: 0;
  color: #fff;
  box-shadow: 0 5px 10px #00000038;
}

.bottom-search-form .s-ipt-wr,
.top-search-form .s-ipt-wr,
.wgt-comments .cmt-btn-w .cmt-btn {
  transition: 0.3s;
  background: #fff;
  border: none !important;
  border-radius: 5px 0 0 5px;
  box-shadow: 0 2px 5px #0000001f;
}

.bottom-search-form .s-ipt-wr:hover,
.top-search-form .s-ipt-wr:hover,
.wgt-comments .cmt-btn-w .cmt-btn:hover {
  box-shadow: 0 2px 5px #0000003b;
}

.bottom-search-form #bsb,
.top-search-form #sb,
.top-search-form .s-btn {
  color: #fff;
  transition: 0.3s;
  border-radius: 0 5px 5px 0;
  font-size: 10px;
  background: #5892e3;
  border: none;
  box-shadow: 0 2px 5px #0000001f;
}

.bottom-search-form #bsb:hover,
.top-search-form #sb:hover,
.top-search-form .s-btn:hover {
  background: #4879bd;
  box-shadow: 0 2px 5px #0000003b;
}

#ihome-header .search-box-main .search-form #search-btn {
  width: 70px;
  height: 32px;
  left: 321px;
  top: 0;
}

.search-box .inner-warp {
  height: 90px;
}

.search-box a.logo {
  left: 0;
  bottom: auto;
  top: 30%;
}

.userbar .dropdown-menu a {
  border-bottom: none;
}

.userbar .menu-hide .dropdown-menu {
  transition: 0.3s;
  display: block;
  opacity: 0;
}

.userbar .menu-show .dropdown-menu {
  transition: 0.3s;
  opacity: 1;
}

.userbar .dropdown-menu {
  top: 20px;
  border: none;
  -webkit-box-shadow: 0 2px 5px #0000005e;
  -moz-box-shadow: 0 2px 5px #0000005e;
  box-shadow: 0 2px 5px #0000005e;
}

.top-search-box {
  overflow: visible;
  margin-bottom: 20px;
}

.top-search-form .s-ipt-wr {
  width: 508px;
}

.l-main-col {
  margin-left: 30%;
}

.wgt-bread {
  background: #fff0;
  color: #000;
  height: 24px;
  line-height: 24px;
  margin: 0 35% 0 22%;
  padding: 0;
  position: relative;
}

.s-nav-tab {
  margin: 0;
  padding: 0;
  background: #fff0;
  height: 33px;
  margin-bottom: 21px;
}

.search-list dl a:link,
.wgt-relate-search a:link,
.wgt-relate-search a:visited {
  color: #4879bd;
}

.search-list dl {
  float: left;
  width: 100%;
  padding: 20px 20px 15px;
  margin-top: 0;
  margin-bottom: 20px;
  border-radius: 0;
  background-color: #fff;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.search-list dl:hover {
  box-shadow: 0 0 2px gray !important;
  background: #f3f3f3 !important;
}

.pg b {
  color: #fff;
  background: #2aa198;
  border: 1px solid #fff0;
}

.pg a {
  border: 1px solid #2aa19845;
  color: #2aa198;
  width: 25px;
}

.search-list dt {
  margin-bottom: 10px;
}

.main-content-bottom {
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.04);
}

.top-search-box ul.channel {
  padding: 19px 0 10px 0;
}

.list-icon {
  border-radius: 50%;
  background: #2aa198;
}

.enter-step-btn {
  transition: 0.3s;
}

.exp-image-wraper .enter-step-btn {
  display: block;
  opacity: 0;
}

.exp-image-wraper:hover .enter-step-btn {
  transition: 0.3s;
  opacity: 1;
}

.list-icon-link {
  transition: 0.1s;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAABkCAMAAADQbcK8AAAAM1BMVEUqoZh/x8Eto5c6qZlHr55ku65ywbVPs6L29vb09PTu7u7r6+vm5ubb29vT09PQ0ND///+Df6CZAAAAEXRSTlP/////////////////////ACWtmWIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAUcaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDgtMjdUMTg6MDc6NDYrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA4LTI3VDE4OjEwOjIyKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA4LTI3VDE4OjEwOjIyKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMiIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE1NzQzYzZhLTQzOTktNzg0My05OGZlLTQ0YjIyNTU1ODE1MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNTc0M2M2YS00Mzk5LTc4NDMtOThmZS00NGIyMjU1NTgxNTAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxNTc0M2M2YS00Mzk5LTc4NDMtOThmZS00NGIyMjU1NTgxNTAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjE1NzQzYzZhLTQzOTktNzg0My05OGZlLTQ0YjIyNTU1ODE1MCIgc3RFdnQ6d2hlbj0iMjAxOS0wOC0yN1QxODowNzo0NiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuJriV0AAAHXSURBVEiJ7ZbdkqMgEEYPjWBMLtz3f8tUzcSIinvhH1HATE1utmr7RuU7dLfYLag/LPbtRw+AKLmto2oBms6zmZhqviumy6MPZfBtV1wDoHHszTtVAQjAV3vQgfZrAZo+pkPfTMAjOh+gfYBAYj5AD0Lj04BvELq0Dh2YnA5GqzELKMnrnMj/jMmJLCoPKDn1cMsScpP81zIIVcaFVMha+TErQOBapvTyOi1DlfBRVIC+AHYcYvNvcxSgGvt96UpRsQFck827dneq/YP8tsGXUPEX2CzwcA+G6yMQynBfkSImh4gk9HVQkvo8LGl9EiSjw/2NdZCcA7ife1AnffFODv+BDwF1Xq/fCJF1Ub+VZMZFPb1FkqiZXzNB1CxAnJgGi+VhX9y75t0jkfZPZfKTP0yrlVLAOI5DeQSctvOdUuhhWJ7mEM/BvAQTMzxDwNlDLmLdBnQm0qHKdAvgUn97NwHP5I5SPEEg5n+JAoLL7VkOQad10GiV2dNAOck6AH2+d/8eyOsf6e6zk9gHgNi2HtggZeZACr4Usi4GBJs701oEumSeYwcCl+S5ub9MK2lTJ3PLvNQmFmXsDAuAdYdMvZu6c67IC06H380Pdq7FtWTta/uvpfoX5rKDfhajEOwAAAAASUVORK5CYII=)
      no-repeat 0 -68px;
}

.list-icon-current {
  background-position: 0 0;
}

.exp-content ul li {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAAG1BMVEUqoZgso5S+49tBrpBbupmc1cJyxKZ/yq7///90zLuoAAAACXRSTlP//////////wBTT3gSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA4LTI3VDE4OjE1OjA0KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wOC0yN1QxODoxNTo1MCswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wOC0yN1QxODoxNTo1MCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjIiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDphYzczOTdiMy1lZmE5LWE1NDAtYjEyZi03ODIzY2FlODA1ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6YWM3Mzk3YjMtZWZhOS1hNTQwLWIxMmYtNzgyM2NhZTgwNWZhIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YWM3Mzk3YjMtZWZhOS1hNTQwLWIxMmYtNzgyM2NhZTgwNWZhIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphYzczOTdiMy1lZmE5LWE1NDAtYjEyZi03ODIzY2FlODA1ZmEiIHN0RXZ0OndoZW49IjIwMTktMDgtMjdUMTg6MTU6MDQrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4tpkVnAAAAQ0lEQVQImUWLQQrAMAzDZCeU/v+3Y6TZoSvVSQZZk1oF4SDpF6DKwmIjO/v3Ti8Oy1x8h+PkqHP0s30oUlJDpNG83w9QzBA/m692PwAAAABJRU5ErkJggg==)
      no-repeat scroll 0 8px transparent;
}

.wgt-exp-share .wrp-exp-share a {
  border-radius: 50%;
  margin-bottom: 10px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.18);
}

#bdshare.exp-share-wgt {
  border-radius: 100px;
  overflow: hidden;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.18);
}

.exp-item-list .related-exp-link {
  transition: 0.3s;
  padding: 0 20px;
  border-bottom: none;
}

.exp-item-list .related-exp-link:nth-child(2n + 1) {
  background-color: #00000008;
}

.exp-item-list .related-exp-link:hover {
  background-color: #00000012;
}

.exp-date {
  right: 20px;
}

.main-content-bottom {
  margin-bottom: 30px;
}

.wgt-img-exp .exp-info {
  background: #fff0;
  border: none;
}

.wgt-img-exp {
  margin-right: -60px;
  overflow: visible;
  width: 585px;
}

.wgt-img-exp li {
  padding: 0 0 10px 0;
  width: 160px;
  margin-right: 35px;
  margin-bottom: 35px;
  border-radius: 0;
  background-color: #fff;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.wgt-img-exp li.exp-item-hover {
  box-shadow: 0 0 2px gray !important;
  background: #f3f3f3 !important;
}

.cat-drop-menu {
  background: #fff;
  border: none;
  box-shadow: 0 10px 20px 2px rgba(0, 0, 0, 0.23);
}

.base-info .author-portrait {
  position: absolute;
  left: 0;
  top: 30px;
  background: #fff0;
}

.base-info .author-portrait .portrait-cover {
  position: absolute;
  width: 69px;
  height: 70px;
  background: #fff0;
}

.base-info .author-portrait img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.top-nav-bar {
  display: none;
  height: 44px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1010;
  background: #ffffffdb;
  box-shadow: 0 5px 10px #0000002b;
}

.top-nav-bar .topsearch .toptextinput {
  transition: 0.3s;
  border: none;
  border-bottom: 2px solid #00000030;
}

.top-nav-bar .topsearch .toptextinput:focus {
  border: none;
  border-bottom: 2px solid #2aa198;
}

.body-wrapper .content-container {
  animation-name: left_logoR;
  -webkit-animation-duration: 0.2s;
  -webkit-animation-timing-function: ease;
}

#bread-wrap,
.body-wrapper,
.breadcrumb {
  background-color: #f1f1f1;
}

.body-wrapper .content-container .main-content {
  background-color: #fefefe;
}

.top-search-box .s-nav {
  height: 20px;
}

.userbar {
  top: 30px;
}

.breadcrumb .bread-wrap,
.content-container,
.header,
.nav .nav-wrap {
  width: 1030px;
  margin: 0 auto;
}

#main-content {
  padding: 0;
  width: inherit;
  margin: 10px auto;
  border-radius: 3px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 1px 10px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0 1px 10px rgba(0, 0, 0, 0.12);
}

#exp-article > div[class^="exp-"],
#exp-article > div[class^="wgt-"],
#wgt-comments,
.main-content-bottom {
  padding: 10px 50px;
}

.wgt-common-nav .share-exp-e {
  width: 192px;
  margin-right: 20px;
}

.wgt-thumbs {
  background-size: auto 70px;
}

#wgt-exp-share {
  bottom: 100px !important;
}

.wgt-hot-exp .exp-item {
  transition: 0.3s;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.08);
}

.wgt-hot-exp .exp-item:hover {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.18);
}
          </style>
        `;
  };

  if (["baike.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            #hotspotmining_s,
#side-auth,
#side-share,
#side_box_unionAd,
#tashuo_bottom,
#tashuo_right,
.after-content,
.configModuleDown,
.declare-wrap,
.headerWrap,
.help,
.lemmaWgt-promotion-slide .promotion_viewport,
.lemmaWgt-promotion-vbaike,
.pc-header-new .topbar,
.pinzhuanWrap,
.posterFlag,
.professional-con,
.promotion_viewport,
.right-ad,
.wgt-footer-main,
.wiki-lemma .lemmaWgt-lemmaTitle .lemma-discussion .num,
.zhidao-diversion,
a#navbarAdNew,
a.topA {
  display: none !important;
}

.nav-tab .nav-tab-item.current,
.side-content .side-content-title,
.total-list .total-count {
  color: #5892e3;
}

.nav-tab .nav-tab-item.current {
  border-color: #5892e3;
}

.message .msg-nav,
.wgt-bubble-setMenu ul li a:hover,
.wgt-bubble-userMenu ul li a:hover,
.wgt_bubble.wgt-bubble-userMsg ul li a:hover {
  background: #5892e3;
}

#searchForm > button,
.message .msg-nav .link,
.t-type,
.wgt-bubble-setMenu ul li a,
.wgt-bubble-userMenu ul li a,
.wgt-searchbar-new.wgt-searchbar .search .form .suggestion li,
.wgt-searchbar-new.wgt-searchbar .search .form .suggestion li.selected,
.wgt_bubble.wgt-bubble-userMsg ul li a,
.wiki-usercenter .main-header .nav-tab a,
.wiki-usercenter dl.section dd dl .tab_title .cmn-multi-btn,
.wr-uName {
  transition: 0.3s;
}

.side-catalog .bottom-wrap .gotop-button,
.side-catalog .bottom-wrap .toggle-button {
  transition: 0s;
}

.banner .layout .overviewBox .goTask_btn,
.cmn-btn-blue,
.weeklyTaskMain .btn,
.wgt-searchbar-new.wgt-searchbar .search .form .suggestion {
  transition: 0.3s;
  border: none;
  border-radius: 5px;
  background: #7695a5;
  box-shadow: 0 5px 10px #0003;
  -webkit-box-shadow: 0 5px 10px #0003;
  -moz-box-shadow: 0 5px 10px #0003;
  -o-box-shadow: 0 5px 10px #0003;
}

.banner .layout .overviewBox .goTask_btn:hover,
.cmn-btn-blue:hover,
.weeklyTaskMain .btn:hover,
.wgt-searchbar-new.wgt-searchbar .search .form .suggestion:hover {
  border: none;
  border-radius: 5px;
  background: #65808e;
  box-shadow: 0 5px 10px #0000004d;
  -webkit-box-shadow: 0 5px 10px #0000004d;
  -moz-box-shadow: 0 5px 10px #0000004d;
  -o-box-shadow: 0 5px 10px #0000004d;
}

.wgt-searchbar-new.wgt-searchbar .search .form .suggestion {
  margin-top: 7px;
  width: 418px;
  padding: 10px;
}

.wgt-searchbar-new.wgt-searchbar .search .form .suggestion .delete,
.wgt-searchbar-new.wgt-searchbar .search .form .suggestion li {
  color: #fff;
}

.wgt-searchbar-new.wgt-searchbar .search .form .suggestion li.extra {
  text-decoration: none;
  border-radius: 5px;
  border: none;
  color: #fff;
  background-color: #ffffff2b;
}

.wgt-searchbar-new.wgt-searchbar .search .form .suggestion li.selected {
  background-color: #ffffff2b;
}

.wgt-navbar {
  height: 43px;
}

.main-content table.table-view,
.wiki-usercenter table {
  transition: 0.3s;
  box-shadow: 0 1px 3px #0000004d;
}

.main-content table.table-view:hover,
.wiki-usercenter table:hover {
  box-shadow: 0 3px 7px #0000004d;
}

.main-content table,
.main-content table td,
.wiki-usercenter table td,
.wiki-usercenter table th {
  padding: 3px 20px;
  border: none;
  border-bottom: 2px solid #00000008;
}

.main-content table th,
.wiki-usercenter table th {
  border-bottom: 2px solid #00000008;
  background-color: #00000014;
}

.lemma-reference
    .reference-list-wrap
    .reference-list
    .reference-item
    a:hover {
  border: none;
  color: #000;
}

.reference-tip {
  display: none;
  position: absolute;
  z-index: 1001;
  border: none;
}

.reference-tip .triangle-border {
  top: -10px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 10px solid #fff;
}

.reference-tip .content {
  background: #fff;
}

.wiki-lemma .lemmaWgt-lemmaTitle .edit-lemma:hover,
.wiki-lemma .lemmaWgt-lemmaTitle .lemma-discussion:hover {
  padding-top: 7px;
  padding-bottom: 7px;
  border-color: #fff0;
  border: 1px solid #fff0;
  width: 60px;
  color: #fff;
  background: #52a3f5;
  text-decoration: none;
}

.reference-tip .title {
  background: #7695a5;
}

.bkeToolbarWrap {
  border: none;
  background: #fff0;
}

.BkeToolbar {
  border-top: 24px solid #e6e6e6;
  padding-top: 0;
  background: #f5f6f8;
}

.BkeToolbar_tab_title_item {
  border: none;
  background-color: #fff0;
  padding: 0 18px;
}

.BkeToolbar_tab {
  top: -24px;
}

.BkeToolbar_tab_title_item_on {
  background: #f5f6f8;
}

.BkeHover .BkeButton_Inner,
.BkeToolbar_Inner .BkeHover,
.structure-list {
  -webkit-box-shadow: 0 1px 5px #00000030;
}

.toolbarWrapFixed {
  position: fixed;
  top: 0 !important;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.22);
}

.bkshop-propsbox .propsbox-header {
  border: none;
  background: #fff;
  padding: 10px 10px;
}

#bke_cardIframeHolder,
#bke_contentIframeHolder,
#rel2tag {
  border: none;
}

.wgt-searchbar-simple .logo-container .topic,
.wgt-userbar li a {
  color: #fff;
}

.wiki-usercenter .header-wrapper {
  border-bottom: none;
  background: #547b8e;
}

.wgt-userbar {
  right: 3%;
}

.cmn-btn-white-blue,
.cmn-multi-btn {
  border: solid 1px #fff0;
  background: #fff;
}

.cmn-multi-btn:last-child.cmn-btn-30,
.cmn-multi-btn:last-child.cmn-btn-32,
.cmn-multi-btn:last-child.cmn-btn-40,
.cmn-multi-btn:last-child:hover.cmn-btn-30,
.cmn-multi-btn:last-child:hover.cmn-btn-32,
.cmn-multi-btn:last-child:hover.cmn-btn-40 {
  border-radius: 0 10px 10px 0 !important;
}

.cmn-multi-btn:first-child.cmn-btn-30,
.cmn-multi-btn:first-child.cmn-btn-32,
.cmn-multi-btn:first-child.cmn-btn-40,
.cmn-multi-btn:first-child:hover.cmn-btn-30,
.cmn-multi-btn:first-child:hover.cmn-btn-32,
.cmn-multi-btn:first-child:hover.cmn-btn-40 {
  border-radius: 10px 0 0 10px !important;
}

.cmn-multi-btn.cur {
  border-color: #7695a5;
  background: #7695a5;
}

.wiki-usercenter dl.section dd dl .tab_title .cmn-multi-btn:hover {
  background: #0000000f;
}

.wgt-userbar li a:hover,
.wgt-userbar li a:hover em {
  color: #ffffffde !important;
}

.wgt-searchbar-new.wgt-searchbar .logo-container .topic,
.wgt-searchbar-simple .logo-container .topic a,
.wgt-userbar li a em,
.wgt-userbar.wgt-userbar-n li a {
  color: #fff !important;
}

.header-wrapper .header {
  width: auto;
}

.header-wrapper {
  border-bottom: none;
}

.before-content {
  margin: 0 !important;
}

.wgt-bubble-setMenu,
.wgt-bubble-userMenu,
.wgt_bubble.wgt-bubble-userMsg {
  margin-top: 0;
  border: none;
  box-shadow: 1px 1px 5px #0000002b;
}

.wgt_bubble.pos_bottom.align_center .tail,
.wgt_bubble.pos_top.align_center .tail {
  display: none;
}

.header-wrapper {
  width: 100%;
}

.wgt-searchbar-simple .logo-container {
  margin-left: 100px;
}

.wgt-userbar {
  top: 20px;
}

.message {
  border: none;
  box-shadow: 0 2px 7px #0000002b;
}

.message .msg-nav .link:hover {
  background: #0000001c;
}

.message .msg-nav .link.router-link-active {
  background: #0000001c;
  margin: 0;
}

.grid {
  padding: 0 220px;
  width: auto;
  background-color: #547b8e;
}

.headerMain .logo {
  float: left;
  height: 32px;
  margin: 0;
  padding: 26px 10px;
  background-color: #fff;
}

.headerMain .search {
  padding-top: 25px;
  padding-right: 200px;
}

.headerMain .search .s_ipt_wr {
  height: 40px !important;
}

.headerMain .search #word {
  background: #fff0;
  color: #fff !important;
  margin: 0 0 0 20px;
  height: 40px;
}

.weeklyRanking .show {
  box-shadow: none;
}

.weeklyTaskMain .no-btn {
  background: #d3d9dc !important;
  box-shadow: 0 2px 7px #0000002b !important;
}

.wgt-navbar
    .navbar-bg
    .navbar-bg-top
    .navbar-content
    .navbar-content-box
    div.usercenter
    div {
  padding: 0 35px;
  border-left: 1px solid #ffffff29;
}

.wgt-navbar
    .navbar-bg
    .navbar-bg-top
    .navbar-content
    .navbar-content-box
    div.usercenter {
  border-left: none;
}

.wiki-lemma .large-feature .after-feature-poster .layout,
.wiki-lemma .tabCards {
  transition: 0.3s;
  padding: 20px 0 0 30px;
  border: none;
  border-width: 0 1px;
  width: 1100px;
  min-height: 22px;
  background: #f4f4f4;
}

.body-wrapper .content-wrapper .content {
  font-family: Microsoft YaHei, WenQuanYi Micro Hei, sans-serif !important;
}

a {
  text-decoration: none !important;
}

.header-wrapper {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.header-wrapper .header .layout {
  width: 100%;
}

.lemmaWgt-searchHeader {
  border: none;
}

.header-wrapper .header,
.lemmaWgt-searchHeader {
  background-color: #547b8e;
}

.pc-header-new .wgt-searchbar-main {
  width: 930px;
  margin: auto;
}

.cmn-icons_logo-du {
  color: rgba(254, 254, 254, 0.76);
}

.cmn-icons_logo-bai,
.cmn-icons_logo-baike {
  color: rgba(255, 255, 255, 0.54);
}

.wgt-searchbar-new.wgt-searchbar .search .form .suggestion li {
  padding: 0 8px;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  cursor: pointer;
}

.header-wrapper .header .search .form input,
.headerMain .search .s_ipt_wr,
.wgt-searchbar-new.wgt-searchbar .search .form input,
.wgt-searchbar-simple .search .form input {
  height: 30px;
  line-height: 1.5;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  background: hsla(0, 0%, 100%, 0.2);
  color: #fff;
  transition: background 0.3s;
}

.header-wrapper .header .search .form input:focus,
.headerMain .search .s_ipt_wr:focus,
.wgt-searchbar-new.wgt-searchbar .search .form input:focus {
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  background: hsla(0, 0%, 100%, 0.9);
  color: #222;
  transition: background 0.3s, box-shadow 0.5s;
}

#searchForm > button,
.headerMain .search .s_btn {
  height: 40px;
  line-height: 1.5;
  border-radius: 5px;
  margin-left: 5px;
  border: none !important;
  box-shadow: 0 0 0 transparent;
  color: #fff !important;
  background: hsla(0, 50%, 100%, 0.2) !important;
}

#searchForm > button:hover,
.headerMain .search .s_btn:hover {
  background: hsla(0, 50%, 100%, 0.9) !important;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  color: #222 !important;
  transition: box-shadow 0.5s, background 0.5s;
}

.wgt-navbar .navbar-bg .navbar-bg-top {
  height: 43px;
  border-top: none;
  border-bottom: none;
  background: #7c9b9e;
}

.wgt-searchbar-new.wgt-searchbar .logo-container {
  padding: 12px 0 15px;
}

.tool-buttons {
  margin-top: 30px;
}

.tool-buttons .button {
  color: #fff;
  font-size: 16px;
}

.lemmaWgt-searchHeader .user-info {
  margin-top: 13px;
}

.lemmaWgt-searchHeader .user-info a.user-link {
  text-decoration: none;
  font-size: 16px;
  color: #fff;
}

.wgt-searchbar-new.wgt-searchbar-large .search {
  padding: 15px 0;
}

.wgt-searchbar-new.wgt-searchbar-large .logo-container {
  padding: 10px 0;
}

.body-wrapper .para,
.main-content table.table-view {
  font-size: 16px;
  line-height: 1.8;
}

.body-wrapper a {
  color: #0f5290;
}

.page-background {
  background: #f5f5f5 !important;
}

.content,
.polysemant-list {
  border-radius: 5px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
}

.polysemant-list-normal .polysemantList-header,
.polysemant-list-normal .polysemantList-wrapper {
  border: none;
}

.content {
  margin-bottom: 30px;
}

.before-content {
  margin: 10px auto 0;
}

.before-content .pinzhuanWrap {
  padding: 5px 0;
}

.polysemant-list-normal .polysemantList-wrapper {
  background: #fff;
}

.lemma-picture,
.lemmaWgt-sideRecommend,
.side-box,
.wiki-lemma #authEdit,
.wiki-lemma #authResource,
.wiki-lemma .summary-pic,
.zhidao-diversion {
  border: none;
  box-shadow: 0 0 0 transparent;
}

.lemmaWgt-lemmaCatalog .lemma-catalog,
.lemmaWgt-lemmaCatalog .lemma-catalog .catalog-list,
.lemmaWgt-lemmaCatalog .lemma-catalog .catalog-list ol li.level1 .text {
  background: #fcfcfc;
  border: none;
}

.lemmaWgt-lemmaCatalog .lemma-catalog {
  border-radius: 5px;
}

.lemmaWgt-lemmaCatalog .lemma-catalog .catalog-list ol li.level2 .text {
  font-size: 14px;
}

.polysemant-list .polysemantList-header .polysemantList-addButton,
.polysemant-list
    .polysemantList-header
    .polysemantList-header-title
    .toggle.collapse,
.polysemant-list
    .polysemantList-header
    .polysemantList-header-title
    .toggle.expand {
  width: auto;
}

.body-wrapper .para::selection,
.body-wrapper a::selection,
.main-content::selection {
  background: #909aa5;
  color: #fff;
}

.main-content a::selection {
  color: #0f5290;
}

.wgt-footer-main {
  width: 1140px;
  margin: 10px auto 0;
}

.lemma-picture.text-pic {
  box-shadow: 0 1px 4px #00000030;
}

.lemma-picture.text-pic.layout-left {
  margin-right: 15px;
}

.lemma-picture.text-pic.layout-right {
  margin-left: 15px;
}

.body-wrapper {
  animation-name: left_logoR;
  -webkit-animation-duration: 0.5s;
  -moz-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-timing-function: ease;
  -moz-animation-timing-function: ease;
  animation-timing-function: ease;
}

@-webkit-keyframes left_logoR {
  0% {
    -webkit-transform: translateY(64px);
    -moz-transform: translateY(64px);
    transform: translateY(64px);
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
          </style>
        `;
  };

  if (["image.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            #report_link {
  display: none !important;
}

.pic-info-box .pic-info-sticker {
  background: #5892e3;
}

#shoot-tabs-area .tabs-container .active {
  color: #5892e3;
}

#shoot-tabs-area .tabs-container .active {
  border-color: #5892e3;
}

#userInfo .username_menu a,
.similarpic-card .card-content .piclist li,
.username_menu a:visited {
  transition: 0.3s;
}

a {
  text-decoration: none !important;
}

.wrapper_userinfo_cover {
  transition: 0.3s;
  opacity: 0.1;
  background: #0f1932;
}

.wrapper_userinfo_box:hover .wrapper_userinfo_cover {
  opacity: 0.3;
  background: #0f1932;
}

#search form .s_ipt_wr,
#sugIn,
.common-shitu .stuwr,
.search .stuwr {
  transition: 0.3s;
  background: #fff;
  border: none !important;
  border-radius: 5px 0 0 5px;
  box-shadow: 0 2px 5px #0000001f;
}

#search form .s_ipt_wr:hover,
#sugIn:hover,
.common-shitu .stuwr:hover,
.search .stuwr:hover {
  box-shadow: 0 2px 5px #0000003b;
}

#search form .s_ipt_wr.active {
  background: #ffffff54 !important;
  box-shadow: 0 7px 30px #0000003d !important;
}

#search form .s_btn_wr .s_btn,
#sugOut .sb,
.common-shitu .stsb2,
.search .stsb2 {
  color: #fff;
  transition: 0.3s;
  border-radius: 0 5px 5px 0;
  background: #5892e3;
  border: none;
  box-shadow: 0 2px 5px #0000001f;
}

#search form .s_btn_wr .s_btn:hover,
#sugOut .sb:hover,
.common-shitu .stsb2:hover,
.search .stsb2:hover {
  border: none;
  background: #4879bd !important;
  box-shadow: 0 2px 5px #0000003b;
}

.common-shitu .stuwr {
  overflow: hidden;
}

.child_fixed #topInfoBar {
  -webkit-box-shadow: 0 5px 10px 0 #00000054;
  box-shadow: 0 5px 10px 0 #00000054;
}

.s_search {
  border: none;
}

html body #wrapper .cg_avatar #lefter {
  border-right: none;
  box-shadow: 0 0 5px #0003;
}

html body #wrapper .cg_avatar .fixedLefter {
  top: 93px !important;
  position: fixed !important;
}

#backTop {
  bottom: 40px;
}

.search #search .s_ipt_wr {
  background: #fff;
  border: none;
}

.search #search .s_ipt {
  background: #fff0;
}

.album-container .album-imgs li {
  transition: 0.3s;
  border: 1px solid #00000014;
  box-shadow: 0 1px 3px #0000001f;
}

.album-container .album-imgs li:hover {
  box-shadow: 0 2px 5px #00000042;
  transform: translateY(-2px);
}

#stsug {
  border: none;
  box-shadow: 0 2px 5px #00000042;
}

.common-shitu .stf #uploadImg {
  transition: 0.3s;
  border: 1px solid #5892e37d;
  border-radius: 5px;
  color: #5892e3;
}

.common-shitu .stf #uploadImg:hover {
  background-color: #5892e3;
  color: #fff;
}

#imglist .imgitem .imgfloat {
  transition: 0.3s;
  opacity: 0;
  display: block;
}

#imglist .imgitem:hover .imgfloat {
  transition: 0.3s;
  opacity: 1;
}

.search #search .s_ipt_wr,
.search .stuwr {
  height: 32px;
  margin-right: -5px;
}

.hq-waterfall .tile .holder .actions .btnDelete,
.hq-waterfall .tile .holder .actions .btnDownload {
  transition: 0.3s;
  border-radius: 4px;
  background: #fff;
  opacity: 0.7;
}

.hq-waterfall .tile .holder .actions .btnDelete:hover,
.hq-waterfall .tile .holder .actions .btnDownload:hover {
  transition: 0.3s;
  border-radius: 4px;
  background: #fff;
  opacity: 0.9;
}

.dialogJ,
.pic-confirm,
.search #stmore,
.search #stsug {
  background: #fff;
  -webkit-box-shadow: 0 2px 5px #0000002e;
  -moz-box-shadow: 0 2px 5px #0000002e;
  box-shadow: 0 2px 5px #0000002e;
  border: none;
  border-radius: 5px;
}

.dialogJ .dialogJbtn,
.pic-confirm .dialogJanswers .dialogJbtn {
  transition: 0.3s;
  background: #5892e3;
  border-radius: 3px;
}

.dialogJ .dialogJbtn:hover,
.pic-confirm .dialogJanswers .dialogJbtn:hover {
  background: #4879bd;
}

.dialogJ .dialogJbtn[value="取消"],
.pic-confirm .dialogJanswers .dialogJbtn[value="取消"] {
  background: #00000017;
}

.search #search .s_btn_wr,
.search .stsb {
  background: #fff0;
}

.create-album-name {
  transition: 0.3s;
  border: none;
  border-bottom: 2px solid #0000001f;
}

.create-album-name:hover {
  border-bottom: 2px solid #5892e3;
}

.borderline {
  background: #fff;
  -webkit-box-shadow: 0 2px 5px #0000002e;
  -moz-box-shadow: 0 2px 5px #0000002e;
  box-shadow: 0 2px 5px #0000002e;
  border: none;
  border-radius: 5px;
  padding: 15px;
}

.sort-type {
  background-image: url(data:image/jpeg;base64,/9j/4QQbRXhpZgAASUkqAAgAAAAMAAABAwABAAAA4gEAAAEBAwABAAAAHQAAAAIBAwADAAAAngAAAAYBAwABAAAAAgAAABIBAwABAAAAAQAAABUBAwABAAAAAwAAABoBBQABAAAApAAAABsBBQABAAAArAAAACgBAwABAAAAAgAAADEBAgAiAAAAtAAAADIBAgAUAAAA1gAAAGmHBAABAAAA7AAAACQBAAAIAAgACACA/AoAECcAAID8CgAQJwAAQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpADIwMTk6MDg6MjcgMjI6NTI6MDQAAAAEAACQBwAEAAAAMDIzMQGgAwABAAAA//8AAAKgBAABAAAA4gEAAAOgBAABAAAAHQAAAAAAAAAAAAYAAwEDAAEAAAAGAAAAGgEFAAEAAAByAQAAGwEFAAEAAAB6AQAAKAEDAAEAAAACAAAAAQIEAAEAAACCAQAAAgIEAAEAAACRAgAAAAAAAEgAAAABAAAASAAAAAEAAAD/2P/tAAxBZG9iZV9DTQAC/+4ADkFkb2JlAGSAAAAAAf/bAIQADAgICAkIDAkJDBELCgsRFQ8MDA8VGBMTFRMTGBEMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAENCwsNDg0QDg4QFA4ODhQUDg4ODhQRDAwMDAwREQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgACgCgAwEiAAIRAQMRAf/dAAQACv/EAT8AAAEFAQEBAQEBAAAAAAAAAAMAAQIEBQYHCAkKCwEAAQUBAQEBAQEAAAAAAAAAAQACAwQFBgcICQoLEAABBAEDAgQCBQcGCAUDDDMBAAIRAwQhEjEFQVFhEyJxgTIGFJGhsUIjJBVSwWIzNHKC0UMHJZJT8OHxY3M1FqKygyZEk1RkRcKjdDYX0lXiZfKzhMPTdePzRieUpIW0lcTU5PSltcXV5fVWZnaGlqa2xtbm9jdHV2d3h5ent8fX5/cRAAICAQIEBAMEBQYHBwYFNQEAAhEDITESBEFRYXEiEwUygZEUobFCI8FS0fAzJGLhcoKSQ1MVY3M08SUGFqKygwcmNcLSRJNUoxdkRVU2dGXi8rOEw9N14/NGlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vYnN0dXZ3eHl6e3x//aAAwDAQACEQMRAD8AOkkkt9yVJJJJKdb6q/8ALdf/ABVn/fF3C4f6q/8ALdf/ABVn/fF3Cy+f/nR/dH5yb3K/zZ81JJJKo2FKL+FJRfwkpTOFJRZwpJKUkkkkpS80v/pF3/G2f9W5elrzS/8ApF3/ABtn/VuV/wCH75P8H/umpzm0fqwSSSWg1FJJJJKf/9n/7QvaUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAA8cAVoAAxslRxwCAAACAAAAOEJJTQQlAAAAAAAQzc/6fajHvgkFcHaurwXDTjhCSU0EOgAAAAAA+QAAABAAAAABAAAAAAALcHJpbnRPdXRwdXQAAAAFAAAAAFBzdFNib29sAQAAAABJbnRlZW51bQAAAABJbnRlAAAAAEltZyAAAAAPcHJpbnRTaXh0ZWVuQml0Ym9vbAAAAAALcHJpbnRlck5hbWVURVhUAAAAEgBFAFAAUwBPAE4AIABMADgAMAA1ACAAUwBlAHIAaQBlAHMAAAAAAA9wcmludFByb29mU2V0dXBPYmpjAAAABWghaDeLvn9uAAAAAAAKcHJvb2ZTZXR1cAAAAAEAAAAAQmx0bmVudW0AAAAMYnVpbHRpblByb29mAAAACXByb29mQ01ZSwA4QklNBDsAAAAAAi0AAAAQAAAAAQAAAAAAEnByaW50T3V0cHV0T3B0aW9ucwAAABcAAAAAQ3B0bmJvb2wAAAAAAENsYnJib29sAAAAAABSZ3NNYm9vbAAAAAAAQ3JuQ2Jvb2wAAAAAAENudENib29sAAAAAABMYmxzYm9vbAAAAAAATmd0dmJvb2wAAAAAAEVtbERib29sAAAAAABJbnRyYm9vbAAAAAAAQmNrZ09iamMAAAABAAAAAAAAUkdCQwAAAAMAAAAAUmQgIGRvdWJAb+AAAAAAAAAAAABHcm4gZG91YkBv4AAAAAAAAAAAAEJsICBkb3ViQG/gAAAAAAAAAAAAQnJkVFVudEYjUmx0AAAAAAAAAAAAAAAAQmxkIFVudEYjUmx0AAAAAAAAAAAAAAAAUnNsdFVudEYjUHhsQFIAAAAAAAAAAAAKdmVjdG9yRGF0YWJvb2wBAAAAAFBnUHNlbnVtAAAAAFBnUHMAAAAAUGdQQwAAAABMZWZ0VW50RiNSbHQAAAAAAAAAAAAAAABUb3AgVW50RiNSbHQAAAAAAAAAAAAAAABTY2wgVW50RiNQcmNAWQAAAAAAAAAAABBjcm9wV2hlblByaW50aW5nYm9vbAAAAAAOY3JvcFJlY3RCb3R0b21sb25nAAAAAAAAAAxjcm9wUmVjdExlZnRsb25nAAAAAAAAAA1jcm9wUmVjdFJpZ2h0bG9uZwAAAAAAAAALY3JvcFJlY3RUb3Bsb25nAAAAAAA4QklNA+0AAAAAABAASAAAAAEAAQBIAAAAAQABOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAAeOEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAABOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAANZAAAABgAAAAAAAAAAAAAAHQAAAeIAAAASAHQAYQBiAF8AYgB1AHQAdABvAG4AXwA1AGMAOABlADQAMgA0AAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAHiAAAAHQAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAABAAAAABAAAAAAAAbnVsbAAAAAIAAAAGYm91bmRzT2JqYwAAAAEAAAAAAABSY3QxAAAABAAAAABUb3AgbG9uZwAAAAAAAAAATGVmdGxvbmcAAAAAAAAAAEJ0b21sb25nAAAAHQAAAABSZ2h0bG9uZwAAAeIAAAAGc2xpY2VzVmxMcwAAAAFPYmpjAAAAAQAAAAAABXNsaWNlAAAAEgAAAAdzbGljZUlEbG9uZwAAAAAAAAAHZ3JvdXBJRGxvbmcAAAAAAAAABm9yaWdpbmVudW0AAAAMRVNsaWNlT3JpZ2luAAAADWF1dG9HZW5lcmF0ZWQAAAAAVHlwZWVudW0AAAAKRVNsaWNlVHlwZQAAAABJbWcgAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAAAB0AAAAAUmdodGxvbmcAAAHiAAAAA3VybFRFWFQAAAABAAAAAAAAbnVsbFRFWFQAAAABAAAAAAAATXNnZVRFWFQAAAABAAAAAAAGYWx0VGFnVEVYVAAAAAEAAAAAAA5jZWxsVGV4dElzSFRNTGJvb2wBAAAACGNlbGxUZXh0VEVYVAAAAAEAAAAAAAlob3J6QWxpZ25lbnVtAAAAD0VTbGljZUhvcnpBbGlnbgAAAAdkZWZhdWx0AAAACXZlcnRBbGlnbmVudW0AAAAPRVNsaWNlVmVydEFsaWduAAAAB2RlZmF1bHQAAAALYmdDb2xvclR5cGVlbnVtAAAAEUVTbGljZUJHQ29sb3JUeXBlAAAAAE5vbmUAAAAJdG9wT3V0c2V0bG9uZwAAAAAAAAAKbGVmdE91dHNldGxvbmcAAAAAAAAADGJvdHRvbU91dHNldGxvbmcAAAAAAAAAC3JpZ2h0T3V0c2V0bG9uZwAAAAAAOEJJTQQoAAAAAAAMAAAAAj/wAAAAAAAAOEJJTQQRAAAAAAABAQA4QklNBBQAAAAAAAQAAAABOEJJTQQMAAAAAAKtAAAAAQAAAKAAAAAKAAAB4AAAEsAAAAKRABgAAf/Y/+0ADEFkb2JlX0NNAAL/7gAOQWRvYmUAZIAAAAAB/9sAhAAMCAgICQgMCQkMEQsKCxEVDwwMDxUYExMVExMYEQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAQ0LCw0ODRAODhAUDg4OFBQODg4OFBEMDAwMDBERDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAKAKADASIAAhEBAxEB/90ABAAK/8QBPwAAAQUBAQEBAQEAAAAAAAAAAwABAgQFBgcICQoLAQABBQEBAQEBAQAAAAAAAAABAAIDBAUGBwgJCgsQAAEEAQMCBAIFBwYIBQMMMwEAAhEDBCESMQVBUWETInGBMgYUkaGxQiMkFVLBYjM0coLRQwclklPw4fFjczUWorKDJkSTVGRFwqN0NhfSVeJl8rOEw9N14/NGJ5SkhbSVxNTk9KW1xdXl9VZmdoaWprbG1ub2N0dXZ3eHl6e3x9fn9xEAAgIBAgQEAwQFBgcHBgU1AQACEQMhMRIEQVFhcSITBTKBkRShsUIjwVLR8DMkYuFygpJDUxVjczTxJQYWorKDByY1wtJEk1SjF2RFVTZ0ZeLys4TD03Xj80aUpIW0lcTU5PSltcXV5fVWZnaGlqa2xtbm9ic3R1dnd4eXp7fH/9oADAMBAAIRAxEAPwA6SSS33JUkkkkp1vqr/wAt1/8AFWf98XcLh/qr/wAt1/8AFWf98XcLL5/+dH90fnJvcr/NnzUkkkqjYUov4UlF/CSlM4UlFnCkkpSSSSSlLzS/+kXf8bZ/1bl6WvNL/wCkXf8AG2f9W5X/AIfvk/wf+6anObR+rBJJJaDUUkkkkp//2QA4QklNBCEAAAAAAF0AAAABAQAAAA8AQQBkAG8AYgBlACAAUABoAG8AdABvAHMAaABvAHAAAAAXAEEAZABvAGIAZQAgAFAAaABvAHQAbwBzAGgAbwBwACAAQwBDACAAMgAwADEAOQAAAAEAOEJJTQQGAAAAAAAHAAEAAQABAQD/4Q3laHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjFDMTcwMUI0MUMyMTY4MTE4MDgzOTAyQUQyRTc2NEJGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlDQkYxNkVCNEI0ODExRTNBMDk5OTY2MDUyNDRENzk3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUxMTNhNDFhLTliMTMtYTQ0Zi1iMDAxLWRkYThmZDliMjgyZCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0wOC0yN1QyMjo0OToxMSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMDgtMjdUMjI6NTI6MDQrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDgtMjdUMjI6NTI6MDQrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvanBlZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY0OUU3OTJBQTMyRDY4MTE4MDgzOTAyQUQyRTc2NEJGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFDMTcwMUI0MUMyMTY4MTE4MDgzOTAyQUQyRTc2NEJGIi8+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjUxMTNhNDFhLTliMTMtYTQ0Zi1iMDAxLWRkYThmZDliMjgyZCIgc3RFdnQ6d2hlbj0iMjAxOS0wOC0yN1QyMjo1MjowNCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+4ADkFkb2JlAGSAAAAAAf/bAIQADAgICAkIDAkJDBELCgsRFQ8MDA8VGBMTFRMTGBEMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAENCwsNDg0QDg4QFA4ODhQUDg4ODhQRDAwMDAwREQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAHQHiAwEiAAIRAQMRAf/dAAQAH//EAGYAAQEAAgMAAAAAAAAAAAAAAAADBAYCBQcBAQEAAwEAAAAAAAAAAAAAAAAFAQIEAxABAAAFBQAAAAAAAAAAAAAAAAKyA3M1ATIEBQYRAQABBQEAAAAAAAAAAAAAAAABcQIyMwSB/9oADAMBAAIRAxEAPwC4C+kgAAAAAAAAAAAPROrxnEsU5IWUxerxnEsU5IWUhX53VlVtxikADVkAAAAAAAAAARWRAUg26JqQbdAcgAAAAAAAAAAAGnexydKxDPVbi072OTpWIZ6rq4t0Ul4dWv2HRAKrgAAAAAAAAAAAAAAf/9C4C+kgAAAAAAAAAAAPROrxnEsU5IWUxerxnEsU5IWUhX53VlVtxikADVkAAAAAAAAAARWRAUg26JqQbdAcgAAAAAAAAAAAGnexydKxDPVbi072OTpWIZ6rq4t0Ul4dWv2HRAKrgAAAAAAAAAAAAAAf/9k=);
}
          </style>
        `;
  };

  if (["site.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            .hot-searches,
.hot-words .slider,
.pstr.mt10,
table td:nth-child(3) {
  display: none !important;
}

.real .search,
.toplist .bd li {
  transition: 0.3s;
}

a {
  text-decoration: none !important;
}

@font-face {
  font-family: "宋体";
  src: local("Microsoft YaHei");
}

.formInput,
.search-form .search-input {
  transition: 0.3s;
  background: #fff;
  border: none !important;
  border-radius: 5px 0 0 5px;
  box-shadow: 0 2px 5px #0000001f;
}

.formInput:hover,
.search-form .search-input:hover {
  box-shadow: 0 2px 5px #0000003b;
}

.search-form .search-btn,
input.sb {
  color: #fff;
  transition: 0.3s;
  border-radius: 0 5px 5px 0;
  background: #5892e3;
  border: none;
  box-shadow: 0 2px 5px #0000001f;
}

.search-form .search-btn:hover,
input.sb:hover {
  background: #4879bd;
  box-shadow: 0 2px 5px #0000003b;
}

.cools .site {
  transition: 0.3s;
  padding: 7px 14px;
}

.sites .site {
  transition: 0.3s;
  width: 94px;
  padding-left: 8px;
  margin-right: 8px;
  line-height: 32px;
}

.cools .site:hover,
.real .search:hover,
.sites .site:hover,
.toplist .bd li:hover {
  color: #fff !important;
  background: #5892e3;
}

.cools .site:hover .clr-black,
.real .search:hover .clr-black,
.sites .site:hover .clr-black,
.toplist .bd li:hover .clr-black {
  transition: 0.3s;
  color: #fff !important;
}

.clr-black {
  transition: 0.3s;
}

.clr-black:hover {
  color: #fff;
}

.mod {
  border: none;
}

.main,
.sidebar.fl.fl-hack {
  box-shadow: 0 3px 7px #00000026;
}

.mt10 {
  margin-top: 0;
  margin-bottom: 10px;
}

.content-top {
  border: none;
  margin-bottom: 30px;
}

#header a.to-new,
.to-old {
  transition: 0.3s;
  width: 80px;
  padding: 5px 0;
  top: 0;
  right: 0;
  border-radius: 0 0 5px 5px;
  border: none;
  font-size: 10px;
  box-shadow: 0 1px 3px #00000017;
}

#header a.to-new:hover,
.to-old:hover {
  background: #5892e3;
  color: #fff;
  border: none;
  box-shadow: 0 2px 7px #00000021;
}

.formInput {
  padding: 10px 10px;
  width: 400px;
}

input.sb {
  padding: 10px 10px;
  height: auto;
  width: auto;
  position: relative;
  left: -3px;
}
          </style>
        `;
  };

  if (["map.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            #message-panel.message-panel-open,
.poi-ads,
.tooltip,
.ui3-suggest-wrap .leadDownloadCard {
  display: none !important;
}

#user-center.ui3-user-center-wrap .info-box .detail-info-box .up-zone,
.c-btn-blue-reverse,
.special2-box .bar-wrapper .bar {
  background: #5892e3;
}

.BMap_cpyCtrl a {
  color: #5892e3;
}

.navtrans-navlist-list li,
.navtrans-navlist-list li.active,
.poidetail-widget-generalHead
    .generalHead-right-header
    .generalHead-right-route,
.rea,
.special8-box .photo-list ul.photo-list-ul li.photo-li .photo,
.ui3-control-wrap .trafficopt i,
.ui3-control-wrap .trafficopt:hover i,
.ui3-control-wrap .ui3-city-change-inner,
.ui3-suggest-item a,
.ui3-suggest-item-hover a,
.ui3-suggest-item:hover a,
.unifycontainer .comment-item .comment-imgs .ugc-img {
  transition: 0.3s;
}

a {
  text-decoration: none !important;
}

#sole-searchbox-content {
  transition: 0.3s;
  background: #fff;
  border: none !important;
  border-radius: 5px 0 0 5px;
}

#searchbox #searchbox-container,
.nr_know p.nr_pi input {
  transition: 0.3s;
  border: none;
  border-radius: 5px 0 0 5px;
  box-shadow: 0 2px 5px #0000001f;
}

#searchbox #searchbox-container:hover {
  box-shadow: 0 2px 5px #0000003b;
}

#searchbox #search-button,
.IknownBtn {
  color: #fff;
  transition: 0.3s;
  border-radius: 0 5px 5px 0;
  background-color: #5892e3;
  border: none;
  box-shadow: 0 2px 5px #0000001f;
}

#searchbox #search-button:hover,
.IknownBtn:hover {
  background-color: #4879bd;
  box-shadow: 0 2px 5px #0000003b;
}

.map_popup,
.ui3-suggest-wrap {
  transition: 0.3s;
  background: #fff;
  border: none !important;
  border-radius: 5px;
  box-shadow: 0 2px 5px #0000001f;
  overflow: hidden;
}

.map_popup:hover,
.ui3-suggest-wrap:hover {
  box-shadow: 0 2px 5px #0000003b;
}

.smp-content .smp-input {
  transition: 0.3s;
  border: none;
  border-bottom: 2px solid #00000026;
}

.smp-content .smp-input:focus,
.smp-content .smp-input:hover {
  border: none;
  border-bottom: 2px solid #5892e3;
}

.smp-content .smp-btns button {
  transition: 0.3s;
  background: #fff;
  border: none !important;
  border-radius: 5px;
  box-shadow: 0 2px 5px #0000001f;
}

.smp-content .smp-btns button:first-child {
  transition: 0.3s;
  color: #fff;
  background: #5892e3;
  border-radius: 5px;
}

.smp-content .smp-btns button[disabled] {
  background: #c6c6c6;
  box-shadow: 0 2px 5px #0000000a;
}

.ui3-control-wrap #ui3_city_change {
  border-radius: 5px 0 0 5px;
  box-shadow: none;
}

.ui3-control-wrap .left,
.ui3-control-wrap .right {
  border-radius: 0 5px 5px 0;
  box-shadow: none;
}

#message-center .message-center-entrance,
#tool-container,
#user-center.ui3-user-center-wrap .info-box .detail-info-box,
.ui3-control-wrap .detail-box {
  transition: 0.3s;
  border: none !important;
  border-radius: 5px;
  box-shadow: 0 2px 5px #0000001f;
}

.map_popup .title {
  border-bottom: none;
}

.sel_city_default {
  border-bottom: 1px solid #0000000d;
  padding: 7px 0 13px 5px;
  margin-bottom: 13px;
  line-height: 22px;
}

.sel-city-searchbar .sel-city-btnl {
  border: 1px solid #fff0;
  border-radius: 2px;
  box-shadow: 0 2px 4px #0000003b;
}

.sel-city-searchbar .sel-city-btnr {
  border: 1px solid #0000000d;
}

.poidetail-widget-generalHead .generalHead-header {
  background-color: #5892e3;
}

.poidetail-widget-generalHead
    .generalHead-left-header
    .generalHead-left-header-visit
    .left-header-know-visit {
  color: #ffffffa3;
}

.special8-box .photo-list ul.photo-list-ul li.photo-li .photo:hover,
.unifycontainer .comment-item .comment-imgs .ugc-img:hover {
  transform: scale(1.1);
}

.card-box,
.poidetail-widget-generalInfo {
  margin: 7px;
}

.search-item {
  margin: 7px 0;
}

.card-box,
.navtrans-navlist-title,
.poidetail-widget-generalInfo,
.search-item {
  transition: 0.3s;
  box-shadow: 0 1px 5px #0000002e;
  background-color: #fff;
}

.navtrans-navlist-view,
.poidetail-widget-generalInfo,
.poidetail-widget-generalInfo .generalInfo-address-telnum .item,
.unifycontainer .phoenix-block {
  border: none;
}

.cardlist .card {
  background: #eee;
  box-shadow: 0 5px 10px #0006;
}

.phoenix-block {
  border-bottom: 10px solid #0000;
  background-color: #fff0;
}

.poidetail-widget-generalInfo .generalInfo-address-telnum {
  background-color: #fff0;
}

#left-panel {
  overflow: visible;
}

.page span.curPage {
  padding: 7px 10px;
  background-color: #5892e3;
  color: #fff;
}

.page a {
  transition: 0.3s;
  border: none;
  padding: 7px 10px;
  text-decoration: none;
  color: #5892e3;
  font-weight: 700;
}

.page a:hover {
  background-color: #5892e3;
  color: #fff;
}

.result_holder {
  background-color: #fff;
}

.nr_know p.nr_pi input {
  padding: 10px;
  border-radius: 5px;
}

.IknownBtn {
  padding: 5px;
  background: #5892e3;
  border-radius: 5px;
}

.strategy-list {
  border: 1px solid #0000;
  color: #666;
  border-radius: 5px;
  overflow: visible;
}

.strategy-item {
  transition: 0.3s;
  border: none;
  background: #f5f7f7;
}

.strategy-item:hover {
  background: #fff;
}

.strategy-item.active {
  color: #fff;
  background: #5892e3;
  border-radius: 5px;
  box-shadow: 0 2px 5px #00000047;
}

.navtrans-navlist-title {
  background: #f4f4f4;
  color: #666;
  line-height: 22px;
  padding: 25px 20px 10px;
}

.navtrans-navlist-list,
.navtrans-navlist-view.active .navtrans-navlist-title,
.route-tool-wrap {
  border: none;
  background: #fff;
  box-shadow: 0 2px 5px #00000047;
}

.navtrans-navlist-list li {
  border-bottom: 1px solid #00000005;
}

#navtrans_content .nav_routes {
  overflow: visible;
}

.route-tool-wrap .afav,
.route-tool-wrap .hasafav {
  padding: 3px;
  border: none;
  color: #5892e3;
  border-radius: 5px;
  box-shadow: 0 1px 3px #0000001f;
}

.mobile-btn-default,
.mobile-btn-has {
  background: #5892e3;
  padding: 3px;
  border-radius: 5px;
  box-shadow: 0 2px 5px #00000047;
}

#user-center.ui3-user-center-wrap .info-box .arrow {
  border-color: transparent transparent #5892e3;
}

.ui3-popup .popup_main .title {
  background: #0000000f;
}
          </style>
        `;
  };

  if (["nuomi.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            .nav-bar-header .nav-list .nav-item .new-item-hot,
.page-body .page-body-right-img,
.widget-common-menu .icon-download {
  display: none !important;
}

.re-mid-content .movie-item:before,
.re-mid-content .movie-item:hover:before,
.re-mid-content .yule-item:before,
.re-mid-content .yule-item:hover:before,
.widget-common-menu .list a {
  transition: 0.3s;
}

a {
  text-decoration: none !important;
}

.search-bar .search-area .searchinput {
  transition: 0.3s;
  background: #fff;
  border-color: #fff0;
  border-radius: 5px 0 0 5px;
  box-shadow: 0 2px 5px #0000001f;
}

.search-bar .search-area .searchinput:hover {
  box-shadow: 0 2px 5px #0000003b;
}

.search-bar .search-area .searchbtn-wrap {
  color: #fff;
  transition: 0.3s;
  border-radius: 0 5px 5px 0;
  background-color: #5892e3;
  border: none;
  box-shadow: 0 2px 5px #0000001f;
}

.search-bar .search-area .searchbtn-wrap:hover {
  background-color: #4879bd;
  box-shadow: 0 2px 5px #0000003b;
}

.p-login
    .body
    .login-area
    .tang-pass-login
    .pass-form-item
    input.pass-text-input {
  transition: 0.3s;
  border: none;
  border-bottom: 2px solid #00000017;
  background-color: #fff;
}

.p-login
    .body
    .login-area
    .tang-pass-login
    .pass-form-item
    input.pass-text-input:focus,
.p-login
    .body
    .login-area
    .tang-pass-login
    .pass-form-item
    input.pass-text-input:hover {
  border-bottom: 2px solid #f69;
  background-color: #fff;
}

.p-login .header {
  z-index: 999;
  border-bottom: none;
  box-shadow: 0 5px 10px #0000003b;
}

.p-login .body .login-area {
  border: none;
  box-shadow: 0 2px 5px #0000003b;
}

.search-bar .utils {
  border: none;
  background-color: #fff8eb;
  border-radius: 5px;
}
          </style>
        `;
  };

  if (["pan.baidu.com", "yun.baidu.com", "duanxin.baidu.com", "wenzhang.baidu.com", "tongxunlu.baidu.com", "note.baidu.com", "tonghuajilu.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            .GELdyA,
.JS-user-level.level-0,
.ad-platform-tips,
.find-light-icon,
.init-docs .phone-banner,
.newIcon,
.ts-category__entry--reddot,
.vip-notice,
.vip-privilege,
.yeEDsO {
  display: none !important;
}

a {
  text-decoration: none !important;
}

a:-webkit-any-link {
  color: #09aaff;
}

.header .nav li a:active,
.header .nav li a:hover,
.header .nav li a:link,
.header .nav li a:visited,
.header .tools .tool-list a:link,
.header .tools .tool-list a:visited,
.header .user-tools .username a:link,
.header .user-tools .username a:visited,
.show-btn span,
.show-btn:hover span,
.tag-list-c li em a:link,
.tag-list-c li em a:visited,
.unit-list .mson-unit h4 a:link,
.unit-list .mson-unit h4 a:visited,
.xtJbHcb .CDaavKb,
.xtJbHcb .CDaavKb a,
.xtJbHcb .DIcOFyb .NxuPcOb,
.xtJbHcb .PvsOgyb .GbFyMz,
.xtJbHcb .gOIbzPb,
.xtJbHcb .vyQHNyb .cMEMEF a {
  color: #000;
}

.xtJbHcb .Ebdyswb {
  border-color: #000;
}

.unit-list .unit .mask {
  color: #000 !important;
}

.header .nav li.cur-ch a:active,
.header .nav li.cur-ch a:hover,
.header .nav li.cur-ch a:link,
.header .nav li.cur-ch a:visited,
.header .tools .tool-list a:active,
.header .tools .tool-list a:hover {
  color: #09aaff;
}

.cashier-wrapper-auto-B,
.module-notice,
.safebox-public {
  border: none;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 3px 10px 0 #b9b9b94f;
}

.discovery-main-box .discovery-main table tr td:hover {
  box-shadow: 0 5px 15px #9d9d9d47;
}

.paging a {
  transition: 0.3s;
  background: #fff;
  border: none;
  border-radius: 3px;
  padding: 4px 6px;
  margin: 0 3px;
  box-shadow: 0 2px 4px #a6a6a626;
}

.paging a:hover {
  background: #09aaff;
  color: #fff;
  border: none;
  padding: 4px 6px;
  box-shadow: 0 2px 5px #68686836;
}

.module-header {
  height: 62px;
  background: #fff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);
}

.module-header .rename-logo {
  height: 32px;
  width: 142px;
  margin-left: 20px;
  margin-top: 15px;
  background-image: url(https://pan.baidu.com/box-static/disk-theme/theme/white/img/logo.png?t=1470151327639);
}

.module-header .info .info-i {
  margin: 10px 0;
  border-right: #00000017 1px solid;
  color: #000;
}

.module-header .info a,
.module-header .info a:active,
.module-header .info a:visited {
  color: #000;
}

.module-header .info a:hover {
  color: #0000007a;
}

.module-header .info-i .vip-button {
  background-color: #fff0;
}

.module-header .pulldown .content {
  background: #f6f6f9;
  color: #333;
  border-radius: 5px;
  border: none;
  box-shadow: 0 2px 5px #00000042;
}

.safebox-public .form-list .form-in {
  transition: 0.3s;
  border: none;
  border-bottom: 2px solid #00000012;
}

.safebox-public .form-list .form-in:hover {
  border: none;
  outline: 0;
  border-bottom: 2px solid #09aaff7a;
}

.safebox-public .form-list .form-in:focus {
  border: none;
  outline: 0;
  border-bottom: 2px solid #09aaff;
}

.module-notice {
  margin: 5% 10% 0 10%;
}

.module-notice .category {
  padding: 27px 0 11px 19px;
  background-color: #f1f1f2;
  border: none;
}

#hp-context,
#vers-context {
  padding: 25px;
  background-color: #fff;
  border: none;
  border-top: #09aaff 3px solid;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  -moz-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.23);
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.23);
}

.hp-context-list dt {
  height: 30px;
  color: #09aaff;
  padding: 5px 10px;
  background: #09aaff1f;
  border-radius: 5px;
  border-bottom: none;
}

.hp-context-list dt em {
  color: #00000054;
}

#vers-update-new,
.app-download .app-down-bn a,
.hp-context-list dt em {
  background: 0 0;
}

.cashier-wrapper-auto-B .divide-line,
.cashier-wrapper-auto-B .product-type .li-svip {
  border: none;
}

.cashier-wrapper-auto-B .product-type .li-active {
  border-radius: 5px 5px 0 0;
}

.cashier-wrapper-auto-B {
  overflow: hidden;
}

.cashier-wrapper-auto-B .privilege-more {
  transition: 0.3s;
  border-radius: 100px;
}

.info-vip-B .info-product-vip .product-list .item .item-link {
  border: none;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 7px #0000000f;
}

.info-vip-B .info-product-vip .product-list .item-link-active {
  box-shadow: 0 2px 10px #00000036;
}

.info-vip-B .info-product-vip .product-list .item-link-active,
.info-vip-B .info-product-vip .product-list .item-link-active .item-link {
  background: #09aaff;
  border: none;
  border-radius: 5px;
}

.info-vip-B .info-product-vip .product-list .item .item-link label {
  transition: 0.3s;
  background: #0000000d;
}

.info-vip-B .info-product-vip .product-list .item .item-link:hover label {
  background-color: #0000000a;
}

.info-vip-B .info-product-vip .product-list .item-link-active label {
  color: #fff !important;
  background: #ffffff17 !important;
}

.info-vip-B .info-product-vip .product-list .item-link-active .active-icon {
  display: none;
}

.info-vip-B .info-product-vip .item-link-active .detail .average-line,
.info-vip-B .info-product-vip .item-link-active .detail .detail-row,
.info-vip-B .info-product-vip .item-link-active .detail .detail-row-cheap,
.info-vip-B .info-product-vip .item-link-active .detail .detail-row-origin,
.info-vip-B .info-product-vip .item-link-active .detail .detail-row-price {
  transition: 0.3s;
  color: #fff !important;
}

.info-vip-B .item-link-active .discount-icon-default {
  transition: 0.3s;
  background: #fff0;
  top: 0;
}

.autorenew-checkbox {
  background-color: #fff0;
  color: #000;
}

.hd-feed .feed-issue,
.hd-feed .personal-information {
  background-color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 3px 10px 0 #b9b9b94f;
}

.hd-feed .feed-issue-item {
  transition: 0.3s;
  border-left: 1px solid #ff00;
}

.hd-feed .feed-issue-item span {
  top: 0 !important;
}

.hd-feed .feed-issue-item:hover {
  background: #f4f4f4;
}

.hd-feed .on,
.hd-feed .on span,
.hd-feed .view-method:hover,
.hd-feed a.on {
  color: #09aaff;
  border-bottom: 3px solid #09aaff;
}

.hd-feed .view-method-ct li {
  padding: 10px;
}

.hd-feed .view-method-ct .view-method {
  padding: 10px;
}

.feed-content {
  margin: 2% auto 0 auto;
}

.feed-content .feed-top-link {
  display: none;
}

.feed-panel li.feed-dynamic-item {
  overflow: hidden;
  margin-top: 0;
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.feed-panel li.feed-dynamic-item:hover {
  box-shadow: 0 0 2px gray !important;
  background: #f3f3f3 !important;
}

.feed-dynamic-header {
  margin: 15px 25px;
}

.file-item.zip {
  padding: 2px 0;
}

.three-pic .img {
  border: none;
}

.feed-dynamic-footer .btn {
  border-left: none;
  padding: 0 10px;
}

.feed-dynamic-footer {
  border-top: none;
  background: #f9f9f9;
}

.feed-page .paging {
  margin: 2% 36% 6%;
}

.paging span {
  border: none;
  height: 22px;
  width: 50px;
  padding: 4px 1px;
}

.paging .page-input {
  transition: 0.3s;
  background: #fff;
  border: none;
  border-radius: 3px;
  padding: 2px 2px;
  margin: 0 3px;
  box-shadow: 0 2px 4px #a6a6a626;
  text-align: center;
  outline: 0;
}

.module-header-wrapper .xtJbHcb .EHazOI {
  background: url(https://pan.baidu.com/box-static/disk-theme/theme/white/img/logo.png?t=1470151327639);
}

.btn-dialog-b,
.btn-dialog-g,
.btn-left,
.btn-normal,
.btn-pair-l,
.btn-pair-r,
.btn-right,
.module-header .module-header-wrapper {
  background: #fff;
}

.list-operate .msg-box,
.list-operate .page-box {
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 4px #a6a6a626;
}

.btn_down .btn-left,
.btn_down .btn-pair-l,
.btn_down .btn-pair-l .btn-right {
  background: #09aaff;
}

.btn-pair-l .btn-right {
  border-right: #00000008 1px solid;
}

.list-operate {
  border: none;
  height: 55px;
}

.list-header {
  background: #f7f7f7;
  z-index: 999;
  border-bottom: none;
  box-shadow: 0 2px 4px #a6a6a626;
}

.list-container,
.list-container li {
  transition: 0.3s;
  padding: 0;
}

.list-container .date-line {
  padding: 0 10px;
  background: #f2f2f2;
  border-bottom: none;
  text-align: left;
  cursor: pointer;
}

.list-container .msg-li {
  border-bottom: none;
  padding: 5px 10px;
}

.list-container .on {
  background-color: #f2f2f2;
}

.aside {
  border-right: none;
}

.header .logo a {
  width: 142px;
  height: 32px;
  background: url(https://pan.baidu.com/box-static/disk-theme/theme/white/img/logo.png?t=1470151327639);
}

.header {
  height: 62px;
  background: #fff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);
}

.header .logo {
  padding: 0;
  margin: 15px 0 0 20px;
  background-color: #fff0;
}

.cur-ch {
  background: #00000008;
}

.header .nav li a,
.header .nav li.cur-ch a {
  height: 56px;
  padding-top: 6px;
}

.header .tools {
  height: 56px;
  top: 6px;
}

.header .show-user-tools .user-tools,
.header .tools .tool-list {
  background-color: #fff;
}

.header .tools .tool-list {
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);
}

.header .tool-list .link {
  border-top: 1px solid #0000000a;
  zoom: 1;
}

.header .tool-list .link a {
  border: none;
}

.unit-list .unit .mask {
  transition: 0.3s !important;
  background-color: #00000026;
}

.unit-list .mson-unit {
  transition: 0.3s;
  box-shadow: 0 2px 3px 0 #00000024;
}

.show-btn {
  background-color: #fff;
  border-radius: 0 5px 5px 0;
  box-shadow: 0 2px 3px 0 #00000024;
}

.tag-list-nav {
  background-color: rgba(255, 255, 255, 0.7);
  color: #0009;
}

.tag-list-c li.sel {
  background-color: #09aaff;
  border-radius: 0 100px 100px 0;
}

.tag-list-c li {
  position: relative;
  padding: 10px 12px 10px 20px;
  margin: 0 0 5px;
  white-space: nowrap;
  text-align: right;
}

.tag-list-c li span {
  position: absolute;
  right: 15px;
  top: 10px;
}

.tag-list-c li.sel span {
  color: #eee;
}

.dailogBox {
  box-shadow: 0 10px 30px #00000045;
}

.list-content .list-item .list-table-wrap {
  margin: 0;
  padding: 2px 15px;
  height: 37px;
  overflow: hidden;
  border-bottom: solid 1px #00000008;
}

.list-content .list-item {
  height: 42px;
}

.btn-blue .btn-right {
  color: #09aaff;
}

.metro-box .checked,
.metro-box .hover {
  transition: 0.3s;
  border: #09aaff 3px solid;
  padding: 3px;
  box-shadow: 0 2px 7px #0000002b;
}

.metro-box .data-delete {
  opacity: 0.7;
  background-color: #0000007d;
  padding: 0 10px;
}

#bd-main {
  border: 0;
  box-shadow: 0 3px 10px 0 #b9b9b94f;
}

.bd-aside {
  top: 0;
  right: 0;
  background: #f9f9f9;
}

.dialog .dialog-header,
.dialog .dialog-min-header {
  background-color: #fff;
  border-bottom: 1px solid #fff0;
  box-shadow: 0 3px 10px 0 #b9b9b94f;
}

.unzip-no-intro-tips .unzip-vip-intro-btn,
.unzip-svip-intro-tips .unzip-vip-intro-btn,
.unzip-vip-intro-tips .unzip-vip-intro-btn {
  transition: 0.3s;
  background: #efcb85;
  border-radius: 4px;
  font-size: 18px;
  color: #fff;
}

.unzip-no-intro-tips .unzip-vip-intro-btn:hover,
.unzip-svip-intro-tips .unzip-vip-intro-btn:hover,
.unzip-vip-intro-tips .unzip-vip-intro-btn:hover {
  background: #d9b879;
  border-radius: 4px;
  font-size: 18px;
  color: #fff;
  box-shadow: 0 3px 10px 0 #efcb85;
}

.dialog .dialog-control .icon {
  transition: 0.3s;
  border-radius: 50%;
  background: #0000;
}

.dialog .dialog-control .icon:hover {
  background: #00000017;
}

.main-section .module-content-all,
.main-section .module-sectionLists {
  border: 0;
  box-shadow: 0 3px 10px 0 #b9b9b94f;
}

.module-sectionLists .sectionLists-btn-area {
  background: 0 0;
}

.ts-header {
  background: #fff !important;
}

a.ts-logo {
  position: relative;
  right: 3%;
  padding: 1.9%;
  background: #5883ff;
}

.ts-search__keyword {
  border: 1px solid #dfdfdf !important;
  color: #000 !important;
}

.ts-header .ts-search {
  font-size: 14px !important;
  line-height: 34px !important;
  position: relative !important;
}

.ts-header .ts-search .el-button--search {
  height: 34px !important;
}

.ts-user__name {
  color: #000 !important;
  padding: 0 3px 0 3px !important;
}

.ts-user__box--triangle {
  border-bottom: 10px solid #fff !important;
}

.ts-user__box li {
  background: #fff !important;
}

.ts-category__entry:hover,
.ts-user__box li:hover {
  background: #f7f7f7 !important;
}

.ts-category__entry,
.ts-user__box li a {
  transition: 0.3s !important;
  color: #626262 !important;
}

.ts-user__active .ts-user__box {
  box-shadow: 0 3px 10px 0 #6666664f !important;
}

.ts-footer {
  background: #fff !important;
  color: #959595 !important;
  width: 100% !important;
  padding: 44px 0 !important;
  overflow: hidden !important;
}

.ts-foot__content a[data-v-1796f16a]:hover {
  color: #000 !important;
}

#loginBtn,
#savePageBtn,
#savePicBtn,
#saveResBtn,
#saveTextBtn {
  transition: 0.3s;
}

.text-input {
  background-color: #fff0;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 5px #00000040;
  font-family: "微软雅黑", Tahoma;
}

.selectPicActivity .selectList .picItem {
  transition: 0.3s;
  width: 180px;
  height: 175px;
  overflow: hidden;
  border-radius: 5px;
  margin: 0 25px 20px 0;
  box-shadow: 0 2px 8px #0000002e;
}

.selectPicActivity .selectList .mson {
  box-shadow: 0 3px 10px #00000054;
}

.selectPicActivity .selectList .title {
  transition: 0.3s;
  width: 100%;
  height: 25px;
  line-height: 25px;
  color: #fff;
  text-align: center;
}

.selectPicActivity .selectList .checked .mask,
.selectPicActivity .selectList .mson .mask {
  display: none;
}

.selectPicActivity .selectList .checked .title,
.selectPicActivity .selectList .mson .title {
  display: block;
  height: 100%;
  line-height: 300px;
  color: #fff0;
}

.selectPicActivity .selectList .picItem-c {
  transition: 0.3s;
  filter: blur(0);
}

.selectPicActivity .selectList .mson .picItem-c {
  filter: blur(3px);
}

.selectPicActivity .tips {
  font-size: 15px;
  line-height: 28px;
  text-align: center;
  color: #fdf5f5;
  height: 28px;
  width: 268px;
  margin-top: 5px;
  border-radius: 100px;
  border: 1px solid #f4a9a347;
  background-color: #ea5449bd;
  position: absolute;
  left: 40%;
  z-index: 10;
  box-shadow: 0 1px 5px #ea544999;
}

.BNfIyPb .JKvHJMb .cEefyz,
.DxdbeCb .OFaPaO .oclLlDK,
.cashier-wrapper-auto-B .product-type,
.cashier-wrapper-auto-B .product-type li,
.discovery-main-box .discovery-main table tr td,
.discovery-main-box .discovery-main table tr td .dis-item,
.feed-expert-item .img,
.feed-hot-item .img,
.get-three-choose-one-container .get-three-choose-one .button,
.hd-feed .share-cnt a,
.metro-box .outline,
.module-header .info a,
.module-header-wrapper .xtJbHcb .CDaavKb .KQcHyA,
.mson-unit .mask,
.sbtn,
.single-pic .img,
.single-video .img,
.three-pic .img,
.ts-audio__active[data-v-11341872],
.ts-footer[data-v-2a8d5740],
.ts-search__keyword[data-v-f746770a],
.ts-search__keyword[data-v-f746770a]:focus,
.ts-tag__list a[data-v-6e19ad33],
.ts-user__box li[data-v-f746770a],
.two-pic .img,
.two-video .img,
.unit-list .mson-unit,
.unit-list .unit .mask {
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.module-aside .fOHAbxb a {
  -webkit-transition: all 0.8s ease;
  transition: all 0.8s ease;
  position: relative;
  overflow: hidden;
}

.module-aside .fOHAbxb a:active {
  background-color: #0059ff1a;
  opacity: 0.9;
  transition: transform 5s, opacity 5s;
}

.module-aside .fOHAbxb a:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: radial-gradient(
      circle,
      #0000007a 10%,
      transparent 10.01%
    );
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition: transform 0.4s, opacity 0.6s;
}

.module-aside .fOHAbxb a:active:after,
dd.g-clearfix.AuPKyz.open-enable:active:after {
  transform: scale(0, 0);
  opacity: 0.3;
  transition: 0s;
}

.DxdbeCb .OFaPaO .oclLlDK:hover {
  border: 1px solid #e8e8e8;
  box-shadow: 0 3px 10px 0 #dddddd4f;
}

.ts-footer[data-v-2a8d5740] {
  overflow: hidden;
  filter: blur(5px);
}

.ts-footer[data-v-2a8d5740]:hover {
  filter: blur(0);
}

.DxdbeCb .OFaPaO .bclyoDz {
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  opacity: 0;
}

.aside-absolute-container > div:nth-child(3),
.ts-user__box--arrow {
  position: relative;
  bottom: 20px;
  -webkit-transition: all 0.8s ease;
  transition: all 0.8s ease;
  opacity: 0;
}

.DxdbeCb .OFaPaO .bclyoDz:hover,
.aside-absolute-container > div:nth-child(3):hover,
.ts-user__box--arrow.is-active {
  opacity: 1;
  bottom: 0;
}
          </style>
        `;
  };

  if (["fanyi.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            .app-guide,
.collection-btn.new-edition-tip:after,
.icon-new,
.setting-btn.new-edition-tip:after,
.simultaneous-interpretation .icon-hotlk,
.trans-machine .icon-hotlk {
  display: none !important;
}

#collection-header-container #manage-block #cacel-select:hover,
#collection-header-container #manage-block #delete:hover,
#collection-header-container #manage-block #move:hover,
#collection-header-container #manage-block #select-all:hover,
#collection-header-container #manage-btn #cacel-select:hover,
#collection-header-container #manage-btn #delete:hover,
#collection-header-container #manage-btn #move:hover,
#collection-header-container #manage-btn #select-all:hover,
#collection-header-container #manage-btn:hover,
#collection-header-container .btn-common:hover,
#side-nav .nav-item.active:after,
.hover-tips-wrap .tips-content {
  background-color: #5892e3;
}

#collection-header-container .selected-item,
#side-nav .nav-item.active span,
.dictionary-wrap .dictionary-exchange span a,
.f-link,
.trans-operation .trans-btn-zh {
  color: #5892e3;
}

#collection-header-container .select-item,
#collection-left-bar-container .all-group-container .coll-group a,
#collection-left-bar-container .all-group-container .coll-group.selected a,
#collection-left-bar-container .all-group-container .coll-group:hover a,
#collection-page-container,
.download-guide-ul .guide-list,
.manual-trans-info .list-name,
.simultaneous-interpretation,
.sug-wrap .sug-item,
.sug-wrap .sug-item.sug-item-selected,
.trans-machine,
span.tips-content {
  transition: 0.3s;
}

a {
  text-decoration: none !important;
}

#collection-header-container #manage-block #cacel-select,
#collection-header-container #manage-block #delete,
#collection-header-container #manage-block #move,
#collection-header-container #manage-block #select-all,
#collection-header-container #manage-btn,
#collection-header-container #manage-btn #cacel-select,
#collection-header-container #manage-btn #delete,
#collection-header-container #manage-btn #move,
#collection-header-container #manage-btn #select-all,
#collection-header-container .btn-common,
#collection-header-container .select-content,
#collection-header-container .select.select-with-box .select-title,
#collection-left-bar-container,
#message-area
    .create-edit-group-box
    .edit-gourp-block
    .right-block
    .group-name-input,
#message-area .default-group-box .default-select-line .default-select,
#message-area .export-box .tab-container-group .group-select,
#overlay-bg .overlay-box-common #message-area .common-btn,
#overlay-bg .overlay-box-common #message-area .common-cancle-btn,
#overlay-bg .overlay-box-common #message-area .common-confirm-btn,
#overlay-bg .overlay-box-common #message-area .common-right-btn,
#side-nav .nav-ol .nav-search-again,
#side-nav .nav-ol .nav-sort-btn,
.download-guide-ul .guide-list:hover,
.history-container,
.manual-trans-btn,
.manual-trans-info .list-name:hover,
.select-from-language,
.select-to-language,
.simultaneous-interpretation:hover,
.trans-machine:hover,
.trans-operation .trans-btn-zh {
  transition: 0.3s;
  border-color: #fff0;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 #00000017;
}

#overlay-bg .overlay-box-common #message-area .common-confirm-btn,
.tang-pass-pop-login .pass-button,
a.common-btn.default-confirm-btn:hover {
  background-color: #5892e3 !important;
  color: #fff;
}

#collection-content-container .card,
#collection-page-container .collection-fixed-ele-container,
#overlay-bg .overlay-box-common,
#overlay-bg .overlay-box-common header,
.account-panel,
.app-contain,
.dictionary-wrap.dictionary-wrap-f .simple-dict-f,
.manual-trans-info .list-container,
.ordinary-wrap,
.plugin-contain,
.setting-options,
.trans-input-wrap,
section.result-section {
  transition: 0.3s;
  border-color: #fff0;
  border-radius: 5px;
  box-shadow: 0 3px 10px 0 #b9b9b94f;
}

#collection-content-container .card:hover,
.ordinary-wrap:hover,
.trans-input-wrap-focus,
.trans-input-wrap:hover {
  border-color: #fff0;
  box-shadow: 0 3px 10px 0 #0000003b;
}

.sug-wrap {
  left: 0;
  border: none;
  box-shadow: 0 3px 10px 0 #b9b9b94f;
  background-color: #f4f4f4;
}

.sug-wrap .sug-item.sug-item-selected {
  background-color: #eee;
}

.trans-left {
  width: 49%;
}

.output-blank {
  border: 2px solid #fff0;
  background-color: #f0f0f0;
}

.sug-wrap .sug-item {
  height: 30px;
  background: 0 0;
}

#side-nav .nav-ol .nav-sort-btn {
  margin-bottom: 10px;
}

section.result-section {
  background: #fff;
  padding: 0 15px 15px 15px;
}

#side-nav {
  top: 40px;
}

#collection-page-container .collection-fixed-ele-container {
  margin: 20px auto;
  background: #fbfbfb;
}

#collection-title-container {
  background-color: #fff0;
}

#collection-header-container {
  margin-right: 0;
}

#message-area
    .create-edit-group-box
    .edit-gourp-block
    .right-block
    .group-name-input {
  padding: 2px 10px;
}

#collection-left-bar-container .all-group-container .coll-group a {
  padding: 5px 8px 5px 26px;
}

#collection-left-bar-container .all-group-container .coll-group {
  height: 40px;
}

#collection-left-bar-container .all-group-container .coll-group a,
#collection-left-bar-container .all-group-container .coll-group.init-group a {
  background-position: 5px 11px;
}

#message-area .export-box .type-select {
  background-color: #eee;
  -webkit-box-shadow: -20px 0 0 #eee, 0 0 0, 0 0 0, 20px 0 0 #eee;
  -moz-box-shadow: -20px 0 0 #eee, 0 0 0, 0 0 0, 20px 0 0 #eee;
  box-shadow: -20px 0 0 #eee, 0 0 0, 0 0 0, 20px 0 0 #eee;
}

.tang-pass-pop-login .pass-text-input {
  border: none;
  border-bottom: 2px solid #00000012;
  transition: 0.3s;
}

.tang-pass-pop-login .pass-text-input {
  border: none;
  border-bottom: 2px solid #00000012;
  transition: 0.3s;
}

.pass-text-input.pass-text-input-password.pass-text-input-focus,
.pass-text-input.pass-text-input-userName.open.pass-text-input-focus {
  border-bottom: 2px solid #5892e3;
}

.trans-operation .trans-btn-zh:after {
  transition: 0.3s;
  content: "翻译";
  color: #5892e3;
}

.trans-operation .trans-btn-zh:hover:after {
  transition: 0.3s;
  content: "翻译";
  color: #fff;
}
          </style>
        `;
  };

  if (["xueshu.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            .rs_banner {
  display: none !important;
}

#navcard_wrapper .navlist_content .navitem,
#platform_menu .menuitem,
.sc_default_result .sc_other a {
  transition: 0.3s;
}

#dtl_l .c_content a:hover,
#dtl_l .relative_content a:hover,
#dtl_l h3 a:hover,
a,
a:hover {
  text-decoration: none !important;
}

#fm .s_ipt_wr,
#leftnav #kw {
  transition: 0.3s;
  background: #fff;
  padding: 1px;
  border: none !important;
  border-radius: 5px 0 0 5px;
  box-shadow: 0 2px 5px #0000001f;
}

#fm .s_ipt_wr:hover {
  box-shadow: 0 2px 5px #0000003b;
}

.s_btn {
  color: #fff;
  transition: 0.3s;
  border-radius: 0 5px 5px 0;
  font-size: 10px;
  background: #5892e3;
  border: none;
  box-shadow: 0 2px 5px #0000001f;
}

.s_btn:hover {
  border: none;
  background: #4879bd !important;
  box-shadow: 0 2px 5px #0000003b;
}

select {
  transition: 0.3s;
  background: #000;
  padding: 5px;
  border: none !important;
  box-shadow: 0 2px 5px #0000001f;
}

#gxszButton .prefpanelgo,
#xs-subscription .create-btn,
.fb-btn-primary {
  color: #fff;
  transition: 0.3s;
  background: #5892e3;
  border: none;
  box-shadow: 0 2px 5px #0000001f;
}

#content_left .result,
#dtl_l .relative_content li,
div#leftnav {
  padding: 20px 20px 15px;
  margin-top: 0;
  margin-bottom: 20px;
  border-radius: 0;
  background-color: #fff;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

#content_left .result:hover,
#dtl_l .relative_content li:hover {
  box-shadow: 0 0 2px gray !important;
  background: #f3f3f3 !important;
}

#navcard_wrapper .navlist_content .navitem {
  padding: 10px;
}

#head_wr.gj #head.gj {
  background-color: #65808e;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

#left_menu_content.gj .left_menu_logo {
  background: #65808e;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

#head_wr.gj #head.gj .s_logo .s_logo_img {
  transition: 0.3s;
  opacity: 0.7;
}

#head_wr.gj #head.gj .s_logo .s_logo_img:hover {
  opacity: 1;
}

.s_ipt {
  transition: 0.3s;
  background: #fff0;
  color: #000000d1;
}

#head.gj .s_ipt_wr.gj {
  transition: 0.3s;
  background: #ffffff80;
  border-radius: 5px;
}

#head.gj .s_ipt_wr.gj:hover {
  transition: 0.3s;
  background: #ffffffc4;
}

#head.gj .s_ipt_wr.gj:hover .s_ipt {
  color: #999;
}

#left_menu_content.gj .main_menu_wr .menu_listitem {
  -webkit-transition: all 0.1s 0.3s;
  -moz-transition: all 0.1s 0.3s;
  -ms-transition: all 0.1s 0.3s;
  transition: all 0.1s 0.3s;
  height: 40px;
}

#left_menu_content.gj .main_menu_wr .menu_listitem a {
  line-height: 40px;
  height: 40px;
  -webkit-transition: all 0.1s;
  -moz-transition: all 0.1s;
  -ms-transition: all 0.1s;
  transition: all 0.1s;
}

#leftnav {
  position: relative;
  left: -20px;
  margin: 0 10px 0 0;
}

.batch-container .batch-btn-wr {
  position: fixed;
  right: 28px;
  bottom: 28px;
}

.batch-container .batch-btn-wr .batch-btn span {
  background: #00000029;
}

#dtl_l .rel_title {
  margin-top: 0;
}

#leftnav .s_btn {
  top: 2px;
  left: auto;
  right: -25px;
  position: absolute;
  outline: 0;
}
          </style>
        `;
  };

  if (["bce.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            。 {
  display: none !important;
}

#main-sidebar .collapse-nav,
#main-sidebar .custom-nav,
#main-sidebar .service-group-list .service-group-item,
#main-sidebar .service-group-list .service-group-item .icon-all-services,
#main-sidebar .service-group-list .service-group-item .icon-arrow-right,
#main-sidebar .service-list .iconfont,
#main-sidebar .service-list .search-section .recent-service-group a,
#main-sidebar .service-list .search-section .search-input-area input,
#main-sidebar .service-list .sub-nav-section a,
#main-sidebar .sidebar-item > a,
#main-sidebar .sidebar-item > a > i.iconfont {
  color: #000;
}

#bce-content .header .agent-nav,
#bce-content .header .billing-nav,
#bce-content .header .doc-nav,
#bce-content .header .flags-nav,
#bce-content .header .msg-nav,
#bce-content .header .organization-nav,
#bce-content .header .ticket-nav,
#main-sidebar .service-group-list .service-group-item,
#main-sidebar .service-list .sub-nav-section li .iconfont,
#main-sidebar .service-list .sub-nav-section li:hover .iconfont,
#main-sidebar .service-list .sub-nav-section-of-group li,
a {
  transition: 0.3s;
}

.create-content,
.iam-user-v3-view-overview .pro-wrap,
.index-v2-overview .charts .x-consumption-distribution,
.index-v2-overview .charts .x-consumption-trend,
.index-v2-overview .products .x-actived-prodcuts,
.index-v2-overview .products .x-qr-promotion,
.index-v2-overview .products .x-recommended-prodcuts,
.index-v2-overview .securties,
.index-v2-overview .x-block,
.list-content {
  transition: 0.3s;
  box-shadow: 0 5px 20px #0000001c;
}

.create-content:hover,
.iam-user-v3-view-overview .pro-wrap:hover,
.index-v2-overview .charts .x-consumption-distribution:hover,
.index-v2-overview .charts .x-consumption-trend:hover,
.index-v2-overview .products .x-actived-prodcuts:hover,
.index-v2-overview .products .x-qr-promotion:hover,
.index-v2-overview .products .x-recommended-prodcuts:hover,
.index-v2-overview .securties:hover,
.index-v2-overview .x-block:hover,
.list-content:hover {
  background-color: #fdfdfd;
  box-shadow: 0 2px 5px #00000026;
}

.iam-user-v3-view-overview .middle {
  overflow: visible;
}

#main-sidebar,
#main-sidebar .collapse-nav,
#main-sidebar .custom-nav {
  background: #fff;
}

#main-sidebar .logo {
  background: #0000000a;
}

#main-sidebar .logo svg {
  fill: #108cee;
}

#main-sidebar {
  box-shadow: 0 5px 15px #0000002e;
  -ms-transition: width 0.3s;
  -o-transition: width 0.3s;
  -moz-transition: width 0.3s;
  -webkit-transition: width 0.3s;
  transition: width 0.3s;
}

#main-sidebar .custom-nav {
  border: none;
}

#main-sidebar .service-group-list .service-group-item.hover,
#main-sidebar .service-group-list .service-group-item:hover,
#main-sidebar .service-list .search-section .search-input-area,
#main-sidebar .service-list .sub-nav-section-of-group li:hover,
#main-sidebar .sidebar-item > a:hover {
  background-color: #00000012;
}

#main-sidebar .sidebar-divider {
  background-color: #00000014;
}

#main-sidebar .service-group-list .service_group_list_wrap {
  border-right: none;
}

#main-sidebar .service-group-list {
  background-color: rgba(255, 255, 255, 0.9);
  -ms-transition: width 0.25s;
  -o-transition: width 0.25s;
  -moz-transition: width 0.25s;
  -webkit-transition: width 0.25s;
  transition: width 0.25s;
}

#main-sidebar .service-list {
  background-color: rgba(255, 255, 255, 0.9);
  -ms-transition: max-width 0.25s;
  -o-transition: max-width 0.25s;
  -moz-transition: max-width 0.25s;
  -webkit-transition: max-width 0.25s;
  transition: max-width 0.25s;
  box-shadow: 0 5px 15px #0000002e;
}

#main-sidebar .service-list .search-section .search-input-area:hover::before {
  color: #1d99fa;
}

.iam-user-v3-view-overview .contact-panel {
  margin-top: 40px;
}
          </style>
        `;
  };

  if (["video.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            #nav li a img,
.back-to-top .bt-bottom,
.back-to-top .bt-mobile {
  display: none !important;
}

.sc2-nav .sc2-nav-active {
  background-color: #5892e3;
}

#bce-content .header .agent-nav,
#bce-content .header .billing-nav,
#bce-content .header .doc-nav,
#bce-content .header .flags-nav,
#bce-content .header .msg-nav,
#bce-content .header .organization-nav,
#bce-content .header .ticket-nav,
#main-sidebar .service-group-list .service-group-item,
#main-sidebar .service-list .sub-nav-section li .iconfont,
#main-sidebar .service-list .sub-nav-section li:hover .iconfont,
#main-sidebar .service-list .sub-nav-section-of-group li,
a {
  transition: 0.3s;
}

a {
  text-decoration: none !important;
}

#new-header-wrap
    #new-header
    .hd-inner-new
    .hd-inner-search
    .hd-inner-search-content
    #new-bdvSearch-content
    .bdvSearch-right
    #new-bdvSearch
    .bdv-search-inputs
    #new-bdvSearchInput {
  margin: 5px 0 0 5px;
}

#new-header-wrap
    #new-header
    .hd-inner-new
    .hd-inner-search
    .hd-inner-search-content
    #new-bdvSearch-content
    .bdvSearch-right
    #new-bdvSearch
    .bdv-search-inputs {
  transition: 0.3s;
  height: 35px;
  background: #fff;
  border: none !important;
  border-radius: 5px 0 0 5px;
  box-shadow: 0 2px 5px #0000001f;
}

#new-header-wrap
    #new-header
    .hd-inner-new
    .hd-inner-search
    .hd-inner-search-content
    #new-bdvSearch-content
    .bdvSearch-right
    #new-bdvSearch
    .bdv-search-inputs:hover {
  box-shadow: 0 2px 5px #0000003b;
  border-color: #fff0 !important;
}

#new-header-wrap
    #new-header
    .hd-inner-new
    .hd-inner-search
    .hd-inner-search-content
    #new-bdvSearch-content
    .bdvSearch-right
    #new-bdvSearch
    .bdv-search-btns {
  height: 35px;
  background-color: #fff0;
}

#new-header-wrap
    #new-header
    .hd-inner-new
    .hd-inner-search
    .hd-inner-search-content
    #new-bdvSearch-content
    .bdvSearch-right
    #new-bdvSearch
    .bdv-search-btns
    #new-bdvSearchBtn {
  color: #fff;
  transition: 0.3s;
  height: 35px;
  border-radius: 0 5px 5px 0;
  font-size: 10px;
  background: #5892e3;
  border: none;
  box-shadow: 0 2px 5px #0000001f;
}

#new-header-wrap
    #new-header
    .hd-inner-new
    .hd-inner-search
    .hd-inner-search-content
    #new-bdvSearch-content
    .bdvSearch-right
    #new-bdvSearch
    .bdv-search-btns
    #new-bdvSearchBtn:hover {
  background: #4879bd;
  box-shadow: 0 2px 5px #0000003b;
}

.sc2-main .sc2-main-ul {
  overflow: visible;
}

.sc2-rec {
  z-index: -1;
}

.sc2-feed {
  padding: 0 0 0 10px;
  margin-bottom: 10px;
  border-radius: 0;
  background-color: #fff;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1) 0s;
}

.sc2-feed:hover {
  box-shadow: 0 0 2px gray !important;
  background: #f3f3f3 !important;
}

#navmini .link-toggle {
  transition: 0.3s;
  border: none;
  border-radius: 5px;
  background: #ebebeb;
}

#navmini .link-toggle:hover {
  border: none;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 2px 5px #0000001f;
}

#navmini .bd {
  border: none;
  border-radius: 5px;
  padding: 15px 10px 12px;
  background: #fff;
  box-shadow: 0 2px 5px #0000001f;
}

.back-to-top .bt-btn-top {
  transition: 0.3s;
  opacity: 0.8;
  border-radius: 3px;
  background-color: #5892e3;
  box-shadow: 0 2px 5px #0000001f;
}

.back-to-top .bt-btn-top:hover {
  opacity: 1;
  border-radius: 3px;
  background-color: #4879bd;
  box-shadow: 0 2px 5px #0000003b;
}

.sc2-more-tip {
  border-radius: 10px 10px 0 0;
  background: #fff;
  box-shadow: 0 0 15px #0000003b;
}

#nav li a,
.sc2-more-btn {
  color: #000;
  opacity: 1;
}

.sc2-more-close {
  background: #0000006b;
}

#nav {
  background: #fff;
  box-shadow: 0 0 10px #00000021;
}

#nav .nav-inner {
  background: #fff;
}

#nav .btn_more_hover {
  background-color: #0000000a;
}

#nav .box_more_items {
  background-color: #fff;
  box-shadow: 0 2px 5px #0000001f;
}

.bdv-suggestion .bdv-suggestion-inner {
  border: none;
  background: #fff;
}

.bdv-v2-suggestion {
  box-shadow: 0 2px 5px #0000001f;
}

#nav .box_more_items li a span {
  color: #000;
}

.bdv-record-content {
  border: none;
  border-radius: 5px;
  background: #fff;
  color: #a7a9ac;
  box-shadow: 0 2px 5px #0000001f;
}
          </style>
        `;
  };

  if (["news.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            .mod-sidebar .favorite,
.mod-sidebar .feedback,
.mod-sidebar .qr-code,
.mod-sidebar .report,
.mod-sidebar .search {
  display: none !important;
}

.carousel-control a:hover .icon-wrap::after,
.carousel-control a:hover .icon-wrap::before,
.mod-navbar .lavalamp-object,
.mod-navbar .menu-list .current a {
  background-color: #5892e3;
}

.column-title-home .column-title-border h2,
.column-title-home .column-title-border h2 a,
.column-title-home .column-title-border h2 a:active,
.column-title-home .column-title-border h2 a:hover,
.column-title-home .column-title-border h2 a:link,
.column-title-home .column-title-border h2 a:visited,
.mod .hd h3,
.mod-baijia .column-title-home .column-title-border .column-title,
.mod-headline-tab ul li.active a,
.ulist li a:hover,
a:hover {
  color: #5892e3;
}

.mod-headline-tab ul li.active {
  border-color: #5892e3;
}

a {
  transition: 0.3s;
}

a {
  text-decoration: none !important;
}

table.sbox .s_ipt_wr {
  transition: 0.3s;
  height: 35px;
  background: #fff;
  border: none !important;
  border-radius: 5px 0 0 5px;
  box-shadow: 0 2px 5px #0000001f;
}

table.sbox .s_ipt_wr:hover {
  box-shadow: 0 2px 5px #0000003b;
  border-color: #fff0 !important;
}

table.sbox .btn {
  color: #fff;
  transition: 0.3s;
  height: 35px;
  border-radius: 0 5px 5px 0;
  font-size: 10px;
  background: #5892e3;
  border: none !important;
  box-shadow: 0 2px 5px #0000001f;
}

table.sbox .btn:hover {
  background: #4879bd;
  box-shadow: 0 2px 5px #0000003b;
}

table.sbox .s_btn_wr {
  background: #fff0 !important;
}

#sd_1573976399492 {
  box-shadow: 0 2px 5px #00000036;
  border: none;
}

.mod-navbar {
  transition: 0.3s;
  background-color: #f0f0f0ed;
}

.mod-navbar:hover {
  background-color: #f0f0f0;
}

.mod-navbar a:hover,
.mod-navbar a:link,
.mod-navbar a:visited {
  color: #000;
}

.mod-navbar .menu-list .current a {
  color: #fff;
}

#imgplayer,
.imgview,
.imgview img {
  overflow: hidden;
  border-radius: 8px;
}

.hotwords li {
  overflow: hidden;
  border-radius: 5px;
}

.select-btn {
  padding: 2px 20px 2px 10px;
  background: url(https://gss0.bdstatic.com/5foIcy0a2gI2n2jgoY3K/static/fisp_static/news/img/arrow-down_88161d2.png)
      64px 9px no-repeat;
  border-radius: 10px;
  background-color: #5892e3;
  border-right: none;
  text-decoration: none !important;
}
          </style>
        `;
  };

  if (["baijiahao.baidu.com", "mbd.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            。 {
  display: none !important;
}

.s-user-set-menu a:hover {
  background-color: #5892e3;
}

。 {
  color: #5892e3;
}

a {
  transition: 0.3s;
}

a {
  text-decoration: none !important;
}

.content-container {
  background-color: #eee;
  overflow-x: visible;
}

.item-content {
  transition: 0.3s;
  padding: 5px 0;
  margin: 15px 0;
}

.item-content:hover {
  border-radius: 5px;
  border-color: #fff0;
  background: #0000001a;
}

.item-content .news-pic img {
  transition: 0.3s ease-in-out;
}

.item-content:hover .news-pic img {
  transition: 0.3s ease-in-out;
  width: 182px;
  height: 105px;
  padding: 3.5px 10px;
}

.back-to-top .icon-arrow {
  transition: 0.3s;
  border: none;
  background-color: #00000012;
  border-radius: 3px;
}

.back-to-top .icon-text {
  transition: 0.3s;
  display: block;
  opacity: 0;
  background-color: #fff;
  color: #999;
  margin: 0;
  border: none;
  box-shadow: 0 1px 3px #00000026;
}

.back-to-top.icon-over .icon-text {
  transition: 0.3s;
  opacity: 1;
}

.title_border {
  transition: 0.3s;
  background-image: url(https://picsum.photos/1500/300?blur=10);
  background-size: cover;
  border-bottom: none;
  margin-top: 0;
  padding-top: 50px;
}

.header_wrap {
  background: #ffffffc4;
}

.line-shadow {
  box-shadow: 0 0 10px #00000070;
  border-bottom: 0;
  background: #ffffff29 !important;
}

.anci_header_content .article-desc .author-name,
.anci_header_content .article-source-bjh span,
.article-title h2 {
  color: #fff;
}
          </style>
        `;
  };

  if (["top.baidu.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            .main .row:nth-child(2),
.main .row:nth-child(3),
.new-footer,
div#bdshare {
  display: none !important;
}

#userbar a,
.header a {
  color: #5892e3;
}

a {
  transition: 0.3s;
  text-decoration: none !important;
}

.wrapper {
  overflow: visible;
}

.all-list,
.grayborder,
.hblock,
.relationSel {
  transition: 0.3s;
  overflow: hidden;
  border-radius: 5px;
  border: none;
  box-shadow: 0 1px 5px #0000003b;
}

.s_ipt_wr {
  transition: 0.3s;
  height: 35px;
  background: #fff;
  border: none !important;
  border-radius: 5px 0 0 5px;
  box-shadow: 0 2px 5px #0000001f;
}

.s_ipt_wr:hover {
  box-shadow: 0 2px 5px #0000003b;
  border-color: #fff0 !important;
}

.s_btn_wr .s_btn {
  color: #fff;
  transition: 0.3s;
  outline: 0;
  height: 35px;
  border-radius: 0 5px 5px 0;
  font-size: 10px;
  background: #5892e3;
  border: none !important;
  box-shadow: 0 2px 5px #0000001f;
}

.s_btn_wr .s_btn:hover {
  outline: 0;
  background: #4879bd;
  box-shadow: 0 2px 5px #0000003b;
}

.s_ipt_wr {
  margin-right: 0;
}

.s_btn_wr {
  overflow: visible;
  background: #fff0;
  position: relative;
  left: -3px;
}

#main-nav,
#main-nav li,
.box-cont .hd,
.box-today h2.title,
.tab-btn-next,
.tab-btn-prev,
.tab-skin-hot,
.tab-skin-main,
.tab-skin-sub,
.tab-skin-sub-lightblue,
.tab-skin-sub-lightbrown {
  transition: 0.3s;
  background: #fff;
}

#main-nav {
  box-shadow: 0 2px 5px #0000001f;
}

#main-nav li a {
  color: #000;
}

#main-nav li a:hover,
#main-nav li.hover a {
  background: #00000012;
}

#main-nav li.current a {
  background: #5892e3;
  color: #fff;
}

#main-nav li.current a span {
  background: #fff0;
  background-repeat: no-repeat;
}

.sub-nav {
  border: none;
  border-top: 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 2px 6px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 2px 6px rgba(0, 0, 0, 0.19);
}

.box-cont,
.box-hot,
.box-list,
.box-today {
  transition: 0.3s;
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid #fff0;
  box-shadow: 0 1px 5px #0000003b;
}

.box-cont:hover,
.box-hot:hover,
.box-list:hover,
.box-today:hover {
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #00000040;
  box-shadow: none;
}

.tab-skin-hot li.current {
  border: none;
  background: #5892e3;
}

.list li {
  transition: 0.3s;
  border-bottom: none;
}

.list li:nth-child(2n + 1) {
  background: #00000008;
}

.tab-btn-next,
.tab-btn-prev,
.tab-skin-main li {
  margin-right: 0;
  border: none;
}

#sub-nav {
  border-bottom: none;
  background: #fff;
}

.w_139 ul li a {
  padding: 5px 0;
  border: none !important;
}

.w_139 ul li a:hover {
  color: #5892e3;
  background: #0000000f;
}

.top-title {
  background: #fff;
  padding: 8px 10px 10px 15px;
}

.grayborder .list-table tbody tr:nth-child(2n + 1) {
  background: #00000008;
}

.list-table td {
  padding: 11px 0;
  border: none !important;
}

.list-table .item-tr .item-info,
.list-table .item-tr .item-news {
  padding: 15px 20px 12px 15px;
  background: #00000008;
  box-shadow: inset 0 2px 5px #00000017;
}

.list-table .item-tr td {
  background: #fff0;
}

.cur-mov {
  border: none;
  padding: 4px;
  background: #5892e342;
}
          </style>
        `;
  };

  if (["cache.baiducontent.com"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            a {
  transition: 0.3s;
  text-decoration: none !important;
}

#bd_snap_kw {
  transition: 0.3s;
  height: 35px;
  padding: 0 10px;
  background: #fff;
  border: none !important;
  border-radius: 5px 0 0 5px;
  box-shadow: 0 2px 5px #0000001f;
}

#bd_snap_kw:hover {
  box-shadow: 0 2px 5px #0000003b;
  border-color: #fff0 !important;
}

#bd_snap_su {
  color: #fff;
  transition: 0.3s;
  outline: 0;
  height: 35px;
  border-radius: 0 5px 5px 0;
  font-size: 10px;
  background: #5892e3;
  border: none !important;
  box-shadow: 0 2px 5px #0000001f;
}

#bd_snap_su:hover {
  outline: 0;
  background: #4879bd;
  box-shadow: 0 2px 5px #0000003b;
}

#bd_snap_ln {
  display: none;
}
          </style>
        `;
  };

  if (["dwz.cn"].some(hostname => hostname.match(location.hostname))) {
    document.head.innerHTML += `
          <style>
            .feedback-wrapper,
.new-icon img {
  display: none !important;
}

.home-container .content .ant-input-search {
  overflow: hidden;
  transition: 0.3s;
  background: #fff;
  border: none !important;
  border-radius: 5px;
  box-shadow: 0 2px 5px #0000001f;
}

.home-container .content .ant-input-search:hover {
  box-shadow: 0 2px 5px #0000003b;
}

.ant-btn-primary {
  color: #fff;
  transition: 0.3s;
  font-size: 15px;
  background: #5892e3;
  border: none;
}

.ant-btn-primary:hover {
  background: #4879bd;
}

.ant-input {
  border: none !important;
}

.ant-tabs,
.ant-tabs-nav-container,
.ant-tabs-nav-scroll,
.ant-tabs-nav-wrap {
  overflow: visible;
}

.ant-tabs-bar {
  border-bottom: none;
  margin: 0;
  outline: 0;
  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.ant-tabs-nav-container {
  overflow: hidden;
  font-size: 14px;
  line-height: 1.5;
  box-sizing: border-box;
  position: relative;
  top: -5px;
  white-space: nowrap;
  margin-bottom: 0;
  padding: 5px;
  transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.home-container
    .content
    .ant-tabs.ant-tabs-card
    > .ant-tabs-bar
    .ant-tabs-tab {
  border-radius: 5px 5px 0 0;
}

.ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
  border: none;
  margin: 0 4px;
  background: #ffffff14;
  margin-right: 0;
  padding: 0 16px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  line-height: 38px;
  box-shadow: 0 0 2px #0000002e;
}

.ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
  background: #fff;
  color: #1890ff;
  padding-bottom: 0;
  box-shadow: 0 1px 6px #00000047;
}
          </style>
        `;
  };
  document.head.innerHTML += `
        <style>
          
        </style>
      `;
})();
