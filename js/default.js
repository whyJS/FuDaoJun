var lightbox;
var showMsg;
var appoint;
var appointMsg;
$(function(){
	$("#legal-user").html("<a href='login.html'>登录</a>&nbsp;<a href='regist.html'>注册</a><span class='border'></span>");
	if(document.getElementById("login")){
		$("#inputcode").click(function(){
			$(this).val("");
		});
	}
	var user = localStorage.getItem("user");
	console.log("获取"+user);
	if(user != "登录-注册"&&user != null){
		$("#legal-user").html("<a href='user_info.html'>"+user+"</a>&nbsp;<a href='javascript:quit();'>退出</a><span class='border'></span>");
	}
	var flag = 1;
	var sp0 = $("#navControl").children()[0];
	var sp1 = $("#navControl").children()[1];
	var sp2 = $("#navControl").children()[2];
	$("#navControl").click(function(){
		if (flag) {
			sp0.style.transform = "rotate(45deg) translateY(4px)";
			sp1.style.display = "none";
			sp2.style.transform = "rotate(-45deg) translateY(-4px)";
			$("#navControl").css("background","white");
			flag = 0;
		}else{
			sp0.style.transform = "rotate(0) translateY(0)";
			sp1.style.display = "block";
			sp2.style.transform = "rotate(0) translateY(0)";
			$("#navControl").css("background","white");
			flag = 1;
		}	
	});
	if (document.getElementById('lightbox')) {
		lightbox = document.getElementById('lightbox');
		showMsg = document.getElementById('showMsg');
		appoint = document.getElementById('appoint');
		appointMsg = document.getElementById('appointMsg');
		lightbox.onclick = function(){
			this.style.display = "none";
		}
		$(".carousel").carousel();
		var speed = 50;
		d3.innerHTML = d2.innerHTML;
		function scrollUp(){
			if (d3.offsetTop-d1.scrollTop <= 0) {
				d1.scrollTop -= d2.offsetHeight;
			}else{
				d1.scrollTop++;
			}
		}
		var start = setInterval(scrollUp,speed);
		d1.onmouseover = function(){
			clearInterval(start);
		}
		d1.onmouseout = function(){
			start = setInterval(scrollUp,speed);
		}
	}
	if (document.getElementById('advantage')||
		document.getElementById('teacher')||
		document.getElementById('studentcase')||
		document.getElementById('download')) {
		appoint = document.getElementById('appoint');
		appointMsg = document.getElementById('appointMsg');
	}
	if(document.getElementById("user-info")){
		var user = localStorage.getItem("user");
		$("#user-name").html(user);
	}
		
});
	
if(document.getElementById('showMsg')){
	window.onresize=function(){
		showMsg.style.backgroundSize = "cover";
	}
}

function showAppointMsg(){
	var height = $(window).height() + "px";
	appoint.style.height = height;
	appoint.style.display = "block";
}
function closeFrame(){
	appoint.style.display = "none";
}

function showAsLightBox(obj){
	var height = $(window).height() + "px";
	lightbox.style.height = height;
	lightbox.style.display = "block";	
	showMsg.style.background = "url("+obj.src+")";		
	showMsg.style.backgroundSize = "cover";
	switch(parseInt(obj.name)){
		case 1:
			showMsg.innerHTML = "<div style='background-color: rgba(51,51,51,0.3);'><h3>1对1定制教学</h3><h4>根据学员学习情况，只讲学员不会的</h4><hr><h4>为学生进行全面诊断，从排名动向、成绩曲线、知识弱点、学习方法、答题习惯5大维度入手，为学生量身打造个性化的辅导方案。</h4></div>";
			break;
		case 2:
			showMsg.innerHTML = "<div style='background-color: rgba(51,51,51,0.3);'><h3>名校顶级师资</h3><h4>层层筛选，成就最强大脑</h4><hr><h4>教师100%来自全国TOP10名校，历经笔试—面试—试讲评定三层筛选，严控教学品质，完善师资体系。</h4></div>";
			break;
		case 3:
			showMsg.innerHTML = "<div style='background-color: rgba(51,51,51,0.3);'><h3>随时随地，节约时间</h3><h4>不受时间地点限制，安全高效</h4><hr><h4>08:00-23:00，随时上课，不限定地点，只要有网络就可以上课，节约路上时间，避免路上、辅导场所的安全隐患。</h4></div>";
			break;
		case 4:
			showMsg.innerHTML = "<div style='background-color: rgba(51,51,51,0.3);'><h3>不止知识，还有经验</h3><h4>传授宝贵的学习经验和应试技巧</h4><hr><h4>超百名省市级高考状元，在教学过程中传授宝贵的学习经验和应试技巧，助您孩子高效提分。</h4></div>";
			break;
		case 5:
			showMsg.innerHTML = "<div style='background-color: rgba(51,51,51,0.3);'><h3>价格平价，性价比超高</h3><h4>在线授课，课程优质，超高性价比</h4><hr><h4>超高课程品质，超低课时费用，花大班课的钱，上精品1对1的课，全程教务追踪体系切实保障教学质量。</h4></div>";
			break;
	}
}

var cities = [['--请选择--'],['东城区','海淀区','朝阳区'],
				['南京市','苏州市','徐州市'],
				['合肥市','淮北市']
									];
function selProv (sel) {
	var city = document.getElementById('city');
	var cityArr = cities[sel.selectedIndex];
	city.innerHTML = '';
	for (var i = 0; i < cityArr.length; i++) {
		var op = document.createElement('option');
		op.innerHTML = cityArr[i];
		city.appendChild(op);
	};
}


function quit(){
	localStorage.removeItem("user");
	location.href = "index.html";
}
