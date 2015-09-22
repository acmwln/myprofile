$(function(){
	var jdcx = {
		getProcess:function(){
             // var process =8;
            var process = Math.floor(Math.random()*8+1);
            console.log(process)
            return process; 
		},
		getTime:function(){
			var timeArr = ['03-04 17:00','03-05 16:00','03-06 14:00','03-07','03-08','03-09','03-10','03-11'];
			return timeArr;
		},
		init:function(){
			var self = this;
			var num = self.getProcess();
			var timeArr = self.getTime();
			self.creatDom(timeArr,num);
			switch(num){
				case 1:
                var circle1 = new circle({id:'circle1',deg:50});
                var circle2 = new circleGray('circle2');
				var circle3 = new circleGray('circle3');
				break;
                case 2:
                var circle1 = new circle({id:'circle1',deg:100});
                var circle2 = new circleGray('circle2');
                var circle3 = new circleGray('circle3');
                break;
                case 3:
                // var circle1 = new circle({id:'circle1',deg:100});
                var circle1 = new circleGray('circle1',true);
                var circle2 = new circle({id:'circle2',deg:25});
                var circle3 = new circleGray('circle3');
                break;
                case 4:
                // var circle1 = new circle({id:'circle1',deg:100})
                var circle1 = new circleGray('circle1',true);
                var circle2 = new circle({id:'circle2',deg:50});
                 var circle3 = new circleGray('circle3');
                break;
                case 5:
                // var circle1 = new circle({id:'circle1',deg:100})
                var circle1 = new circleGray('circle1',true);
                var circle2 = new circle({id:'circle2',deg:75})
                 var circle3 = new circleGray('circle3');
                break;
                case 6:
                // var circle1 = new circle({id:'circle1',deg:100})
                var circle1 = new circleGray('circle1',true);
                var circle2 = new circle({id:'circle2',deg:100})
                 var circle3 = new circleGray('circle3');
                break;
                case 7:
                // var circle1 = new circle({id:'circle1',deg:100})
                // var circle2 = new circle({id:'circle2',deg:100})
                var circle1 = new circleGray('circle1',true);
                var circle2 = new circleGray('circle2',true,'2');
                var circle3 = new circle({id:'circle3',deg:50})
                break;
                case 8:
                // var circle1 = new circle({id:'circle1',deg:100})
                // var circle2 = new circle({id:'circle2',deg:100})
                var circle1 = new circleGray('circle1',true);
                var circle2 = new circleGray('circle2',true,'2');
                var circle3 = new circle({id:'circle3',deg:100})
                break;
			}

		},
		creatDom:function(timeArr,num){
			var self = this;
			switch(num){
				case 1:
				creat1();
				break;
                case 2:
                creat2();
                break;
                case 3:
                creat3();
                break;
                case 4:
                creat4();
                break;
                case 5:
                creat5();
                break;
                case 6:
                creat6();
                break;
                case 7:
                creat7();
                break;
                case 8:
                creat8();
                break;
			}

			function creat1(){
				$('#section1').addClass('active');
				var $cont1 = $('#content1');
				var str = 
				'<li class="active">'
                +'<span class="time fr">'+timeArr[0]+'</span>'
				+'	<h2>申请已提交</h2>'
			    +'    <p>正在为您分配贷款专员...</p>'
			    +'</li>';
			    $cont1.html(str);
			}

            function creat2(){
                $('#section1').addClass('active');
                var $cont1 = $('#content1');
                var str = 
                '<li>'
                +'<span class="time fr">'+timeArr[0]+'</span>'
                +'  <h2>申请已提交</h2>'
                +'</li>'
                + '<li class="active">'
                +'<span class="time fr">'+timeArr[1]+'</span>'
                +'  <h2>等待贷款专员电话与您联系</h2>'
                +'</li>';
                $cont1.html(str);


            }

             function creat3(){
                $('#section1').addClass('actived');
                $('#section2').addClass('active');
                var $cont1 = $('#content1');
                var str = 
                '<li>'
                +'<span class="time fr">'+timeArr[0]+'</span>'
                +'  <h2>申请已提交</h2>'
                +'</li>'
                + '<li>'
                +'<span class="time fr">'+timeArr[1]+'</span>'
                +'  <h2>等待贷款专员电话与您联系</h2>'
                +'</li>';
                $cont1.html(str);

                var $cont2 = $('#content2');
                var str = 
                '<li class="active">'
                +'<span class="time fr">'+timeArr[2]+'</span>'
                +'  <h2>申请已确认</h2>'
                +'  <p>请于2015-03-05携带您的个人贷款材料至[XXXX]门店审核（请以贷款专员与您确认的时间为准！）</p>'
                +'  <p><span class="btn fl">网点信息</span><span class="btn fr">材料详情</span></p>'
                +'</li>';
                $cont2.html(str);


            }
            function creat4(){
                $('#section1').addClass('actived');
                $('#section2').addClass('active');
                var $cont1 = $('#content1');
                var str = 
                '<li>'
                +'<span class="time fr">'+timeArr[0]+'</span>'
                +'  <h2>申请已提交</h2>'
                +'</li>'
                + '<li>'
                +'<span class="time fr">'+timeArr[1]+'</span>'
                +'  <h2>等待贷款专员电话与您联系</h2>'
                +'</li>';
                $cont1.html(str);

                var $cont2 = $('#content2');
                var str = 
                '<li class="active">'
                +'<span class="time fr">'+timeArr[3]+'</span>'
                +'  <h2>申请已确认</h2>'
                +'  <p>请于2015-03-05携带您的个人贷款材料至[XXXX]门店审核（请以贷款专员与您确认的时间为准！）</p>'
                +'  <p><span class="btn fl">网点信息</span><span class="btn fr">材料详情</span></p>'
                +'</li>';
               
                $cont2.html(str);


            }

            function creat5(){
                $('#section1').addClass('actived');
                $('#section2').addClass('active');
                var $cont1 = $('#content1');
                var str = 
                '<li>'
                +'<span class="time fr">'+timeArr[0]+'</span>'
                +'  <h2>申请已提交</h2>'
                +'</li>'
                + '<li>'
                +'<span class="time fr">'+timeArr[1]+'</span>'
                +'  <h2>等待贷款专员电话与您联系</h2>'
                +'</li>';
                $cont1.html(str);

                var $cont2 = $('#content2');
                var str = 
                '<li>'
                +'<span class="time fr">'+timeArr[3]+'</span>'
                +'  <h2>申请已确认</h2>'
                +'</li>'
                +'<li class="active">'
                +'<span class="time fr">'+timeArr[4]+'</span>'
                +'  <h2>初审审核已通过</h2>'
                +'</li>';
                $cont2.html(str);


            }

            function creat6(){
                $('#section1').addClass('actived');
                $('#section2').addClass('active');
                var $cont1 = $('#content1');
                var str = 
                '<li>'
                +'<span class="time fr">'+timeArr[0]+'</span>'
                +'  <h2>申请已提交</h2>'
                +'</li>'
                + '<li>'
                +'<span class="time fr">'+timeArr[1]+'</span>'
                +'  <h2>等待贷款专员电话与您联系</h2>'
                +'</li>';
                $cont1.html(str);

                var $cont2 = $('#content2');
                var str = 
                '<li>'
                +'<span class="time fr">'+timeArr[3]+'</span>'
                +'  <h2>申请已确认</h2>'
                +'</li>'
                +'<li>'
                +'<span class="time fr">'+timeArr[4]+'</span>'
                +'  <h2>初审审核已通过</h2>'
                +'</li>'
                +'<li class="active">'
                +'<span class="time fr">'+timeArr[5]+'</span>'
                +'  <h2>审核已通过，待门店签约</h2>'
                +'</li>';
                $cont2.html(str);

            }

            function creat7(){
                $('#section1').addClass('actived');
                $('#section2').addClass('actived');
                $('#section3').addClass('active');
                var $cont1 = $('#content1');
                var str = 
                '<li>'
                +'<span class="time fr">'+timeArr[0]+'</span>'
                +'  <h2>申请已提交</h2>'
                +'</li>'
                + '<li>'
                +'<span class="time fr">'+timeArr[1]+'</span>'
                +'  <h2>等待贷款专员电话与您联系</h2>'
                +'</li>';
                $cont1.html(str);

                var $cont2 = $('#content2');
                var str = 
                '<li>'
                +'<span class="time fr">'+timeArr[3]+'</span>'
                +'  <h2>申请已确认</h2>'
                +'</li>'
                +'<li>'
                +'<span class="time fr">'+timeArr[4]+'</span>'
                +'  <h2>初审审核已通过</h2>'
                +'</li>'
                +'<li>'
                +'<span class="time fr">'+timeArr[5]+'</span>'
                +'  <h2>审核已通过，待门店签约</h2>'
                +'</li>';
                $cont2.html(str);

                var $cont3 = $('#content3');
                var str = 
                '<li class="active">'
                +'<span class="time fr">'+timeArr[6]+'</span>'
                +'  <h2>签约成功，等待放款……</h2>'
                +'</li>';
                $cont3.html(str);
               

            }

             function creat8(){
                $('#section1').addClass('actived');
                $('#section2').addClass('actived');
                $('#section3').addClass('active');
                var $cont1 = $('#content1');
                var str = 
                '<li>'
                +'<span class="time fr">'+timeArr[0]+'</span>'
                +'  <h2>申请已提交</h2>'
                +'</li>'
                + '<li>'
                +'<span class="time fr">'+timeArr[1]+'</span>'
                +'  <h2>等待贷款专员电话与您联系</h2>'
                +'</li>';
                $cont1.html(str);

                var $cont2 = $('#content2');
                var str = 
                '<li>'
                +'<span class="time fr">'+timeArr[3]+'</span>'
                +'  <h2>申请已确认</h2>'
                +'</li>'
                +'<li>'
                +'<span class="time fr">'+timeArr[4]+'</span>'
                +'  <h2>初审审核已通过</h2>'
                +'</li>'
                +'<li>'
                +'<span class="time fr">'+timeArr[5]+'</span>'
                +'  <h2>审核已通过，待门店签约</h2>'
                +'</li>';
                $cont2.html(str);

                var $cont3 = $('#content3');
                var str = 
                '<li>'
                +'<span class="time fr">'+timeArr[6]+'</span>'
                +'  <h2>签约成功，等待放款……</h2>'
                +'</li>'
                +'<li class="active">'
                +'<span class="time fr">'+timeArr[7]+'</span>'
                +'  <h2>已放款</h2>'
                +'</li>';
                $cont3.html(str);
               

            }
            
			

		}
	}
	jdcx.init();
	
});
//百分比圆环
var circle = function(options){
	var screenW = $(window).width();
	var sNum = screenW/640;
    this.canvas = document.getElementById(options['id']);
   
    this.ctx = this.canvas.getContext('2d');
    if(sNum<1){
    	this.canvas.width = 60*sNum;
        this.canvas.height = 60*sNum;

    }else{
        this.canvas.width = 60;
        this.canvas.height = 60;


    }
    
 
    this.deg = 0;
    this.new_deg = options['deg'];
    this.init();
}

 
circle.prototype.draw = function(){
     
    var ctx = this.ctx;
    var w = this.canvas.width;
    var h = this.canvas.height;
    var s = (w/60) > 1 ? 1:w/60;
    var font = Math.floor(14*s);
    this.canvas.style.left = (-w/2)+'px';
    ctx.clearRect(0,0,w,h);
    ctx.beginPath();
    
    ctx.moveTo(w/2,h/2);
    ctx.arc(w/2,h/2,w/2,0,Math.PI*2,false);//底圆
    ctx.closePath();
    ctx.fillStyle = '#ffcca0';
    ctx.fill();



    var sdeg = Math.PI*1.5;
    var edeg =Math.PI*(2 * this.deg / 100-0.5);
    
    ctx.beginPath();
    ctx.moveTo(w/2,h/2);
    ctx.arc(w/2,h/2,w/2,sdeg,edeg,false);
    ctx.closePath();  
    ctx.fillStyle = '#ea5404';  
    ctx.fill();  

      // 画内部空白  
    ctx.beginPath();  
    ctx.moveTo(w/2,h/2); 
    ctx.arc(w/2,h/2,w/2-3,0,Math.PI*2,true);//
    ctx.closePath();  
    ctx.fillStyle = '#f8f0ea';  
    ctx.fill();  

  
 

    //在中间写字  
    var text = Math.floor(this.deg)+"%";
    ctx.font = 'bold '+font+'pt Arial';  
    ctx.fillStyle = '#ea5404';  
    ctx.textAlign = 'center';  
    ctx.textBaseline = 'middle';  
    ctx.moveTo(w/2,h/2);  
    ctx.fillText(text, w/2, h/2);  
}
circle.prototype.init = function(){
    var self = this;
    var loop = null;
    var dif = 0;
    if(self.deg == self.new_deg && loop){
        clearInterval(loop);
        loop  = null;
        return;
    }
   
    dif = self.new_deg-self.deg;
    
    if(!loop){
        loop = setInterval(function(){
            if(self.deg == self.new_deg && loop){
                clearInterval(loop);
                loop  = null;
                return;
            }
   
            self.deg++;
            self.draw();
        },2000/dif);

    }
}


