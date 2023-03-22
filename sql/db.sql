-- select a database
--\c
create table if not exists publishers
(
    id   serial
        primary key,
    name varchar(255)
);

create table if not exists heroes
(
    id               serial
        primary key,
    superhero        varchar(255),
    alter_ego        varchar(255),
    first_appearance varchar(255),
    characters       varchar(255),
    alt_img          varchar(255),
    "publisherId"    integer
        references publishers
            on update cascade on delete set null
);

-- list al tables
\dt

-- list all data in heroes table
SELECT * FROM heroes;

-- INSERT TEST DATA FOR heroes


-- INSERT TEST DATA FOR publisher
INSERT INTO publisher(name)
    VALUES('Marvel Comics'),('DC Comics');

select * from publishers;

select * from heroes where publisherId = 1;