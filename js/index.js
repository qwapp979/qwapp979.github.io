// 轮播图
 window.onload=function ban(){
    var imgs=document.getElementById("bannerImg").getElementsByTagName("li");
    var nums=document.getElementById("bannerNum").getElementsByTagName("li");
    var left=0;
    var timmer;

    run();
    function run(){
        // 1280*3
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

    