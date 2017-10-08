
var pm1=sessionStorage.getItem("pm");
var pm=parseInt(pm1);
var ss1=sessionStorage.getItem("ss");
var ss=parseInt(ss1);
var daypass=sessionStorage.getItem("dp");
var point=sessionStorage.getItem("po");

var daypass;

if(point==1&&daypass){
	var daypass1=sessionStorage.getItem("dp");
	if(daypass1>0){
	var dp1=parseInt(daypass1)-1;
	$(document).ready(function(){
		for(var i=0;i<=dp1;i++){
			var da=new Array("二","三","四","五","六","七","八","九","十");
			$("#order").before($("<div class='day'>第"+da[i]+"天</div>"));
		}
	});
	}
}

if(point==3){
	if(daypass){
		daypass++;	
		
	}else{
		daypass=1;
		
	}

	sessionStorage.setItem("dp",daypass);
	var point=0;
	sessionStorage.setItem("po",point);
	

	var daypass1=sessionStorage.getItem("dp");
	var dp1=parseInt(daypass1)-1;
	$(document).ready(function(){
		for(var i=0;i<=dp1;i++){
			var da=new Array("二","三","四","五","六","七","八","九","十");
			$("#order").before($("<div class='day'>第"+da[i]+"天</div>"));
		}
	});
}




var point=sessionStorage.getItem("po");
$(document).ready(function() {
	$("#backTo").click(function(){
		window.location.href="judge.html";
	});
});

$(document).ready(function() {
	$("#endTo").click(function(){
		window.location.href="assign.html";
	});
});

$(document).ready(function() {
	$("#tag1").click(function(){
		window.location.href="killer.html";
	});
});



if(point==1){
	$(document).ready(function() {
		$("#tOne").children("a").children(".blue_tag").css("background","rgb(146,183,164)");
		$("#tOne").children(".blue_arr").children(".jiantou").attr('src','bluearrb.png');
	});
}else if(point==3){
	$(document).ready(function() {
		$("#tOne").children("a").children(".blue_tag").css("background","rgb(146,183,164)");
		$("#tOne").children(".blue_arr").children(".jiantou").attr('src','bluearrb.png');
		$("#tTwo").children("a").children(".blue_tag").css("background","rgb(146,183,164)");
		$("#tTwo").children(".blue_arr").children(".jiantou").attr('src','bluearrb.png');
		$("#tThree").children("a").children(".blue_tag").css("background","rgb(146,183,164)");
		$("#tThree").children(".blue_arr").children(".jiantou").attr('src','bluearrb.png');
	});
}else{
	var point=0;
}

var blue_arr=document.getElementsByClassName("blue_arr");
var blue_tag=document.getElementsByClassName("blue_tag");
$(document).ready(function() {
	$(".group").click(function() {
		
		var x=$(this).attr("id");
		if(point==0&&x=="tOne"){
			$(this).children("a").children(".blue_tag").css("background","rgb(146,183,164)");
			$(this).children(".blue_arr").children(".jiantou").attr('src','bluearrb.png');
			window.location.href="killer.html";
			point++;
		}else if(point==1&&x=="tTwo"){
			$(this).children("a").children(".blue_tag").css("background","rgb(146,183,164)");
			$(this).children(".blue_arr").children(".jiantou").attr('src','bluearrb.png');
            $("#tip").find("p").html("请死者亮明身份并发表遗言");
            err();
			point++;
			
		}else if(point==2&&x=="tThree"){
			
			$(this).children("a").children(".blue_tag").css("background","rgb(146,183,164)");
			$(this).children(".blue_arr").children(".jiantou").attr('src','bluearrb.png');
			$("#tip").find("p").html("玩家依次发言讨论");
			err();
			point++;
		
		}else if(point==3&&x=="tFour"){
			$(this).children("a").children(".blue_tag").css("background","rgb(146,183,164)");
			$(this).children(".blue_arr").children(".jiantou").attr('src','bluearrb.png');
			
		
			point++;
		}else{
			alert("请按步骤执行！");
		}
		sessionStorage.setItem("po", point);
	});
});

function start(){
		if(point==1){
			$("#tOne").children("a").children(".blue_tag").css("background","rgb(146,183,164)");
			$("#tOne").children(".blue_arr").children(".jiantou").attr('src','bluearrb.png');
			var c=sessionStorage.getItem("s");
			var d=parseInt(c);
			$("#tag1").after(d+"<span>号被杀手杀死，真实身份是平民</span >");
		}
};

function dispear(){	
	tip=document.getElementById("tip");
	tip.style.opacity=0;
	tip.style.zIndex=-2;
	var dark=document.getElementById("dark");
	dark.style.opacity=0;
	dark.style.zIndex=-1;
	if(point==3){
		setTimeout("window.location.href='vote.html'",1000);
	}
}

function err(){
    	tip=document.getElementById("tip");
    	var num=0;
    	var st=setInterval(function(){
    		if(num<11){
    			tip.style.opacity=num/10;
    			num++;
    		}else{
    			clearInterval(st);
    		}   		
    	},50);
    	tip.style.zIndex=10;
    	var dark=document.getElementById("dark");
		dark.style.opacity=0.2;
		dark.style.zIndex=1;
		dark.style.display="block";
}