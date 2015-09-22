$('.btn').on('click',function(){
	$('#perror').remove();
});

//input 获得焦点，失去焦点，有输入值监听事件
$('input').on('focus',function(){
	var $this = $(this);
	$this.parent().addClass('safe');
	

});
$('input').on('blur',function(){
	$('.perror').remove();
	$('.icon-error').removeClass('icon-error r0');
	var $this = $(this);
	$this.parent().removeClass('safe');
});
$('input').on('input',function(){
	var val = $(this).val();
	$('.perror').remove();
	$('.icon-error').removeClass('icon-error r0');
	var $this = $(this);
	var $placeholder = $this.siblings('.placeholder');
	$placeholder.text('');
	if($this.hasClass('color-error') && !val.length){
 		$this.removeClass('color-error');
 	}
});

// 
var comm={
	//输入框失去焦点时校验格式，格式不正确内容变红
	valiInpBlur:function(id,reg){
		$(id).on('blur',function(){
		 	var $this = $(this);
		 	var val = $.trim($(this).val());
		 	if(!val.length){return;}
		 	if(!val.match(reg)){
				if(!$this.hasClass('color-error')){
		 			$this.addClass('color-error');
		 		}
			}else{
				if($this.hasClass('color-error')){
		 			$this.removeClass('color-error');
		 		}

			}
		 });
	}

}

//验证码倒计时
function countdown(num,obj){
 	var timer = setInterval(function(){
 		if(num<0){
 			clearInterval(timer);
 			obj.html('重新发送').removeClass('disabled row2');	
 			$('#phoneNum').removeClass('disabled').attr('disabled',false);	
 			return;
 		}
 		
 		obj.html('输入时间<br/>'+(num--)+'s').addClass('disabled row2');		
 	},1000);
}
//手机号放大效果
$('#phoneNum,#insNumInp').on('input',function(){
	var $this = $(this);
	var enlargeObj = $(this).siblings('.enlargeNum');
	phonedeal($this,enlargeObj);
});
//手机号码加空格
function phonedeal(phoneObj,enlargeObj){
	var i = $.trim(phoneObj.val());
	var h = i.substring(0,3);		//前三位
	
	//超过三位
	il=i.substring(3);
	while(il&&il.length>0){
		h+=" "+il.substring(0,4);
		il=il.substring(4)
	}
	enlargeObj.html(h);
	if(h.length!=0){
		enlargeObj.show().css("z-index",101);
		}
	else{
		enlargeObj.hide().css("z-index",0);
		}
	phoneObj.focus(function(){
		enlargeObj.show().css("z-index",101);
		}).blur(function(){
			enlargeObj.hide().css("z-index",0);
		});
}
// 获取当前页面高度
function getDocHeight(){
	return $(document).height();
}

//radioVal
function radioIsClicked(radioId){
	var isClicked =   $(radioId).attr('data-clicked');
	if(isClicked =="true"){
		isClicked =true;
	}else{
		isClicked = false;
	}
	return isClicked;
}
function getRadioVal(radioId){
	var isChecked =  $(radioId).prop('checked');
	return isChecked;
}


//select绑定事件及取值
$('select').on('change',function(){
	$('.icon-error').removeClass('icon-error r0');
	$('.perror').hide();
	var $selectedOption= $(this).find("option:selected");
	var textVal = $.trim($selectedOption.text());  
	var dataVal = $.trim($selectedOption.val());
	if(textVal.indexOf('请选择') !='-1') {
			return;
	}    
	$(this).siblings('.sel-text').text(textVal).attr('data-val',dataVal).removeClass('placeholder');		
});
// 获取select选中值
function getSelectVal(selectId){
	var valArr = {};
	valArr['text'] = $(selectId).prev('.sel-text').text();
	valArr['dataVal'] = $(selectId).prev('.sel-text').attr('data-val');
	return valArr;
}
// select初始化
function initSelect(selectId,notId){
	if(selectId == 'initAll'){
		var $arr = $('select:not(#'+notId+')');
		$arr.each(function(){
	
			init($(this));
		})
	}else{
		init($(selectId));
	}
	function init($obj){
		var $select = $obj;
		$select.prev('.sel-text').text('请选择').attr('data-val','N').addClass('placeholder');
		$($select.find('option')[0]).attr('selected',true);

	}
}
//select校验
function valiSelect(id){
	var $selectEle = $(id);
	var valText = $.trim(getSelectVal(id)['text']);
	if(valText == '请选择' || valText == null || valText == ''){
		$selectEle.parents('.item-right').addClass('icon-error');
		return false;
	}
	return true;

}

