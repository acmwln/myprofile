$(function(){
	var sx = {
		init:function(){
			
			var self = this;		
			self.Field = {			
				'insCompany':'',//保险公司
				'payWay':'',//交费方式
				'payTime':'',//已缴期数
				'insPeople':'',//被保人
				'creditHistory':false//信用历史
			};
			self.bind();

		},
		bind:function(){
			var self = this;
			$('#btnClose').on('click',function(){
				$(this).parents('.mask').removeClass('show');
			})
			
			// 缴费方式联动
			$('#payWay').on('change',function(){				
				initSelect('#payTime');

				var selVal = getSelectVal('#payWay')['text'];
				if(selVal == '分期缴付'){
					$('#payTimeBox').removeClass('hide');
					
				}else if(selVal == '一次性缴付'){
					if(!$('#payTimeBox').hasClass('hide')){
						$('#payTimeBox').addClass('hide');
					}
				}
			});
			
			//下一步按钮
			$('#btnNext').on('click',callback=function(){
				$('#btnNext').off();
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

			//校验 被保人			
			/*if(!$('#insPeople').hasClass('checked')){
				showError('insPeople','请选择寿险保单被保人是否为本人');
				$('#btnNext').on('click',callback);
				return false;
			}*/

			//校验 保险公司
			/*if(!valiSelect('#insCompany')){
				showError('insCompany','请选择保险公司');
				$('#btnNext').on('click',callback);
				return false;
			}*/
			
			//校验 缴费方式
			var payWay = getSelectVal('#payWay')['text'];

			if(payWay.indexOf('请选择')>-1){
				$('#payWay').parents('.item-right').addClass('icon-error');
				showError('payWay','请选择缴费方式');
				$('#btnNext').on('click',callback);
				return false;

			}else if(payWay =='分期缴付'){	

				//校验 已缴期数
				if(!valiSelect('#payTime')){
					showError('payTime','请选择已缴期数');
					$('#btnNext').on('click',callback);
					return false;
				}
			
			}
			//校验 已生效时间

			if(!valiSelect('#insTime')){
				showError('insTime','请选择已生效时间');
				$('#btnNext').on('click',callback);
				return false;
			}
			//校验 被保人
			if(!valiSelect('#insPeople')){
				showError('insPeople','请选择被保人');
				$('#btnNext').on('click',callback);
				return false;
			}

			//校验 信用历史
			if(!valiSelect('#creditHistory')){
				showError('creditHistory','请选择房贷期限');
				$('#btnNext').on('click',callback);
				return false;
			}
			



			return true;


		},
		
		nextPage:function(){//update 2015-03-10
			var self = this;
			var rule =false;

			self.Field = {
				//'insCompany':getSelectVal('#insCompany')['text'],//保险公司
				'insTime':getSelectVal('#insTime')['text'],//已生效时间 2015-05-05 add
				'payWay':getSelectVal('#payWay')['text'],//交费方式
				'payTime':getSelectVal('#payTime')['text'],//已缴期数
				'insPeople':getSelectVal('#insPeople')['text'],//被保人
				'creditHistory':getSelectVal('#creditHistory')['text']//信用历史
			};

			var backData = {
				'livingcity':''//居住城市
			}
			//后台获值后请删除localStorage
			backData['livingcity'] = localStorage.getItem('livingcity') ||  '上海';
			

			//P2P寿险贷筛选条件
			var p2p_city_pass = vailCity(backData['livingcity'],'p2p');//城市是否为p2p城市

			//var insCompany_pass   = getSelectVal('#insCompany')['dataVal'] ==  'Y' ? true : false;//保险公司是否通过：7家
			var payWay_pass      = getSelectVal('#payWay')['dataVal'] ==  'Y' ? true : false;//缴费方式是否通过:分期缴费
			if(payWay){
				payWay_pass = getSelectVal('#payTime')['dataVal'] ==  'Y' ? true : false;//已缴期数是否通过：>=6个月
				
			}
			var insTime_pass = getSelectVal('#insTime')['dataVal'] ==  'Y' ? true : false;//已生效时间是否通过：>=6个月 //2015-05-05 upadate

			var insPeople_pass = getSelectVal('#creditHistory')['dataVal'] ==  'Y' ? true : false;	//信用历史是否通过	
			var creditHistory_pass = getSelectVal('#insPeople')['dataVal'] ==  'Y' ? true : false;	//被保人是否通过：本人	
		
			
			rule =  p2p_city_pass && insPeople_pass  && payWay_pass  && insTime_pass && creditHistory_pass; //2015-05-05 upadate

				
			if(rule){			
				alert('P2P-寿险贷');				
			}else{
				alert('资质不符');
			}



		}
	}
	sx.init();
})