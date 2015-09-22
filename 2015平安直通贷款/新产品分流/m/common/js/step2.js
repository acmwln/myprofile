$(function(){


var order = {
	init:function(){
		var self = this;
    this.Field = {};
		self.bind();

	},
	bind:function(){
    var self = this;
    var temp_scrollTop = 0;

    //预约门店
		$('#orderStore').on('click',function(){
      temp_scrollTop = $(window).scrollTop();
		  $('#popup_store').addClass('slideLeft');
      var docHeight = getDocHeight();
      $('#popup_store').css('min-height',docHeight);
      $(window).scrollTop(0);
		});
		$('#storeList').on('click',function(e){
      e.preventDefault();
      $('input').blur();
      
		  var target = e.target;
		  var storeAddr = $(target).text();
		  $('#popup_store').removeClass('slideLeft');
      $(window).scrollTop(temp_scrollTop);

      $('#orderStore').text(storeAddr).parent().removeClass('cgray');
		  $('#btnMap').removeClass('hide');
		});

    //预约日期
 
		$('#orderCalender').on('click',function(e){
      e.stopPropagation(); 
      e.preventDefault();
		  date();
		});

    //预约时间
    $('#orderTime').on('click',function(){
        temp_scrollTop = $(window).scrollTop();
      $('#popup_time').addClass('slideLeft');
      var docHeight = getDocHeight();
      $('#popup_time').css('min-height',docHeight);
      $(window).scrollTop(0);
    });
    $('#timeList').on('click',function(e){
      e.preventDefault();
      $('input').blur();
      var target = e.target;
      if(target.nodeName.toUpperCase() == 'LI'){
        var time = $(target).text();
        $('#popup_time').removeClass('slideLeft');
        $(window).scrollTop(temp_scrollTop);
        $('#orderTime').text(time).parent().removeClass('cgray');

      }else{
        return;
      }
    
    });
    // 浮层
    $('.popup-right').find('.icon-close').on('click',function(){
      $(this).parents('.popup-right').removeClass('slideLeft');
          $(window).scrollTop(temp_scrollTop);
    });

    //下一步
    $('#btnNext').on('click',function(){
      if(!self.validate()) return;
      if($(this).hasClass('icon-load')){
        alert('页面正在努力加载中，请耐心等待');
        return;
      }
      $(this).text('加载中').addClass('icon-load');
      window.location = 'shouxd_orderInfo.html';

      // var hash = window.location.hash;
      // if(hash == '#chezd'){
      //   window.location = 'chezd_orderInfo.html';
      // }else if(hash == '#waibcx'){
      //    window.location = 'waibcx_orderInfo.html';
      // }else if(hash =='#yezd' ){
      //     window.location = 'yezd_orderInfo.html';
      // }else if(hash =='#xinjd'){
      //   window.location = 'xinjd_orderInfo.html';
      // }

    });

	},
  validate:function(){
    var self = this;
    // 城市验证
    var temp_orderCity = getSelectVal('#orderCity')['text'];
    if(temp_orderCity.indexOf('请选择')>-1 || temp_orderCity == null || temp_orderCity == "" ) {
      $('#orderCity').parent().addClass('icon-error');
      showError('orderCity','请预约城市');
      return false;
    }else{
      self.Field['orderCity'] = temp_orderCity;
    }

    // 门店验证
    var temp_store = $.trim($('#orderStore').text());
    if(temp_store.indexOf('请选择')>-1 || temp_store == null || temp_store == "" ) {
      $('#orderStore').parent().addClass('icon-error');
      showError('orderStore','请预约门店');
      return false;
    }else{
      self.Field['orderStore'] = temp_store;
    }

    // 日期验证
    var temp_date = $.trim($('#orderCalender').text());
    if(temp_date.indexOf('请选择')>-1 || temp_date == null || temp_date == "" ) {
      $('#orderCalender').parent().addClass('icon-error');
      showError('orderCalender','请预约日期');
      return false;
    }else{
      self.Field['orderDate'] = temp_date;
    }

    // 时间验证
    var temp_time = $.trim($('#orderTime').text());
    if(temp_time.indexOf('请选择')>-1 || temp_time == null || temp_time == "" ) {
      $('#orderTime').parent().addClass('icon-error');
      showError('orderTime','请预约时间段');
      return false;
    }else{
      self.Field['orderTime'] = temp_time;
    }
    return true;

  }
}

order.init();
});
function date(){  
  var temp_scrollTop = $(window).scrollTop();
  $(window).scrollTop(0);
  console.log($.now());
  myCalendar.init();
 
  $("#datepicker").datepicker();
    $.datepicker.regional['zh-CN'] = {  
      monthNames: ['1月','2月','3月','4月','5月','6月', '7月','8月','9月','10月','11月','12月'],  
      dayNamesMin: ['日','一','二','三','四','五','六'],  
      dateFormat: 'yy-mm-dd',  
      firstDay: 1,  
      initStatus: '请选择日期',  
      isRTL: false,
      minDate:myCalendar.minDate,
      maxDate:myCalendar.maxDate,
      showMonthAfterYear:true,
      hideIfNoPrevNext:false,
      numberOfMonths:myCalendar.numberOfMonths
    };  
    $.datepicker.setDefaults($.datepicker.regional['zh-CN']); 
    myCalendar.show();
    console.log($.now());
}

  
  // });