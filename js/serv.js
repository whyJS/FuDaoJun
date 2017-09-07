var name = '114';
var pwd = '12345';
var str = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function login(){
	var user = $("#name").val();
	console.log("存储"+user);
	if($("#name").val()==name&&$("#pwd").val()==pwd){
		if($("#inputcode").val().toLowerCase()==$("#code").html().toLowerCase()){
			localStorage.removeItem("user");
			localStorage.setItem("user",user);
			location.href="index.html";
		}else{
			$("#codeMsg").html("验证码错误！");
			$("#codeMsg").css("display","block");
		}
	}else{
		$("#msg").html("用户名或密码错误！");
		$("#msg").css("display","block");
	}	
}

function changeCode(){
	var code = "";
	for (var i=0;i<4;i++) {
		code += str[parseInt(Math.random()*62)];
	}
	$("#code").html(code);
}

$(function(){
	changeCode();
	$("#name").focus(function(){
		$("#msg").css("display","none");
		$("#codeMsg").css("display","none");
	});
	$("#pwd").focus(function(){
		$("#msg").css("display","none");
		$("#codeMsg").css("display","none");
	});
	$("#inputcode").focus(function(){
		$("#codeMsg").css("display","none");
	});
})
