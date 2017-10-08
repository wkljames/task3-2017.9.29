$(document).ready(function() {
	$("#backTo").click(function(){
		window.location.href="assign.html";
	});
});

$(document).ready(function() {
	$("#endTo").click(function(){
		window.location.href="assign.html";
	});
});

$(document).ready(function() {
	$("#footer").click(function(){
		window.location.href="choose.html";
	});
});

var ident1=sessionStorage.getItem("ident0");
var ident = ident1.split('-');
var i=ident.length+1;

function show(){
	for(i;i<=18;i++){
		var cc="card"+i;
		document.getElementById(cc).style.display="none";
	}

	for(var j=0;j<ident.length;j++){
		var bb="cIdent"+(j+1);
		document.getElementById(bb).innerHTML=ident[j];
	}
}

var po1=sessionStorage.getItem("po");

if(po1){
	var c1=sessionStorage.getItem("c");
	var c2=c1.split('-');
		
		$(document).ready(function(){
			for(var j=0;j<c2.length;j++){
				$("#card"+c2[j]).children(".cIdent").css("background","rgb(146,183,165)");//jq选择器中加变量
			}
		});	
	var pm1=sessionStorage.getItem("pm");
	var pm=parseInt(pm1);
	var ss1=sessionStorage.getItem("ss");
	var ss=parseInt(ss1);
	if(ss==0){
		
		err();
		
	}else{
		err1();	
	}		
}

function err(){
    	$(document).ready(function(){
			$("#tip").fadeIn(1000);
		
    	
	    	$("#tip").css("zIndex","10");
			$("#dark").css("opacity","0.2");
			$("#dark").css("zIndex","1");
			$("#dark").css("display","block");
		});
}

function err1(){
    	$(document).ready(function(){
			$("#tip").find("p").html("杀手胜利，本轮游戏是否已经结束？");
			$("#tip").fadeIn(1000);
		
    	
	    	$("#tip").css("zIndex","10");
			$("#dark").css("opacity","0.2");
			$("#dark").css("zIndex","1");
			$("#dark").css("display","block");
		});
}

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
