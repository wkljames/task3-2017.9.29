$(document).ready(function(){
	$("#attention").click(function(){
		alert("游戏结束啦!");
	});
});

var ss1=sessionStorage.getItem("ss");
var ss=parseInt(ss1);//得到剩余杀手数
var pm1=sessionStorage.getItem("pm");
var pm=parseInt(pm1);//得到剩余平民数



$(document).ready(function(){
	var shan0=sessionStorage.getItem("shan0");
	var shas0=sessionStorage.getItem("shas0");
	var toun0=sessionStorage.getItem("toun0");
	var tous0=sessionStorage.getItem("tous0");
	$("#shashou").html(ss);
	$("#pingmin").html(pm);
	$(".night").html(shan0);
	$(".nident").html(shas0);
	$(".day").html(toun0);
	$(".dident").html(tous0);
	$(".pass").html("1");
});

var shan1=sessionStorage.getItem("shan");
var shan=shan1.split('-');
var toun1=sessionStorage.getItem("toun");
var toun=toun1.split('-');
var tous1=sessionStorage.getItem("tous");
var tous=tous1.split('-');

$(document).ready(function(){
	var dp1=sessionStorage.getItem("dp");
	var dp=parseInt(dp1);
	for(var i=0;i<dp;i++){
		var j=i+2;
		$('#fake').before($("<div class='card'><p>第"+j+"天</p><p>黑夜："+shan[i+2]+"号玩家被杀死了，真实身份是平民</p><p>白天："+toun[i+2]+"号玩家被投死了，真实身份是"+tous[i+2]+"</p></div>"));
	}
});