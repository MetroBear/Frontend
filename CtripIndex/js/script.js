//页面加载
$(document).ready(function(){
	// banner左侧搜索框纵向选项效果
	// $(".search-menu-ul li").hover(function(){
	// 	$(this).css({"color":"#2577E3","background-color":"#FFF","cursor":"pointer"});
	// },function(){
	// 	$(this).css({"color":"#FFF","background-color":"#2577E3","cursor":"auto"});
	// });
	// $(".search-menu-ul li").click(function(){
	// 	$(this).css({"color":"#2577E3","background-color":"#FFF","cursor":"pointer"})
	// });

	/* -- banner广告图轮播 start --*/
		var curIndex = 0;  //当前index
        // 定时器自动变换，5秒每次
        var autoChange = setInterval(function(){ 
        	if(curIndex <  $(".banner-picul li").length-1){ 
        		curIndex ++; 
        	}else{
        		curIndex = 0;
        	}
        	changeTo(curIndex);  
        },5000);
        //鼠标移动至控制点时，切换图片
        $(".banner-indexul").find("li").each(function(item){ 
        	$(this).hover(function(){ 
        		clearInterval(autoChange);
        		changeTo(item);
        		curIndex = item;
        	},function(){ 
        		autoChange = setInterval(function(){ 
        			if(curIndex <  $(".banner-picul li").length-1){ 
        				curIndex ++; 
        			}else{ 
        				curIndex = 0;
        			}
        			changeTo(curIndex);  
        		},2500);
        	});
        });
        //图片切换处理函数
        function changeTo(num){ 
        	$(".banner-picul").find("li").removeClass("imgOn").hide().eq(num).fadeIn(1200).addClass("imgOn");
        	$(".banner-indexul").find("li").removeClass("indexOn").eq(num).addClass("indexOn");
        }
        /* -- banner广告图轮播 end --*/
});