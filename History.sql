create table if not exists History(
	id int primary key auto_increment,
	type int not null,
	price real,
	create_time date,
	pay_time date,
	status int
);