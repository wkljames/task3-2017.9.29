
var pm1=sessionStorage.getItem("pm");
var pm=parseInt(pm1);
var ss1=sessionStorage.getItem("ss");
var ss=parseInt(ss1);



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

$(document).ready(function() {
		var u=sessionStorage.getItem("c");
		var u1 = u.split('-');
		
		
		for(var j=0;j<u1.length;j++){
			$("#card"+u1[j]).children(".cIdent").css("background","rgb(146,183,165)");//jq选择器中加变量
		}	
		
});

$(document).ready(function() {
	
	$(".card").click(function(){
		var sf=$(this).children(".cIdent").html();
		if(sf=="杀手"){
			alert("不可以杀自己人!");
		}else{
		var cc=sessionStorage.getItem("dp");
		var cc1=parseInt(cc);
		
		if(!cc1){
			$(".knife").css("display","none");
			$(this).children(".knife").css("display","block");
			var a1=$(this).children(".nIdent").html();
			var a=parseInt(a1);
			sessionStorage.setItem("s", a);
			sessionStorage.setItem("shan0",a);//记录杀人num，用于最后复盘
			var g1=$(this).children(".cIdent").html();
			sessionStorage.setItem("shas0",g1);//记录杀人id，用于最后复盘
			var death=new Array();
			death.push(a);
			if(!shan){
				var shana=new Array();
				sessionStorage.setItem("shan",shana);
			}
			var shan1=sessionStorage.getItem("shan");
			var shan2=shan1.split("-");
			
			
			shan2.push(a);
			
			shan3=shan2.join("-");

			sessionStorage.setItem("shan",shan3);

			pm--;
			var pm2=pm;
			
			sessionStorage.setItem("pm",pm2);
			sessionStorage.setItem("b", death);
			
		}else{
			$(".knife").css("display","none");
			$(this).children(".knife").css("display","block");
			var a1=$(this).children(".nIdent").html();
			var a=parseInt(a1);
			
			var shan2=sessionStorage.getItem("shan");//为最后一页复盘建立每夜杀人号码的数组
			var shan=shan2.split("-");
			shan.push(a);
			shan1=shan.join("-");
			
			sessionStorage.setItem("shan",shan1);

			//不再存为最后一页复盘建立每夜杀人身份的数组，因为杀手必须杀害平民！

			sessionStorage.setItem("s", a);
			var death1=sessionStorage.getItem("c");
			
			var death=death1.split('-');
			death.push(a);
			
			var death2 = death.join("-");
			sessionStorage.setItem("b", death2);
			pm--;
			var pm2=pm;
			sessionStorage.setItem("pm",pm2);
			
		}
	}	
	});
});

$(document).ready(function() {
	$("#footer").click(function(){
		
		window.location.href="choose.html";
		
	});
});