create database fudaojun;
use fudaojun;
-- utele(电话号码)	number	Yes	Primary key
-- upassword(密码)	varchar(16)	Yes	
-- type(用户类型)	number	Yes	
-- uqq(qq号码)	number		
-- uname(姓名)	varchar(20)		
-- usex(性别)	varchar(5)		
-- uprovince(省)	varchar(20)		
-- ucity(市)	varchar(20)		
-- utown(县/区)	varchar(20)		
-- ugrade(年级)	number		
-- coursetobuy(课程订单)	varchar(50)		
-- coursetostudy(已买课程)	varchar(50)		


create table if not exists user(
	utele varchar(11) primary key,
	upassword varchar(16),
	type int not null,
	uqq varchar(15),
	uname varchar(20),
	usex varchar(5),
	uprovince varchar(20),
	ucity varchar(20),
	utown varchar(20),
	ugrade int,
	course varchar(50)
);
