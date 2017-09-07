<?php
	header("Access-Control-Allow-Origin:*");
	header("content-type:text/html;charset=utf-8");
	$con = mysql_connect("127.0.0.1","root","1234");
	if ($con) {
		echo "数据库已连接";
	}
	mysql_select_db("fudaojun");
	$selSql = "selecte * from user where utele = 182";
		$res = mysql_query($selSql);
		echo "$res";
		if ($res) {
			echo "用户名已存在";
		}else{
			// $insertSql = "insert into user(utele,upassword,type) values('$tele','$pwd',2)";
			// mysql_query($insertSql);
			echo "-----";
		}
	@$regist = $_REQUEST['regist'];
	if ($regist) {
		@$tele = $_REQUEST['tele'];
		@$pwd = $_REQUEST['upwd'];
		$selSql = "selecte * from user where utele = '$tele'";
		@$res = mysql_query($selSql);
		if (mysql_num_rows($res)) {
			echo "用户名已存在";
		}else{
			// $insertSql = "insert into user(utele,upassword,type) values('$tele','$pwd',2)";
			// mysql_query($insertSql);
			echo "-----";
		}
	}
		
?>