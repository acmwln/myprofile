$(function(){
	var cd = {
		init:function(){
			var self = this;
			self.Field = {};
			self.bind();
			self.carInsRule_mask= false;

		},
		
		bind:function(){
			var self = this;
			$('#btnClose').on('click',function(){
				$(this).parents('.mask').removeClass('show');
			});
			
			

			// 车贷情况联动
			$('#carLoanStatus').on('change',function(){
				/*initSelect('#payingTime');
				initSelect('#payedTime');
				initSelect('#carLoanTerm2');*/
				initSelect('initAll','carLoanStatus');
				var selVal = getSelectVal('#carLoanStatus')['text'];
				if(selVal == '正在还车贷'){
					$('#payBox1').removeClass('hide');
					$('#carLoanMoneyBox').removeClass('hide');

					if(!$('#payBox2').hasClass('hide')){
						$('#payBox2').addClass('hide');
					}
					if(!$('#creditHistoryBox').hasClass('hide')){
						$('#creditHistoryBox').addClass('hide');
					}
					if(!$('#carInsBox').hasClass('hide')){
						$('#carInsBox').addClass('hide');
					}
				}else if(selVal == '车贷已还清'){
					$('#payBox2').removeClass('hide');
					$('#carLoanMoneyBox').removeClass('hide');
					$('#carInsBox').removeClass('hide');

					if(!$('#payBox1').hasClass('hide')){
						$('#payBox1').addClass('hide');
					}
					if(!$('#creditHistoryBox').hasClass('hide')){
						$('#creditHistoryBox').addClass('hide');
					}
					
				}else if(selVal == '没有车贷'){
					$('#carInsBox').removeClass('hide');
					$('#creditHistoryBox').removeClass('hide');

					if(!$('#payBox1').hasClass('hide')){
						$('#payBox1').addClass('hide');
					}
					if(!$('#payBox2').hasClass('hide')){
						$('#payBox2').addClass('hide');
					}
					if(!$('#carLoanMoneyBox').hasClass('hide')){
						$('#carLoanMoneyBox').addClass('hide');
					}

					
					

				}
			});

			//车辆信息联动
			$('#carInsuredType').on('change',function(){
				initSelect('#carTransTime');
				var selVal =  getSelectVal('#carInsuredType')['text'];
				if(selVal == '二手车'){
					$('#carTransTimeBox').removeClass('hide');
				}else if(selVal == '一手车') {
					if(!$('#carTransTimeBox').hasClass('hide')){
						$('#carTransTimeBox').addClass('hide');
					}
				}

			});
			$('#btnMask').on('click',function(){
				self.carInsRule_mask = true;
				self.nextPage();
			})

		
			//下一步按钮
			$('#btnNext').on('click',callback=function(){
				$('#btnNext').off('click');
				if($(this).hasClass('icon-load')){
	 				alert('页面正在努力加载中，请耐心等待');
	 				return;
	 			}			
				$('.icon-error').removeClass('icon-error r0');
				if(!self.validate()) return;
				 if(self.Field['hasCarIns']){
				 	$('#cdMask').fadeIn();
				 	

				 }else{
				 	self.nextPage();

				 }

																								
			});


		},
		validate:function(){
			var self = this;
			// 车贷字段 校验 start

			//校验 车贷情况下拉框
			var carLoanStatus = getSelectVal('#carLoanStatus')['text'];
			if(carLoanStatus.indexOf('请选择')>-1){
				$('#carLoanStatus').parents('.item-right').addClass('icon-error');
				$('#btnNext').on('click',callback);
				showError('carLoanStatus','请选择车贷情况');
				$('#btnNext').on('click',callback);
				return false;

			}else if(carLoanStatus =='正在还车贷'){	

				//还款期限
				if(!valiSelect('#payingTime')){
					showError('payingTime','请选择已还贷期数');
					$('#btnNext').on('click',callback);
					return false;
				}
				
			}else if(carLoanStatus =='车贷已还清'){
				//还清至今时间			
				if(!valiSelect('#payedTime')){
					showError('payedTime','请选择还清距今时间');
					$('#btnNext').on('click',callback);
					return false;
				}

			
			}
			// 校验 车贷总额
			if(!$('#carLoanMoneyBox').hasClass('hide')){
				var val = $.trim($('#carLoanMoney').val());
				var $carLoanMoneyEl = $('#carLoanMoney');
				
				if(val == null || val == ''){
					$carLoanMoneyEl.parent().addClass('icon-error');
					showError('carLoanMoney','请填写车贷总额');
					$('#btnNext').on('click',callback);
					return false;
				}else if(!/^\d+(\.\d+)?$/.test(val)){
					$carLoanMoneyEl.parent().addClass('icon-error');
					showError('carLoanMoney','请正确填写车贷总额');
					$('#btnNext').on('click',callback);
					return false;
				}
			}	

			// 车贷字段 校验 end	



			//车险字段 校验 start
			self.Field['hasCarIns'] = $('#carInsBox').hasClass('hide') ? false : true;//车险字段是否显示

			if(self.Field['hasCarIns']){
				//校验 车辆类型
				if(!valiSelect('#carType')){
					showError('carType','请选择车辆类型');
					$('#btnNext').on('click',callback);
					return false;
				}
				//校验 车辆性质			
				if(!valiSelect('#carInsuredType')){
					showError('carInsuredType','请选择车辆信息');
					$('#btnNext').on('click',callback);
					return false;
				}
				//校验 二手车过户时间
				if(getSelectVal('#carInsuredType')['text'] =='二手车'){
					
					if(!valiSelect('#carTransTime')){
						showError('carTransTime','请选择过户时间');
						$('#btnNext').on('click',callback);
						return false;
					}

				}

				//校验 使用车龄
				if(!valiSelect('#carAge')){
					showError('carAge','请选择使用车龄');
					$('#btnNext').on('click',callback);
					return false;
				}
				//校验 是否抵押
				if(!valiSelect('#carDY')){
					showError('carDY','请选择是否抵押');
					$('#btnNext').on('click',callback);
					return false;
				}

				//校验 使用性质
				if(!valiSelect('#carUse')){
					showError('carUse','请选择使用性质');
					$('#btnNext').on('click',callback);
					return false;
				}

				//校验 车牌号
				var carNum = $.trim($('#carNum').val());	
				var $carNumEl = $('#carNum');			
				if(carNum == null || carNum == ''){
					$carNumEl.parent().addClass('icon-error');
					showError('carNum','请填写车牌号');
					$('#btnNext').on('click',callback);
					return false;
				}else if(!/^[\u4e00-\u9fa5]{1}[a-zA-Z]{1}[a-zA-Z_0-9]{5}$/.test(carNum)){
					$carNumEl.parent().addClass('icon-error');
					showError('carNum','车牌号格式不正确');
					$('#btnNext').on('click',callback);
					return false;
				}
			}	

			//车险字段 校验 end		

			//校验 信用历史
			if(!$('#creditHistoryBox').hasClass('hide')){
				if(!valiSelect('#creditHistory')){
					showError('creditHistory','请选择信用历史');
					$('#btnNext').on('click',callback);
					return false;
				}

			}
			

			return true;


		},
		
		nextPage:function(){//update 2015-03-10
			var self = this;
			
			var backData = {};			
			backData['livingCity'] = '威海';//后台获值

			self.Field = {
				'carLoanStatus':getSelectVal('#carLoanStatus')['text'],
				'carLoanMoney':$('#carLoanMoney').val(),//车贷总额
				'payingTime':getSelectVal('#payingTime')['text'],//正在还车贷 已还贷期数
				'payedTime':getSelectVal('#payedTime')['text'],//车贷已还清 还清距今

			}

			var cgi_wbcx_pass = false;//cgi-外部车险是否通过	
			var p2p_czd_pass = false;//p2p-车主贷是否通过	
			var p2p_ysx_pass = false;//P2P-车贷客户授信是否通过

			var carIns_rule_pass = false;//车险筛选
			var carLoan_rule_pass = false;//车贷筛选

			var livingCity =formCity(backData['livingCity']);			
			var cgi_city_pass = vailCity(livingCity,'cgi');//cgi城市之一
			var p2p_city_pass = vailCity(livingCity,'p2p');//p2p城市之一


			//车贷筛选
			var carLoanRule = {
				'loanTime_pass':false,
				'carLoanMoney_pass':false,
				'goCarIns_pass':true

			}
			carLoanRule['carLoanMoney_pass'] = $.trim($('#carLoanMoney').val()) >80000 ? true : false;

			if(self.Field['carLoanStatus'] =='正在还车贷'){
			
				carLoanRule['loanTime_pass'] = getSelectVal('#payingTime')['dataVal'] ==  'Y' ? true : false;
				carLoanRule['goCarIns_pass'] = false;//不走车险
				// var loanTime1_pass = true;

			}else if(self.Field['carLoanStatus'] =='车贷已还清'){
				carLoanRule['loanTime_pass'] = getSelectVal('#payedTime')['dataVal'] ==  'Y' ? true : false;
					
			}
			carLoan_rule_pass = carLoanRule['loanTime_pass'] && carLoanRule['carLoanMoney_pass'];
			 p2p_ysx_pass = carLoan_rule_pass & p2p_city_pass ;

			//车险筛选
			var carInsRule = {
				'carType_pass':false,
				'carInsuredType_pass':false,
				'carDY_pass':false,
				'carUse_pass':false,
				'carAge_pass':false,
				'creditHistory_pass':true

			}
			if(carLoanRule['goCarIns_pass']){

				carInsRule['carType_pass'] = getSelectVal('#carType')['dataVal'] ==  'Y' ? true : false;
				carInsRule['carInsuredType_pass'] = getSelectVal('#carInsuredType')['dataVal'] ==  'Y' ? true : false;
				if(!carInsRule['carInsuredType_pass']){
					carInsRule['carInsuredType_pass'] = getSelectVal('#carTransTime')['dataVal'] ==  'Y' ? true : false;//如果为二手车 判断过户时间
				}
				carInsRule['carDY_pass'] = getSelectVal('#carDY')['dataVal'] ==  'Y' ? true : false;
				carInsRule['carUse_pass'] = getSelectVal('#carUse')['dataVal'] ==  'Y' ? true : false;
				carInsRule['carAge_pass'] = getSelectVal('#carAge')['dataVal'] ==  'Y' ? true : false;


				if(!$('#creditHistoryBox').hasClass('hide')){
					carInsRule['creditHistory_pass']=  getSelectVal('#creditHistory')['dataVal'] ==  'Y' ? true : false;
				}

				carIns_rule_pass = self.carInsRule_mask && carInsRule['carType_pass'] && carInsRule['carInsuredType_pass'] 
									&& carInsRule['carDY_pass'] && carInsRule['carUse_pass']
									&& carInsRule['creditHistory_pass'];

				cgi_wbcx_pass = carIns_rule_pass && cgi_city_pass;
				p2p_czd_pass  = carInsRule['carAge_pass'] && carIns_rule_pass && p2p_city_pass;
				
			}


			
			

			
			if(cgi_wbcx_pass){			
				alert('CGI-外部车险');
			}else if(p2p_czd_pass){
				alert('P2P-车主贷');
				
			}else if(p2p_ysx_pass){
				alert('P2P-车贷客户授信');
			}else{
				alert('资质不符');

			}



		}
		
	}
	cd.init();
})