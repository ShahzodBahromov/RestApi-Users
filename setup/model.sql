CREATE DATABASE ixvani;

CREATE TABLE users(
    user_id serial primary key,
    username varchar(30),
    phone varchar(15),
    year int not null,
    specialization varchar(30)
);

INSERT INTO users(username, phone, year, specialization) VALUES('Ali', '+998935206226', 1994, 'foreman');
INSERT INTO users(username, phone, year, specialization) VALUES('Burhon', '+998907488782', 1995, 'designer'); 
INSERT INTO users(username, phone, year, specialization) VALUES('Islom', '+998974237733', 1994, 'architect');
INSERT INTO users(username, phone, year, specialization) VALUES('Farruh', '+998909544453', 2000, 'progromming GO');
INSERT INTO users(username, phone, year, specialization) VALUES('Doniyor', '+998977218610', 2001, 'progromming NodeJS');
INSERT INTO users(username, phone, year, specialization) VALUES('Nurmuhammad', '+998909518012', 2001, 'progromming Frontend');
INSERT INTO users(username, phone, year, specialization) VALUES('Zubair', '+998940065500', 1999, 'Attor');
INSERT INTO users(username, phone, year, specialization) VALUES('Ayyub', '+998946004939', 1999, 'Attor');
INSERT INTO users(username, phone, year, specialization) VALUES('Muzakkir', '+998990691000', 2001, 'studend');
INSERT INTO users(username, phone, year, specialization) VALUES('Zayd', '+998935455045', 2001, 'managment');
INSERT INTO users(username, phone, year, specialization) VALUES('Abdurouf', '+998996959369', 1998, 'Attor');
INSERT INTO users(username, phone, year, specialization) VALUES('Abdulloh', '+998333930888', 1999, 'Datasine');
INSERT INTO users(username, phone, year, specialization) VALUES('MuhammadYusuf', '+998983680110', 2001, 'vendor');



   WITH old_data as (
        SELECT
        user_id,
        username,
        phone,
        year,
        specialization
        FROM users
        WHERE user_id = 14
    ) UPDATE users u  SET
        username = 
            CASE
                WHEN length('liss') > 1 THEN 'liiii'
                ELSE o.username
            END,
        phone = 
            CASE 
                WHEN length('5656565') > 1 THEN 'sdsds'
                ELSE o.phone
            END,
        year = 
            CASE 
                WHEN 45 > 1 THEN 54
                ELSE o.year
            END,
        specialization = 
            CASE
                WHEN length('sdasdasdasdasdasd') > 1 THEN 'asasaaa'
                ELSE o.specialization
            END
    FROM old_data o
    WHERE u.user_id = 14;
