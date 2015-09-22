$(function(){

	var productType = getProType();
	//新增产品对应材料 2015-04-10
	var materialData ={
		'p2p_czd':['二代身份证原件及复印件','投保车辆行驶证原件及复印件','投保车辆登记证原件及复印件','商业险保单'],//P2P车主贷
		'p2p_cdsx':['二代身份证原件及复印件','投保车辆行驶证原件及复印件','近2个月信用卡账单','车贷挂信用卡原件'],//P2P车贷授信
		'p2p_yzd':['二代身份证原件及复印件','房产材料','收入证明','私营业主材料：营业执照副本原件+公章+经营场地租赁合同+经营场所租赁收据+股权证明资料','工农建招任意一张银行储蓄卡']//P2P业主贷
	}

	var listArr = [];
	for(var key in materialData){
		if(key == productType){
			listArr = materialData[key];

		}
		

	}
	creatList(listArr,productType);
	
});


function creatList(arr,productType){
	$('#materiaBox').html('');
	var productType = productType || '';
	var len  = arr.length;
	if(len && productType){
		var str = '<li>'+arr[0]+'<a href="../../material.html#'+productType+'" class="fr" id="btnViewDemo">查看样例</a></li>';	
		for(var i=1; i<len; i++){
			str += '<li>'+arr[i]+'</li>'
		}
		$('#materiaBox').html(str);
	}
	

}
//获得产品类型 请重写此方法
function getProType(){
	return window.location.hash.split('#')[1];
}

	





