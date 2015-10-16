
var HGApp = {
	show: function(){
		cordova.exec(null, null, "HGApp", "show", []);
	},
	back: function(){
		cordova.exec(null, null, "HGApp", "back", []);
	},
	close: function(){
		cordova.exec(null, null, "HGApp", "close", []);
	},
	clearCache: function(){
		cordova.exec(null, null, "HGApp", "clearCache", []);
	}
};

var HGUtil = {
	toast: function(msg){
		if (arguments.length != 1) {
			console.log('arguments not right!');
			return ;
		}
		try{
			cordova.exec(null, null, "HGUtil", "toast", [msg]);
		}catch(e){
			console.log('error: '+e);
		}
	},
	picker: function(title, pickerflag, items, success, fail){
		if (arguments.length != 5) {
			console.log('arguments not right!');
			return ;
		}
		try{
			cordova.exec(success, fail, "HGUtil", "picker", [title, pickerflag, items]);
		}catch(e){
			console.log('error: '+e);
		}
	},
	copy: function(msg, success, fail){
		if (arguments.length != 1) {
			console.log('arguments not right!');
			return ;
		}
		try{
			cordova.exec(success, fail, "HGUtil", "copy", [msg]);
		}catch(e){
			console.log('error: '+e);
		}
	},
	paste: function(callback){
		if (arguments.length != 1) {
			console.log('arguments not right!');
			return ;
		}
		try{
			cordova.exec(callback, null, "HGUtil", "paste", []);
		}catch(e){
			console.log('error: '+e);
		}
	}
};

var HGPreview = {
	type:{
		SHUSHENG: 	1,
		OFFICE: 	2,
		TIFF: 		3,
		PDF: 		4,
		IMAGE: 		5,
		TXT: 		6
	},
	show: function(type, param, success, fail){
		if (arguments.length != 4) {
			console.log('arguments not right!');
			return ;
		}
		try{
			if (HGPreview.type.SHUSHENG == type || 
					HGPreview.type.OFFICE == type ||
					HGPreview.type.TIFF == type ||
					HGPreview.type.PDF == type ||
					HGPreview.type.IMAGE == type ||
					HGPreview.type.TXT == type) {
			}else{
				console.log('HGPreview error type: '+type);
				return ;
			}
			cordova.exec(success, fail, "HGPreview", "show", [type, param]);
		}catch(e){
			console.log('error: '+e);
		}
	}
};

var HGRequest = {
	service: function(method, server, url, params, jsonData, success, fail){
		if (arguments.length != 7) {
			console.log('arguments not right!');
			return ;
		}
		try{
			cordova.exec(success, fail, "HGRequest", method, [server, url, params, jsonData]);
		}catch(e){
			console.log('error: '+e);
		}
	},
	get: function(server, url, params, jsonData, success, fail){
		if (arguments.length != 6) {
			console.log('arguments not right!');
			return ;
		}
		HGRequest.service("GET", server, url,  params, jsonData, success, fail);
	},
	get4Json: function(server, url, params, success, fail){
		if (arguments.length != 5) {
			console.log('arguments not right!');
			return ;
		}
		HGRequest.service("GET", server, url, params, true, success, fail);
	},
	post: function(server, url, params, jsonData, success, fail){
		if (arguments.length != 6) {
			console.log('arguments not right!');
			return ;
		}
		HGRequest.service("POST", server, url, params, jsonData, success, fail);
	},
	post4Json: function(server, url, params, success, fail){
		if (arguments.length != 5) {
			console.log('arguments not right!');
			return ;
		}
		HGRequest.service("POST", server, url, params, true, success, fail);
	}
};

var HGUser = {
	getUserInfo: function(success, fail){
		if (arguments.length != 2) {
			console.log('arguments not right!');
			return ;
		}
		try{
			cordova.exec(success, fail, "HGUser", "getUserInfo", []);
		}catch(e){
			console.log('error: '+e);
		}
	}
};

var HGStatus = {
	getStatus: function(success, fail){
		if (arguments.length != 2) {
			console.log('arguments not right!');
			return ;
		}
		try{
			cordova.exec(success, fail, "HGStatus", "getStatus", []);
		}catch(e){
			console.log('error: '+e);
		}
	}
};

var HGUserCert = {
		getUserCert: function(success, fail){
		if (arguments.length != 2) {
			console.log('arguments not right!');
			return ;
		}
		try{
			cordova.exec(success, fail, "HGUserCert", "getUserCert", []);
		}catch(e){
			console.log('error: '+e);
		}
	}
};
