			//清楚所有存储数据
			sessionStorage.removeItem("pm");
			sessionStorage.removeItem("ss");
			sessionStorage.removeItem("tous");
			sessionStorage.removeItem("toun");
			sessionStorage.removeItem("toun0");
			sessionStorage.removeItem("tous0");
			sessionStorage.removeItem("b");
			sessionStorage.removeItem("dp");
			sessionStorage.removeItem("po");
			sessionStorage.removeItem("pmn");
			sessionStorage.removeItem("ssn");
			sessionStorage.removeItem("ident0");
			sessionStorage.removeItem("s");
			sessionStorage.removeItem("shan0");
			sessionStorage.removeItem("shas0");
			sessionStorage.removeItem("shan");
			sessionStorage.removeItem("c");

function calculate(){
    var playerNum = document.getElementById("playerNum").value;
    if(playerNum<4||playerNum>18){
    	err();	//函数也不能写成function那种具体的，没用。
    }else{
    	correct();//这里的函数名不能是playNum,和变量重复了。
    	setInterval(function(){window.location.href="show.html";},2000);
    	assign();
    }
}

function err(){
    	tip=document.getElementById("tip");
    	var num=0;
    	var st=setInterval(function(){
    		if(num<10){
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

function dispear(){	
	var tip=document.getElementById("tip");
	tip.style.opacity=0;
	tip.style.zIndex=-11;
	var dark=document.getElementById("dark");
	dark.style.opacity=0;
	dark.style.zIndex=-1;
}

function correct(){
	var playerNum = document.getElementById("playerNum").value;
	var shashouNum=document.getElementById("shashouNum");
	var pingminNum=document.getElementById("pingminNum");  
	if(playerNum<9){
		shashouNum.innerHTML=1;
		pingminNum.innerHTML=(playerNum-1);
	}else if(playerNum<12){
		shashouNum.innerHTML=2;
		pingminNum.innerHTML=(playerNum-2);
	}else if(playerNum<16){
		shashouNum.innerHTML=3;
		pingminNum.innerHTML=(playerNum-3);
	}else{
		shashouNum.innerHTML=4;
		pingminNum.innerHTML=(playerNum-4);
	}
	alert("杀手"+shashouNum.innerHTML+"人，平民"+pingminNum.innerHTML+"人");
	var a=pingminNum.innerHTML;
	var b=shashouNum.innerHTML;
	sessionStorage.setItem("pm", a);
	sessionStorage.setItem("ss", b);
	sessionStorage.setItem("pmn", a);
	sessionStorage.setItem("ssn", b);
}





function assign(){
	var len1=document.getElementById("shashouNum").innerHTML;
	var len2=document.getElementById("pingminNum").innerHTML;
	var arr1=new Array();
	var arr2=new Array();
	var arr=new Array();
	for(var i=0;i<len1;i++){
		arr1[i]="杀手";
	}
	for(var i=0;i<len2;i++){
		arr2[i]="平民";
	}
	arr=arr1.concat(arr2);//合并两个数组,生成一个数组里面,有所有玩家的身份
	//开始打乱身份
	var res=[];
	len=arr.length;//这个最好单独拎出来，不然写在for里i<arr.length会出错
	for(var i=0;i<len;i++){
		var j=Math.floor(Math.random()*arr.length);
		res[i]=arr[j];
		arr.splice(j,1);
	}
	//alert(res);
	if (typeof(Storage) !== "undefined") {
    // 存储数字，记得要转化成字符串，不然存储不了
    var res1 = res.join("-");
    sessionStorage.setItem("ident0", res1);
   

    // Retrieve
	} else {
    alert("抱歉！您的浏览器不支持 Web Storage ...");
	}	

}

