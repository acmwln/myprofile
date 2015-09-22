$(function(){

	var headerHtml = 
	'<header>'
	+'	<div class="topbar-right">'
	+'		<p id="btnRule"><img src="../common/images/topbar-rule.png" alt=""></p>'
	+'		<p id="btnProduct"><img src="../common/images/topbar-product.png" alt=""></p>'	
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


	var productDom1= 
	'<section class="popup-right" id="popup-product">'
	+'	<header>'
	+'		<span class="icon-close" id="btnClose"></span>'
	+'		<h1>产品介绍</h1>'		   
	+'	</header>';

	var productDom3 = 
	'<ul id="productBg">'
	+'			<li>无抵押</li>'
	+'			<li>材料少</li>'
	+'			<li>放款快</li>'
	+'		</ul>'
	+'	</div>'
	+'</section>';

	var prodcutDom2 = '';
	var productType = '';//产品类型（ajax取值）
	productType = getType();

/*	if(productType == 'shouxd'){//寿险贷
		productDom2=
			'	<div class="content">'
			+'		<p id="intro1"><span id="proName">寿险贷</span>平安特为持有寿险保单的客户提供专享资金周转服务无抵押，申请易，最快当天放款</p>'
			+'		<ul id="intro2">'
			+'			<li>'
			+'				<p>贷款额度</p>'
			+'				<p><span class="cred">1-30万</span></p>'
			+'			</li>'
			+'			<li>'
			+'				<p>贷款期数</p>'
			+'				<p>12、24、36个月（可提前还款）</p>'
			+'			</li>'
			+'			<li>'
			+'				<p>费用</p>'
			+'				<p>最低年化利息8.4%<br/>每月最低担保费率0.8%</p>'
			+'			</li>'					
			+'		</ul>'
			+'		<ul id="intro3">'
			+'			<li>'
			+'				<p>适用人群</p>'
			+'				<p>1、年龄21-55周岁<br/>2、现居住地满6个月以上</p>'
			+'			</li>'
			+'			<li>'
			+'				<p>申请条件</p>'
			+'				<p style="font-size:1rem;">寿险保单（如：交强险、商业险）必须在有效期内，被保险人和车主必须一致</p>'
			+'			</li>'				
			+'		</ul>';
		

	}else if(productType == 'baild'){//白领贷
		productDom2=
			'	<div class="content">'
			+'		<p id="intro1"><span id="proName">白领贷</span>平安特为拥有稳定收入的客户提供专享资金周转服务无抵押，申请易，最快当天放款</p>'
			+'		<ul id="intro2">'
			+'			<li>'
			+'				<p>贷款额度</p>'
			+'				<p><span class="cred">1-30万</span>（月收入*14.4）</p>'
			+'			</li>'
			+'			<li>'
			+'				<p>贷款期数</p>'
			+'				<p>12、24、36个月（可提前还款）</p>'
			+'			</li>'
			+'			<li>'
			+'				<p>费用</p>'
			+'				<p>最低年化利息8.4%<br/>每月最低担保费率0.8%</p>'
			+'			</li>'					
			+'		</ul>';
		

	}
	else if(productType == 'chezd'){//实时授信
		productDom2=
			'	<div class="content">'
			+'		<p id="intro1"><span id="proName">车主贷</span>平安特为平安车险客户提供专享资金周转服务，无抵押，贷款易，最快当天放款。</p>'
			+'		<ul id="intro2">'
			+'			<li>'
			+'				<p>贷款额度</p>'
			+'				<p><span class="cred">2~15万</span></p>'
			+'			</li>'
			+'			<li>'
			+'				<p>贷款期数</p>'
			+'				<p>12、24、36个月（可提前还款）</p>'
			+'			</li>'
			+'			<li>'
			+'				<p>费用</p>'
			+'				<p>年化利息<span class="cred">7.84%↓ - 8.4%↓</span><br/>+每月保费1.7%</p>'
			+'			</li>'					
			+'		</ul>';
		

	}else if(productType == 'waibcx'){//外部车险
		productDom2=
			'	<div class="content">'
			+'		<p id="intro1"><span id="proName">非平安车险贷</span>平安特为非平安直通车险客户提供专享资金周转服务，无抵押，贷款易，最快当天放款。</p>'
			+'		<ul id="intro2">'
			+'			<li>'
			+'				<p>贷款额度</p>'
			+'				<p><span class="cred">2~15万</span></p>'
			+'			</li>'
			+'			<li>'
			+'				<p>贷款期数</p>'
			+'				<p>12、24、36个月（可提前还款）</p>'
			+'			</li>'
			+'			<li>'
			+'				<p>费用</p>'
			+'				<p>年化利息<span class="cred">7.84%↓ - 8.4%↓</span><br/>+每月保费1.7%</p>'
			+'			</li>'					
			+'		</ul>';
			

	}else if(productType == 'yezd'){//业主贷
		productDom2=
			'	<div class="content">'
			+'		<p id="intro1"><span id="proName">业主贷</span>平安特为房贷客户提供专享资金周转服务，无抵押，贷款易，最快当天放款。</p>'
			+'		<ul id="intro2">'
			+'			<li>'
			+'				<p>贷款额度</p>'
			+'				<p><span class="cred">2~15万</span></p>'
			+'			</li>'
			+'			<li>'
			+'				<p>贷款期数</p>'
			+'				<p>12、24、36个月（可提前还款）</p>'
			+'			</li>'
			+'			<li>'
			+'				<p>费用</p>'
			+'				<p>年化利息<span class="cred">7.84%↓ - 8.4%↓</span><br/>+每月保费（0.9%-1.9%之间）</p>'
			+'			</li>'					
			+'		</ul>';

	}else if(productType == 'xinjd'){//薪金贷
		var workType = '';//职业类型(ajax 取值)
		if(workType == 'owner'){//自雇人士
			productDom2=
			'	<div class="content">'
			+'		<p id="intro1"><span id="proName">实时授信</span>平安特为拥有稳定收入的客户提供专享资金周转服务，无抵押，贷款易，最快当天放款。</p>'
			+'		<ul id="intro2">'
			+'			<li>'
			+'				<p>贷款额度</p>'
			+'				<p><span class="cred">2~15万</span></p>'
			+'			</li>'
			+'			<li>'
			+'				<p>贷款期数</p>'
			+'				<p>12、24、36个月（可提前还款）</p>'
			+'			</li>'
			+'			<li>'
			+'				<p>费用</p>'
			+'				<p>年化利息<span class="cred">7.84%↓ - 8.4%↓</span><br/>+每月保费（0.9%-1.9%之间）</p>'
			+'			</li>'					
			+'		</ul>';

		}else{//平安员工|企业职员
			productDom2=
			'	<div class="content">'
			+'		<p id="intro1"><span id="proName">实时授信</span>平安特为拥有稳定收入的客户提供专享资金周转服务，无抵押，贷款易，最快当天放款。</p>'
			+'		<ul id="intro2">'
			+'			<li>'
			+'				<p>贷款额度</p>'
			+'				<p><span class="cred">1-15万</span></p>'
			+'			</li>'
			+'			<li>'
			+'				<p>贷款期数</p>'
			+'				<p>12、24、36个月（可提前还款）</p>'
			+'			</li>'
			+'			<li>'
			+'				<p>费用</p>'
			+'				<p>年化利息<span class="cred">7.84%↓ - 8.4%↓</span><br/>每月担保费率（1.2%-1.9%之间）</p>'
			+'			</li>'					
			+'		</ul>';

		}
		
	}*/
	if(productType == 'p2p_cdsx'){//P2P车贷授信 2015-04-13
		productDom2=
		'	<div class="content">'
		+'		<p id="intro1"><span id="proName">平安贷款</span>平安专业为您订制贷款产品提供资金周转服务</p>'
		+'		<ul id="intro2">'
		+'			<li>'
		+'				<p>贷款额度</p>'
		+'				<p><span class="cred">1-30万</span></p>'
		+'			</li>'
		+'			<li>'
		+'				<p>贷款期数</p>'
		+'				<p>12、24、36个月（可提前还款）</p>'
		+'			</li>'
		+'			<li>'
		+'				<p>每月费率</p>'
		+'				<p>1.26% - 2.28%</p>'
		+'			</li>'					
		+'		</ul>';


	}else{
		productDom2=
		'	<div class="content">'
		+'		<p id="intro1"><span id="proName">平安贷款</span>平安专业为您订制贷款产品提供资金周转服务</p>'
		+'		<ul id="intro2">'
		+'			<li>'
		+'				<p>贷款额度</p>'
		+'				<p><span class="cred">2-15万</span></p>'
		+'			</li>'
		+'			<li>'
		+'				<p>贷款期数</p>'
		+'				<p>12、24、36个月（可提前还款）</p>'
		+'			</li>'
		+'			<li>'
		+'				<p>每月费率</p>'
		+'				<p>1.26% - 2.28%</p>'
		+'			</li>'					
		+'		</ul>';

	}

	var productDom = productDom1+productDom2+productDom3;




	
	$('#btnRule').on('touchend',function(){
		// alert(3);
		popup.init(ruleDom,'popup-rule');
		popup.show();
	});
	$('#btnProduct').on('touchend',function(){
		// alert(2);
		popup.init(productDom,'popup-product');
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

