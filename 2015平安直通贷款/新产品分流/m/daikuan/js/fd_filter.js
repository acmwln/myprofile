$(function(){
	var fd = {
		init:function(){
			var self = this;
		
			self.Field = {
				'houseCity':'',//房产所在地
				'houseType':'',//产权类型
				'houseLoanStatus':'',//是否有房贷
				'loanTime':'',//已还贷期数
				'creditHistory':''//信用历史

			};
			self.bind();
			showCity('#houseCity');
			$('#popup_city').find('.loadingMask').hide();

		},
		bind:function(){
			var self = this;
			$('#btnClose').on('click',function(){
				$(this).parents('.mask').removeClass('show');
			});
			

			//房产所在地 定位
			$('#btnLocation').on('touchend',function(){
	 			$('.item-right').removeClass('icon-error r0');
	 			$('#perror').remove();
	 			if($(this).hasClass('unclicked')){
	 				return;
	 			}
	 			$(this).addClass('unclicked').text('定位中');
	 			var $obj=$(this).prev().find('p')
	 			$obj.text('定位中...');
	 			getCurLocation($obj);
	 		});

			// 是否有房贷联动
			$('#houseLoanStatus').on('change',function(){
				
				initSelect('#houseLoanTime');
				initSelect('#creditHistory');

				var selVal = getSelectVal('#houseLoanStatus')['text'];
				if(selVal == '正在还房贷'){
					$('#payBox1').removeClass('hide');
					if(!$('#creditHistoryBox').hasClass('hide')){
						$('#creditHistoryBox').addClass('hide');
					}
					
				}else if(selVal == '房贷已还清'){
					if(!$('#payBox1').hasClass('hide')){
						$('#payBox1').addClass('hide');
					}
					if(!$('#creditHistoryBox').hasClass('hide')){
						$('#creditHistoryBox').addClass('hide');
					}
				}else if(selVal == '无房贷'){
					$('#creditHistoryBox').removeClass('hide');
					
					if(!$('#payBox1').hasClass('hide')){
						$('#payBox1').addClass('hide');
					}
					

				}
			});
		
			//下一步按钮
			$('#btnNext').on('click',callback=function(){
				$('#btnNext').off();//解绑 避免重复提交

				if($(this).hasClass('icon-load')){
	 				alert('页面正在努力加载中，请耐心等待');
	 				return;
	 			}			
				$('.icon-error').removeClass('icon-error r0');
				if(!self.validate()) return;
				$(this).text('加载中').addClass('icon-load');				
				self.nextPage();																				
			});


		},
		validate:function(){
			var self = this;

			var houseCity = $.trim($('#houseCity').text());

			//校验 房产所在地
			if(houseCity.indexOf('请选择')>-1 ||houseCity == null || houseCity == "" || houseCity.indexOf('定位中')>-1) {
				$('#houseCity').parent().addClass('icon-error');
				showError('houseCity','请选择房产所在地');
				$('#btnNext').on('click',callback);
				return false;
			}

			//校验 产权类型
			if(!valiSelect('#houseType')){
				showError('houseType','请选择房贷期限');
				$('#btnNext').on('click',callback);
				return false;
			}

			
		
			//校验 房贷情况下拉框
			self.Field['houseLoanStatus'] = getSelectVal('#houseLoanStatus')['text'];

			if(self.Field['houseLoanStatus'].indexOf('请选择')>-1){
				$('#houseLoanStatus').parents('.item-right').addClass('icon-error');
				showError('houseLoanStatus','请选择房贷情况');
				$('#btnNext').on('click',callback);
				return false;

			}else if(self.Field['houseLoanStatus'] =='正在还房贷'){	

				//校验 已还贷期数
				if(!valiSelect('#houseLoanTime')){
					showError('houseLoanTime','请选择房贷期限');
					$('#btnNext').on('click',callback);
					return false;
				}
			
			}
			//校验 信用历史
			if(!valiSelect('#creditHistory')){
				showError('creditHistory','请选择房贷期限');
				$('#btnNext').on('click',callback);
				return false;
			}
			
			return true;


		},
		
		nextPage:function(){
			var self = this;
			

			//backData存放后台取得的数据
			var backData = {
				'livingcity':''//居住城市
				//'hasHouse':false,//是否有房
			}
			//后台获值后请删除localStorage
			backData['livingcity'] = localStorage.getItem('livingcity') ||  '上海';
			backData['hasHouse'] = localStorage.getItem('hasClass');

			var livingcity = formCity(backData['livingcity']);//居住城市
			var houseCity=$('#houseCity').text();
			houseCity = formCity(houseCity);//房产所在城市

 			var city_equal =( houseCity == backData['livingcity'] ? true : false);// 居住城市是否 == 房产所在城市
 			var houseType_pass = getSelectVal('#houseType')['dataVal'] ==  'Y' ? true : false;//产权类型：商品房通过

			
			if(self.Field['houseLoanStatus'] =='正在还房贷'){
				var houseLoan_pass1 = getSelectVal('#houseLoanTime')['dataVal'] ==  'Y' ? true : false;

			}else if(self.Field['houseLoanStatus'] == '房贷已还清'){
				var houseLoan_pass2 = true;
				
			}else if(self.Field['houseLoanStatus'] =='无房贷'){
				var houseLoan_pass3 = getSelectVal('#creditHistory')['dataVal'] ==  'Y' ? true : false;				
			}

			var cgi_city_pass = vailCity(houseCity,'cgi');//cgi城市之一
			var p2p_city_pass = vailCity(houseCity,'p2p');//p2p城市之一

			var fd_base_rule =city_equal && houseType_pass;
			var cgi_yezd_rule =  houseLoan_pass1  && cgi_city_pass;
			 var p2p_fdsx =  houseLoan_pass1 && p2p_city_pass;
			var p2p_yezd_rule =  (houseLoan_pass2 || houseLoan_pass3) && p2p_city_pass;

			
			if(fd_base_rule){
				if(cgi_yezd_rule){
					alert('CGI-业主贷');
				}else if(p2p_fdsx){
					alert('P2P-房贷授信');
				}else if(p2p_yezd_rule){
					alert('P2P-业主贷');
				}
				else{
					alert('资质不符');
				}
			}else{
				alert('资质不符');
			}



		}

		
		
	}
	fd.init();
});

//自动定位
function getCurLocation(obj){
	function myFun(result){
		var cityName = result.name;
	
		if(obj.parents('.main').hasClass('hide')){
			return;
		}
		if(obj.parents('.main').hasClass('hide')){
			return;
		}
		obj.text(cityName).parent('.item-right').removeClass('cgray');
		$('#btnLocation,#btnLocation2').removeClass('unclicked').text('定位');
		$('.item-right').removeClass('icon-error r0');
		$('#perror').remove();

	}
	var myCity = new BMap.LocalCity();
	myCity.get(myFun);
};