//静止圆环
var circleGray = function(id,flag,num){
    this.fontText = num || '1';
    flag = flag || false;
    var screenW = $(window).width();
    var sNum = screenW/640;
    this.canvas = document.getElementById(id);
   
    this.ctx = this.canvas.getContext('2d');
    if(sNum<1){
        this.canvas.width = 60*sNum;
        this.canvas.height = 60*sNum;

    }else{
        this.canvas.width = 60;
        this.canvas.height = 60;


    }
    if(!flag){
        this.draw();

    }else{
        this.draw1();
    }
    
}

 
circleGray.prototype.draw = function(){
     
    var ctx = this.ctx;
    var w = this.canvas.width;
    var h = this.canvas.height;
    var s = (w/60) > 1 ? 1:w/60;
    var font = Math.floor(14*s);
    this.canvas.style.left = (-w/2)+'px';
    ctx.clearRect(0,0,w,h);
    ctx.beginPath();
    
    ctx.moveTo(w/2,h/2);
    ctx.arc(w/2,h/2,w/2,0,Math.PI*2,false);//底圆
    ctx.closePath();
    ctx.fillStyle = '#d4d4d3';
    ctx.fill();



    // 画内部空白  
    ctx.beginPath();  
    ctx.moveTo(w/2,h/2); 
    ctx.arc(w/2,h/2,w/2-3,0,Math.PI*2,true);//
    ctx.closePath();  
    ctx.fillStyle = '#f8f0ea';  
    ctx.fill(); 

    //画十字
    ctx.beginPath();
    ctx.moveTo(w/2,h/2);
    ctx.lineTo(w/2,10*s);
    ctx.moveTo(w/2,h/2);
    ctx.lineTo(w-10*s,h/2);
    ctx.closePath();
    ctx.lineWidth = 3;  
    ctx.strokeStyle = '#d4d4d3';  
    ctx.stroke(); 
}

circleGray.prototype.draw1 = function(){
     
    var ctx = this.ctx;
    var w = this.canvas.width;
    var h = this.canvas.height;
    var s = (w/60) > 1 ? 1:w/60;
    var font = Math.floor(14*s);
    this.canvas.style.left = (-w/2)+'px';
    ctx.clearRect(0,0,w,h);
    ctx.beginPath();
    
    ctx.moveTo(w/2,h/2);
    ctx.arc(w/2,h/2,w/2,0,Math.PI*2,false);//底圆
    ctx.closePath();
    ctx.fillStyle = '#ffcca0';
    ctx.fill();



    // 画内部空白  
    ctx.beginPath();  
    ctx.moveTo(w/2,h/2); 
    ctx.arc(w/2,h/2,w/2-3,0,Math.PI*2,true);//
    ctx.closePath();  
    ctx.fillStyle = '#f8f0ea';  
    ctx.fill(); 

   
    //在中间写1  
    var text = this.fontText;
    ctx.font = 'bold '+font+'pt Arial';  
    ctx.fillStyle = '#ea5404';  
    ctx.textAlign = 'center';  
    ctx.textBaseline = 'middle';  
    ctx.moveTo(w/2,h/2);  
    ctx.fillText(text, w/2, h/2);  
}
