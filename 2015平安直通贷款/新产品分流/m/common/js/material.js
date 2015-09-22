$(function(){

	//外部车险材料	
	var waibcx_data={

		'sfz':{'title':'二代身份证原件及复印件','src':'IDCard.jpg'} 
		,'clxsz':{'title':'投保车辆行驶证原件及复印件','src':'InsuredVehicleDrivingLicense.jpg'} 
		,'cldjz':{'title':'投保车辆登记证原件及复印件','src':'InsuredVehicleRegistration.jpg'}  
		,'bxd1':{'title':'商业险保单','src':'BusinessInsurancePolicy.jpg'}  
		,'bxd2':{'title':'交强险保单','src':'PayHighInsurancePolicy.jpg'}  
		,'sybxd':{'title':'银行柜面打印流水','src':'PrintWaterBankCounter.jpg'}  
		,'jzzm':{'title':'居住证明','src':'Proofofresidence.jpg'} 
		,'gzzm':{'title':'工作证明','src':'Workproof.jpg'} 

	};
	//业主贷材料
	var yezd_data = {
		'sfz':{'title':'二代身份证原件及复印件','src':'IDCard.jpg'} 
		,'jzzm':{'title':'居住证明','src':'Proofofresidence.jpg'} 
		,'gzzm':{'title':'工作证明','src':'Workproof.jpg'} 
		,'srzm':{'title':'收入证明','src':'Incomebankwater.jpg'} 
		,'fwdy':{'title':'房屋抵押合同原件','src':'HousingMortgageContract.jpg'} 
		,'fwhk':{'title':'房贷还款流水','src':'MortgageRepaymentSwater.jpg'} 
	};
	//薪金贷材料 平安员工
	var xinjd_pingan = {
		'sfz':{'title':'二代身份证原件及复印件','src':'IDCard.jpg'} 
		,'jzzm':{'title':'劳动合同','src':'LaborContract.jpg'} 
		,'gzzm':{'title':'平安员工工卡','src':'PingAnEmployeeWorkCard.jpg'} 
		,'srzm':{'title':'银行流水','src':'PrintWaterBankCounter.jpg'} 

	};
	//薪金贷材料 企业职员
	var xinjd_normal = {
		'sfz':{'title':'二代身份证原件及复印件','src':'IDCard.jpg'} 
		,'jzzm':{'title':'居住证明','src':'Proofofresidence.jpg'} 
		,'gzzm':{'title':'工作证明','src':'Workproof.jpg'} 
		,'srzm':{'title':'收入证明','src':'Incomebankwater.jpg'} 

	};
	//薪金贷材料 私营业主
	var xinjd_owner = {
		'sfz':{'title':'二代身份证原件及复印件','src':'IDCard.jpg'} 
		,'jzzm':{'title':'居住证明','src':'Proofofresidence.jpg'} 
		,'gzzm':{'title':'工作证明','src':'Workproof.jpg'} 
		,'srzm':{'title':'收入证明','src':'Incomebankwater.jpg'} 
		,'srzm':{'title':'租金发票或收据','src':'Incomebankwater.jpg'} 
		,'srzm':{'title':'本人名下的营业执照','src':'BusinessLicense.jpg'} 
		,'srzm':{'title':'物业租赁合同','src':'RentaLinvoice.jpg'} 

	};

	//寿险贷材料 
	var shouxd_data = {
		'sfz':{'title':'二代身份证原件及复印件','src':'IDCard.jpg'} 
		,'jjk':{'title':'工行/农行/建行借记卡一张，用于放款','src':''} 
		,'jzzm':{'title':'居住证明','src':'Proofofresidence.jpg'} 
		,'bdjp':{'title':'保单截屏','src':'sxbdxq.jpg'} 
	

	};


	//白领贷材料 
	var baild_data = {
		'sfz':{'title':'二代身份证原件及复印件','src':'IDCard.jpg'} 
		,'jjk':{'title':'工行/农行/建行借记卡一张，用于放款','src':''} 
		,'jzzm':{'title':'居住证明','src':'Proofofresidence.jpg'} 
		,'gzzm':{'title':'工作证明','src':'Workproof.jpg'} 

	};
	//P2P车主贷
	var p2p_czd_data = {

		'sfz':{'title':'二代身份证原件及复印件','src':'IDCard.jpg'} 
		,'clxsz':{'title':'投保车辆行驶证原件及复印件','src':'InsuredVehicleDrivingLicense.jpg'} 
		,'cldjz':{'title':'投保车辆登记证原件及复印件','src':'InsuredVehicleRegistration.jpg'}  
		,'bxd1':{'title':'商业险保单','src':'BusinessInsurancePolicy.jpg'}  
	
	}
	//P2P车贷授信

	var p2p_cdsx_data = {

		'sfz':{'title':'二代身份证原件及复印件','src':'IDCard.jpg'} 
		,'clxsz':{'title':'投保车辆行驶证原件及复印件','src':'InsuredVehicleDrivingLicense.jpg'} 
		,'zd':{'title':'近6个月信用卡账单','src':''}  
		,'creditCard':{'title':'车贷挂信用卡原件','src':''}  
	
	}
		//P2P业主贷
	var p2p_yzd_data = {

		'sfz':{'title':'二代身份证原件及复印件','src':'IDCard.jpg'} 
		,'fccl':{'title':'房产材料','src':''}  
		,'srzm':{'title':'收入证明','src':'Incomebankwater.jpg'} 
		,'syyz':{'title':'私营业主材料：营业执照副本原件+公章+经营场地租赁合同+经营场所租赁收据+股权证明资料','src':''}  
		,'jjk':{'title':'工农建招任意一张银行储蓄卡','src':''} 
	
	}

	
	

	var materail = {

		init:function(){
			var self = this;
			self.firItem = {};

			var type = '';//ajax 后台取值 productType、薪金贷工作类型
			var hash = window.location.hash;//hash传值，产品名称
			if(hash.length>1){
				type = hash.substr(1);
			}else{
				alert('无参数');
				return;
			}
			if(type =='waibcx'){
				self.firItem = waibcx_data;
			}else if(type == 'yezd'){
				self.firItem = yezd_data;
			}else if(type == 'pinganWorker'){
				self.firItem = xinjd_pingan;
			}else if(type == 'normalWorker'){
				self.firItem = xinjd_normal;
			}else if(type == 'owner'){
				self.firItem = xinjd_owner;
			}else if(type == 'shouxd'){
				self.firItem = shouxd_data;
			}else if(type == 'baild'){
				self.firItem =baild_data;
			}else if(type == 'p2p_czd'){
				self.firItem =p2p_czd_data;

			}else if(type == 'p2p_cdsx'){
				self.firItem =p2p_cdsx_data;

			}else if(type == 'p2p_yzd'){
				self.firItem = p2p_yzd_data;

			}

			self.creatList();
			self.showImg();




		},
		creatList:function(){
			var self = this;
			var $list = $('#list');
			$list.empty();
			var str = '';
			var i = 0;

			for(var key in self.firItem){
				var title = self.firItem[key]['title'];
				var imgSrc = self.firItem[key]['src'];
				str = '<li data-imgSrc='+imgSrc+'><span>0'+(++i)+'</span>'+title+'</li>';
				$list.append(str);
			}

		},aa
		showImg:function(){
			var temp_scrollTop = 0;
			$('#list').on('click','li',function(){
				var imgSrc = $(this).attr('data-imgSrc');
				if(imgSrc==''){
					alert('无样例');
					return;
				}

				$('#img').attr('src','http://placehold.it/350x150&text=Loading...');

				temp_scrollTop = $(window).scrollTop();
				var minHeight = getDocHeight();
				var $this = $(this);

				var title = $this.text().substr(2);
				imgSrc = '../common/images/material/'+$.trim($this.attr('data-imgSrc'));	

				var img = new Image();// 创建img对象				
				img.src = imgSrc;// 改变图片的src				
				img.onload = function(){
					 $('#img').attr('src',imgSrc).css('max-width',img.width);// 加载完成执行
					
				};
			
				$('#popup_material').addClass('slideLeft').css('min-height',minHeight);
				$(window).scrollTop(0);
				$('#headerTitle').text(title);
				

			});

			$('#popup_material').find('.icon-close').on('click',function(){
				$('#popup_material').removeClass('slideLeft');
		        $(window).scrollTop(temp_scrollTop);
			});



		}
	}
	materail.init();
})