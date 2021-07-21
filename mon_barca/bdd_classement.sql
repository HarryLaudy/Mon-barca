create database if not exists classement;

use classement;

create table if not exists liga(
id INT primary key NOT NULL auto_increment,
equipe varchar(30) not null,
logo varchar(70) default null,
place int not null,
J int not null,
V int not null,
N int not null,
D int not null,
bp int not null,
bc int not null,
diff int not null
);

insert into liga(equipe, place, J, V, N, D, bp, bc, diff)
values
('Athletic Bilbao', 1, 0, 0, 0, 0, 0, 0, 0),
('Atlético Madrid', 1, 0, 0, 0, 0, 0, 0, 0),
('Barceolna', 1, 0, 0, 0, 0, 0, 0, 0),
('Celta Vigo', 1, 0, 0, 0, 0, 0, 0, 0),
('Cadix', 1, 0, 0, 0, 0, 0, 0, 0),
('Deportivo Alaves', 1, 0, 0, 0, 0, 0, 0, 0),
('Elche', 1, 0, 0, 0, 0, 0, 0, 0),
('Espanyol', 1, 0, 0, 0, 0, 0, 0, 0),
('Getafe', 1, 0, 0, 0, 0, 0, 0, 0),
('Grenade', 1, 0, 0, 0, 0, 0, 0, 0),
('Levante', 1, 0, 0, 0, 0, 0, 0, 0),
('Majorque', 1, 0, 0, 0, 0, 0, 0, 0),
('Osasuna', 1, 0, 0, 0, 0, 0, 0, 0),
('Rayo', 1, 0, 0, 0, 0, 0, 0, 0),
('Betis', 1, 0, 0, 0, 0, 0, 0, 0),
('Real Madrid', 1, 0, 0, 0, 0, 0, 0, 0),
('Real Sociedad', 1, 0, 0, 0, 0, 0, 0, 0),
('Séville', 1, 0, 0, 0, 0, 0, 0, 0),
('Valence', 1, 0, 0, 0, 0, 0, 0, 0),
('Villareal', 1, 0, 0, 0, 0, 0, 0, 0);

select * from liga;

