// 轮播图
 window.onload=function ban(){
    //  获取图片项
    var imgs=document.getElementById("bannerImg").getElementsByTagName("li");
    // 获取下方编号项
    var nums=document.getElementById("bannerNum").getElementsByTagName("li");

    var left=0;
    var timmer;

    
    function run(){
        // 1280*3 当三张图片都移动完，设置左边距为初始值
        if(left<=-3840){
            bannerImg.style.marginLeft="0px";
            left=0;
        }
        // 当整张图片占据整个div暂停一秒
        var n=(left%1280==0)?1000:20;
        changeImg();
        //计算下标
        var m=Math.floor(-left/1280);
        changeNum(m);
        left-=10;
        timer=setTimeout(run,n);
    }
    run();
    function changeImg(){
        bannerImg.style.marginLeft=left+"px";
    }
    // 改变图片编号
    function changeNum(m){
        for(var i=0;i<nums.length;i++){
            nums[i].style.backgroundColor="";
        }
        nums[m].style.backgroundColor="#9b9b9b";
    }
    //鼠标悬浮暂停图片(闭包)
    for(var i=0;i<imgs.length;i++){
        (function(j){
            imgs[j].onmousemove=function(){
                clearTimeout(timer);
                left=-j*1280;
                changeImg();
                changeNum(j);
            }
            imgs[i].onmouseout=function(){
                run();
            }
        })(i)
    }
    //鼠标悬浮编号暂停图片(闭包)
    for(var i=0;i<nums.length;i++){
        (function(j){
            nums[j].onmousemove=function(){
                clearTimeout(timer);
                left=-j*1280;
                changeImg();
                changeNum(j);
            }
            nums[i].onmouseout=function(){
                run();
            }
        })(i)
    }
 }

    