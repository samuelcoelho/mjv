create table category (
	id integer primary key not null,
	name varchar(45)
);

create table product (
	id integer primary key not null,
	name varchar(45) not null,
	category_id integer not null,
	constraint fk_product_category foreign key (category_id) references category (id)
		on update no action
		on delete restrict
);

create table product_detail (
	id integer primary key not null,
	name varchar(45) not null,
	description varchar(250) not null,
	product_id integer not null,
	constraint fk_product_detail_product foreign key (product_id) references product (id)
		on update no action
		on delete restrict
);

create table user (
	id integer primary key not  null,
	name varchar(45) not null,
	email varchar(100) not null,
	password varchar(72) not null,
	profile char(1) not null default ('N')
);

create table cart (
	id integer primary key not null,
	user_id integer not null,
	constraint fk_cart_user foreign key (user_id) references user (id)
		on update no action
		on delete restrict
);

create table cart_item (
	id integer primary key not null,
	cart_id integer not null,
	product_id integer not null,
	quantity integer not null,
	constraint fk_cart_item_cart foreign key (cart_id) references cart (id)
		on update no action
		on delete restrict,
	constraint fk_cart_item_product foreign key (product_id) references product (id)
		on update no action
		on delete restrict
);