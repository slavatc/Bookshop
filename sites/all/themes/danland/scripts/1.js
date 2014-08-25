
 
/*
Script by FPMC at http://jsarchive.8m.com
Submitted to Website Abstraction (http://wsabstract.com)
*/

//полный путь к рисунку
//src = ["http://s2.goodfon.ru/image/371293-1936x1288.jpg", "http://25.media.tumblr.com/cadcdd738e801f3422fc2ee807c82e42/tumblr_mfruj9zws41qdeuyro1_1280.jpg", "", ""]
src = ["/bookshop/sites/all/modules/0.JPG", "/bookshop/sites/all/modules/1.JPG", "/bookshop/sites/all/modules/2.JPG", "/bookshop/sites/all/modules/3.JPG","/bookshop/sites/all/modules/0.JPG", "/bookshop/sites/all/modules/4.JPG", "/bookshop/sites/all/modules/5.JPG", "/bookshop/sites/all/modules/6.JPG"]

//urls
//url = ["home.htm", "another.htm", "Link.htm", "popdemo.htm"]

//время экспонирования каждого рисунка
duration = 4;

//Please do not edit below
ads=[]; ct=0;
function switchAd() {
var n=(ct+1)%src.length;
if (ads[n] && (ads[n].complete || ads[n].complete==null)) {
document["Ad_Image"].src = ads[ct=n].src;
}
ads[n=(ct+1)%src.length] = new Image;
ads[n].src = src[n];
setTimeout("switchAd()",duration*1000);
}
function doLink(){
location.href = url[ct];
} onload = function(){
if (document.images)
switchAd();
}
 
