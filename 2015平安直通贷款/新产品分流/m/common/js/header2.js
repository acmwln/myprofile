$(function(){

	var headerHtml = 
	'<header>'
	+'	<div class="topbar-right">'
	+'		<p id="btnRule" style="float:right;"><img src="../common/images/topbar-rule.png" alt=""></p>'
	+'	</div>'
	+'	<p class="logoBox"><img src="../common/images/logo.png" alt=""></p>'
	+'</header>';
	$(document.body).prepend(headerHtml);

	var ruleDom = 
	'<div class="popup" id="popup-rule">'
	+'	<div class="p12">'
	+'		<h1>隐私条款</h1>'
	+'		<p class="intro">本公司的业务是建立在与客户彼此信任的基础之上的，为了提供更优质的客户服务和产品。为了使您提供的所有信息都能得到机密保障，我们采用以下关于信息保护的政策：'			
	+'		</p>'			
	+'		<ul>'
	+'			<li>'						
	+'				平安贷款服务热线收集信息的范围仅限于那些本公司认为对了解您的财务需求和开展业务所必需的相关资料。'						
	+'			</li>'
	+'			<li>'
	+'				平安贷款服务热线将对客户提供的信息严格保密，除具备下列情形之一外，不会向任何外部机构披露：'
	+'				<div class="mlr10 ti0">'
	+'					- 经过客户事先同意而披露；<br/>'
	+'					- 应法律法规的要求而披露；<br/>'
	+'					- 应政府部门或其他代理机构的要求而披露；<br/>'
	+'					- 应上级监管机构的要求而披露；<br/>'
	+'				</div>'
	+'			</li>'
	+'			<li>平安贷款服务热线尽力确保对客户的信息记录是准确和及时的。</li>'
	+'			<li>平安贷款服务热线设有严格的安全系统，以防止未经授权的任何人、包括本公司的职员获取客户信息。</li>'
	+'			<li>因服务必要而委托的第三方，在得到本公司许可获取客户的个人信息时，都被要求严格遵守保密责任。</li>'
	+'		</ul>'		
	+'	</div>'
	+'	<div class="btn" id="btnClose">关闭</div>'
	+'</div>';







	
	$('#btnRule').on('touchend',function(){
		// alert(3);
		popup.init(ruleDom,'popup-rule');
		popup.show();
	});
	
});
// 隐私条款、产品介绍浮层
var popup = {
	popupId:'',
	$obj:null,
	$btnClose:null,
	$mask:$('#mask'),
	$html:'',
	init:function(inserHtml,id){
		var self = this;
		self.$html =inserHtml;
		self.popupId = id;
		self.append(self.$html);

		self.$obj = $('#'+self.popupId);


		self.$btnClose = self.$obj.find('#btnClose');
		self.bind();
	},
	append:function(){
		var self = this;
		if(!$('#'+self.popupId).length){
			$(document.body).append(self.$html);
		}

	

	},
	bind:function(){
		var self = this;

		self.$btnClose.on('click',function(){
			self.hide();

		});
	},
	show:function(){
		var self = this;
		var docH =$(document).height();

		self.$mask.show().css('min-height',docH);
		

		self.$obj.addClass('fadeIn');

	},
	hide:function(){
		var self = this;
		$('input').blur();
		self.$mask.hide();
		self.$obj.removeClass('fadeIn').hide();

	}
}
function getType(){
	var url = window.location.href;
	var type = '';
	if(url.indexOf('chezd')>-1){
		type = 'chezd';
	}else if(url.indexOf('waibcx')>-1){
		type = 'waibcx';
	}else if(url.indexOf('yezd')>-1){
		type = 'yezd';
	}else if(url.indexOf('xinjd')>-1){
		type = 'xinjd';
	}else if(url.indexOf('shouxd')>-1){
		type = "shouxd";
	}else if(url.indexOf('baild')>-1){
		type = 'baild';
	}
	return type;
}

