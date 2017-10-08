var ident1=sessionStorage.getItem("ident0");
var ident = ident1.split('-');
//alert(ident);
var num=1;
var numMax=ident.length*2;
	$(document).ready(function(){
  		$("#footer").click(function(){
        if(num<numMax){
    			if(num%2!=0){
            if(num==numMax-1){
              $("#insert").css("background-image","url(shenfen.png)");
              num++;
              $("#num1").text("隐藏并传递给法官");
              $("#num2").text("");
              $("#num").text('');
              $("#ident").text(ident[(num-2)/2]);
              $("#ident").css("opacity",1);
              $("#footer").click(function(){
                window.location.href="judge.html";
                });
            }else{
      				$("#insert").css("background-image","url(shenfen.png)");
      				num++;
      				$("#num").text((num+2)/2);
              $("#num1").text("隐藏并传递给");
              $("#num2").text("号");
              $("#ident").css("opacity",1);
              $("#numTop").text((num+2)/2-1);
              $("#ident").text(ident[(num-2)/2]);
            }
    			}else{
    				$("#insert").css("background-image","url(fanpai.png)");
    				num++;
    				$("#num").text((num+1)/2);
            $("#num1").text("查看");
            $("#num2").text("号身份");
            $("#ident").css("opacity",0);
            $("#numTop").text((num+1)/2);
    			}
        }
  		});
	});
	

  $(document).ready(function(){
      $("#backTo").click(function(){
          if(num%2==0){
            num--;
            $("#insert").css("background-image","url(fanpai.png)");
            $("#num").text((num+1)/2);
            $("#num1").text("查看");
            $("#num2").text("号身份");
            $("#ident").css("opacity",0);
            $("#numTop").text((num+1)/2);
            
          }else{
            if(num==1){
              window.location.href="assign.html";             
            }else{
            num--;
            $("#insert").css("background-image","url(shenfen.png)");
            $("#num").text((num+2)/2);
            $("#num1").text("隐藏并传递给");
            $("#num2").text("号");
            $("#ident").css("opacity",1);
            $("#numTop").text((num+2)/2-1);
            $("#ident").text(ident[(num-2)/2]);
            }
          }
      });
  });

  $(document).ready(function(){
    $("#endTo").click(function(){
      window.location.href="assign.html";
    });
  });