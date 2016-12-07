/*  
	* @version: 0.9.0
	* @description:
	  仅支持输入数字，可配置输入长度、最大/小值、默认值设置
	* @data:{
		'id': '', 元素id
		'maxlenght': '', 可输入最大长度
		'deflultValue': '', 默认值
		'maxItem': '', 最大值
		'minItem': '' 最小值
		}
	* @Guide:
		html:<div id="a"></div>
		js:$('#Counter').counter();可以无参数，也可以传配置参数@data
	* @author: anyWayoneWei<imflying9@gmail.com>
	*/
	$.fn.counter = function(elemConf){
		var elemId=$(this).attr('id');
		var elemConfig;
		if (!elemConf) {
			//默认参数初始化
			elemConfig ={
				'maxlenght': 2,
				'deflultValue': 0,
				'maxItem': 99,
				'minItem': 0
			};
		}else{
			elemConfig = elemConf;
		}
	//生成html元素
	var btnSHtml = "<button id='"+ elemId +"_numS' class='counter-btn'>-</button>";
	var btnPHtml = "<button id='"+ elemId +"_numP' class='counter-btn'>+</button>";
	var inputHtml = "<input type='text' id='"+elemId+"_Num' class='counter-input' value='"+elemConfig.deflultValue+"' maxlength='"+elemConfig.maxlenght+"'"+"onkeyup='"+"this.value=this.value.replace(/\D/g,\"\")'"+" onafterpaste='"+"this.value=this.value.replace(/\D/g,\"\")'>";
	this.append(btnSHtml+inputHtml+btnPHtml);
	//输入限制
	$("#"+elemId+"_Num").keyup(function(){     
		var tmptxt=$(this).val();     
		$(this).val(tmptxt.replace(/\D|^0/g,''));     
	}).bind("paste",function(){     
		var tmptxt=$(this).val();     
		$(this).val(tmptxt.replace(/\D|^0/g,''));     
	}).blur(function(){
		if ($(this).val()=='') {
			$(this).val(elemConfig.deflultValue);
		}
	}).css("ime-mode", "disabled");

    //控制-/+按钮
    $("#"+elemId+" button").bind('click',function(){
    	var nowNum = parseInt($("#"+elemId+"_Num").val());
    	var btnId = $(this).attr('id');
    	if (btnId.substr(-4) == 'numS' & nowNum>elemConfig.minItem) {
    		nowNum = nowNum -1;
    	}
    	if (btnId.substr(-4) == 'numP' & nowNum<elemConfig.maxItem) {
    		nowNum = nowNum +1;
    	}
    	$("#"+elemId+"_Num").val(nowNum);
    });

    return this;
};
