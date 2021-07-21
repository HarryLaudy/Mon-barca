create database if not exists classement;

use classement;

create table if not exists liga(
id int primary key not null auto_increment,
equipe varchar(70) not null,
place int not null
);

insert into liga (equipe, place)
values
('Barca', 1),
('Real', 1),
('Atletico', 1),
('Seville', 1),
('Villareal', 1);
