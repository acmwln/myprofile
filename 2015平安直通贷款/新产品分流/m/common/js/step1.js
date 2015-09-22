$(function(){
	var chezd_phoneVali = {
		init:function(){
			var self = this;
			self.ajax_phoneNum = '181****1989';//后台拿到的手机号
			self.bind();

		},
		bind:function(){
			var self = this;
			// add 01-26 新增输入框失去焦点格式验证
			comm.valiInpBlur('#IDCard',/^(?:\d{8}(?:0[1-9]|1[0-2])[0123]\d{4}|\d{6}(?:18|19|20)\d{2}(?:0[1-9]|1[0-2])[0123]\d{4}[0-9Xx])?$/);
			$('#phoneNum').on('input',function(){
				var val = $(this).val();
				if(val.indexOf('*')>-1){
					$(this).val(' ');
				}

			});
			$('#phoneNum').on('blur',function(){
				var val = $(this).val();
				if(val == self.ajax_phoneNum){
					return;
				}else{
					comm.valiInpBlur('#phoneNum',/^1(3[0-9]|5[0-35-9]|8[01235-9])\d{8}$/);
				}
				
			});
		
			comm.valiInpBlur('#codeInp',/^\d{6}$/g);

			//验证码按钮
			$('#btnCode').on('click',function(){
				$('.icon-error').removeClass('icon-error r0');

				//手机号前台验证
				var phoneNum = $.trim($('#phoneNum').val());
				var phoneVali = phoneValidate(phoneNum,self.ajax_phoneNum);
				if(!phoneVali) return;

				if(!$(this).hasClass('disabled')){
					$('#phoneNum').addClass('disabled').attr('disabled',true);
					countdown(120,$('#btnCode'));
				}
			})
			//验证手机号 下一步按钮
			$('#btnNext').on('click',function(){
				if($(this).hasClass('icon-load')){
	 				alert('页面正在努力加载中，请耐心等待')
	 				return;
	 			}
				$('.item-right').removeClass('icon-error r0');
				
				
				//身份证号验证
				var ID = $.trim($('#IDCard').val());
				var idCardVali = idCardValidate('#IDCard');
				if(!idCardVali) return;




				//手机号前台验证
				var phoneNum = $.trim($('#phoneNum').val());
				var phoneVali = phoneValidate(phoneNum,self.ajax_phoneNum);
				if(!phoneVali) return;

				//验证码前台验证
				var codeVal = $('#codeInp').val();
				if(codeVal == null || codeVal == ''){
					$('#codeInp').parent().addClass('icon-error r0');
					showError('codeInp','请输入验证码');
					return;

				}else if(!/^\d{6}$/g.test(codeVal)){
					$('#codeInp').parent().addClass('icon-error r0');
					showError('codeInp','验证码格式有误');
					return;
				}
				//ajax验证 验证码

				var isPass = true;
				if(isPass){
					$(this).text('加载中').addClass('icon-load');				
					window.location = 'chezd.html';	
				}
				
												
			});

			

		}
		
	}
	chezd_phoneVali.init();
})