//显示错误信息
function showError(id,str){
	var $perror = $('#error');
	if($perror.length){
		$perror.remove();

	}
	var $wrap = $('#'+id).parents('.item-wrap');
	if(!$perror.length){
		$error = $wrap.after('<p class="perror" id="perror">'+str+'</p>');
		$error.show();
		var top = $error.position()['top'];
		var scrollTop = $(window).scrollTop(top);

	}
	
}
//隐藏错误信息
function hideError(){
	$('.perror').remove();
	$('.icon-error').removeClass('icon-error r0');
}

// function removeError(){
// 	$('.perror').remove();
// }
//获得当天日期
function getNowDate(){
	var now = new Date();  
	var now_year = now.getFullYear();
	var now_mon = now.getMonth();
	var now_date = now.getDate();
	var today= new Date(now_year,now_mon,now_date); 
	return today;     
}


// 手机号校验
function phoneValidate(inpVal,ajaxVal){
	var phoneNum = inpVal;
	var ajax_phoneNum = ajaxVal;
	if(phoneNum == null || phoneNum == ""){
		$('#phoneNum').parent().addClass('icon-error');
		showError('phoneNum','请输入手机号码');
		return false ;
	}else if((phoneNum != ajax_phoneNum) && !phoneNum.match(/^1(3[0-9]|7[0-9]|5[0-35-9]|8[01235-9])\d{8}$/)){
		$('#phoneNum').parent().addClass('icon-error');
		showError('phoneNum','请正确填写手机号码');
		return false;
	}
	return true;

}
//日期校验
function dateValidate(id,str){
	var $dateObj = $('#'+id);
	var val = $.trim($dateObj.val());
	if(val  == null || val  == ''){
		$dateObj.parent().addClass('icon-error');
		showError(id,'请选择'+str);
		return false;
	}

	var r =val.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/); 
	if(r==null){
		$dateObj.parent().addClass('icon-error');
		showError(id,'日期格式有误');
		return false;
	}
	var date = new Date(r[1],r[3]-1,r[4]);
	return  date;

}
//身份证校验
function idCardValidate(id){
	var $idCardEle = $(id);
	var temp_id = id.substr(1);
    var idCardVal = $idCardEle.val();
    var reg = /^(?:\d{8}(?:0[1-9]|1[0-2])[0123]\d{4}|\d{6}(?:18|19|20)\d{2}(?:0[1-9]|1[0-2])[0123]\d{4}[0-9Xx])?$/;
    if(!idCardVal){
    	$idCardEle.parent().addClass('icon-error');
    	showError(temp_id,'请输入您的身份证号码');
   		return false;
    }else if(idCardVal && !reg.test(idCardVal)){
        $idCardEle.parent().addClass('icon-error');
    	showError(temp_id,'身份证号码格式有误！');
   		return false;
    }else{
        var errorMsg = idCard(idCardVal);
        if(errorMsg!=true){
           $idCardEle.parent().addClass('icon-error');
	    	showError(temp_id,errorMsg);
	   		return false;
        }else {
           return true;
        }
    }
      
}
function idCard(idcard) {
	var Errors = [
	       true,
	       "身份证号码位数不对","身份证号码校验错误",
	       "身份证号码校验错误","身份证地区非法"];
	var area = {
	       11: "\u5317\u4eac",       12: "\u5929\u6d25",      13: "\u6cb3\u5317",       14: "\u5c71\u897f", 15: "\u5185\u8499\u53e4",  21: "\u8fbd\u5b81",       22: "\u5409\u6797",       23: "\u9ed1\u9f99\u6c5f",
	       31: "\u4e0a\u6d77",      32: "\u6c5f\u82cf",  33: "\u6d59\u6c5f",       34: "\u5b89\u5fbd",       35: "\u798f\u5efa", 36: "\u6c5f\u897f",       37: "\u5c71\u4e1c",       41: "\u6cb3\u5357",       42: "\u6e56\u5317",
	       43: "\u6e56\u5357",       44: "\u5e7f\u4e1c", 45: "\u5e7f\u897f", 46: "\u6d77\u5357",      50: "\u91cd\u5e86",       51: "\u56db\u5ddd",    52: "\u8d35\u5dde",      53: "\u4e91\u5357",       54: "\u897f\u85cf",
	       61: "\u9655\u897f",       62: "\u7518\u8083",       63: "\u9752\u6d77",      64: "\u5b81\u590f",       65: "\u65b0\u7586",     71: "\u53f0\u6e7e",       81: "\u9999\u6e2f",       82: "\u6fb3\u95e8",       91: "\u56fd\u5916"
	};
	var Y, JYM;
	var S, M;
	var idcard_array = new Array();
	idcard_array = idcard.split("");
	if(idcard == ""){//为空
	       return true;
	}
	if (area[parseInt(idcard.substr(0, 2))] == null) {
	       return Errors[4]
	}
	switch (idcard.length) {
	case 15://15_DIGITS_ID_TOKEN
	       if ((parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0 || ((parseInt(idcard.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0)) {
	              ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/
	       } else {
	              ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/
	       }
	       if (ereg.test(idcard)) {
	              return Errors[0]
	       } else {
	              return Errors[2]
	       }
	       break;
	case 18:
	       if (parseInt(idcard.substr(6, 4)) % 4 == 0 || (parseInt(idcard.substr(6, 4)) % 100 == 0 && parseInt(idcard.substr(6, 4)) % 4 == 0)) {
	              ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/
	       } else {
	              ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/
	       }
	       if (ereg.test(idcard)) {
	              S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7 + (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9 + (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10 + (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5 + (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8 + (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4 + (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2 + parseInt(idcard_array[7]) * 1 + parseInt(idcard_array[8]) * 6 + parseInt(idcard_array[9]) * 3;
	              Y = S % 11;
	              M = "F";
	              JYM = "10X98765432";
	              M = JYM.substr(Y, 1);
	              if(idcard_array[17] == "x"){
	                idcard_array[17] = "X";
	              }
	              if (M == idcard_array[17]) {
	                     return Errors[0]
	              } else {
	                     return Errors[3]
	              }
	       } else {
	              return Errors[2]
	       }
	       break;
	default:
	       return Errors[1];
	       break
	}
    return true
}


//cgi p2p城市筛选
function vailCity(city,type){
	var myCity = [];

	cgi_city = ["深圳","上海","杭州","南京","无锡","宁波","常州","苏州","南通","合肥","嘉兴","扬州",  "芜湖","马鞍山","绍兴","镇江","徐州",    "蚌埠","东莞","广州","武汉","长沙","海口","佛山","惠州","中山","珠海","厦门",  "泉州","福州","江门","漳州","三亚","汕头","湛江","保定","廊坊","沧州","株洲","湘潭","肇庆","清远","成都","重庆","西安","昆明","南宁","贵阳","兰州","洛阳",  "郑州","焦作","许昌","柳州","南昌","遵义","宝鸡","曲靖","咸阳","南阳","绵阳","乌鲁木齐","桂林","乐山","红河","北京","哈尔滨","烟台","唐山","吉林","济南","邯郸","淄博","鞍山","齐齐哈尔","太原","大庆","东营","呼和浩特","延吉","营口","秦皇岛","锦州","钦州","牡丹江"];
	p2p_city = ["保定","北京","常州","成都","大连","东莞","佛山","福州","广州","贵阳","桂林","哈尔滨","杭州","合肥",  "菏泽","衡阳","呼和浩特","惠州","济南","济宁","嘉兴","江门","金华","晋江","荆州","昆明","丽水","连云港","聊城","临汾","临沂","柳州","龙岩","南昌","南京","南宁","南通","宁波","宁德","莆田","青岛","曲靖","泉州","三明","厦门","上海","绍兴","深圳","沈阳","石家庄","苏州","台州","太原","泰安","泰州","天津","威海","潍坊","温州","无锡","芜湖","武汉",    "西安","襄阳","宿迁","徐州","许昌",  "烟台","扬州","义乌","枣庄","漳州","长春","长沙","镇江",    "郑州","中山","重庆","珠海",    "株洲","淄博","遵义"];
	if(type == "cgi"){myCity = cgi_city;}
	if(type == "p2p"){myCity = p2p_city;}
			
	var city = city;
	
	var last = city.length-1;
	var shi = city.substring(last);
	if(shi=='市'){
		city = city.replace(/市/,"");
	}
	for(var i = 0;i<myCity.length;i++){
		if(city == myCity[i]){
			return true;
		}
	}
	
}
//城市去掉 “市”
function formCity(city){
	var city=$.trim(city);
 	var last1 = city.length-1;
 	var shi1 = city.substring(last1);
 	if(shi1=="市"){
 		city = city.replace(/市/,"");
 	}
 	return city;

}

