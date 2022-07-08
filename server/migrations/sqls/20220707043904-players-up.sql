CREATE TABLE players(
    id  SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    salary INT NOT NULL,
    img VARCHAR(255) NOT NULL
);
INSERT INTO players (name, age,salary,img)
VALUES ('Gabrial Jesus',25,43,'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltb76fa2dd821601d8/6268484347211e6e7712fbbb/jesus.jpg');
INSERT INTO players (name, age,salary,img)
VALUES ('Sadio Mane',30,50, 'https://resources.premierleague.com/photos/2022/02/17/78b0a6be-c924-4afb-87ea-cbc59aff48d6/Sadio-Mane.jpg?width=930&height=620');
INSERT INTO players (name, age,salary,img)
VALUES ('kevin De Bryne',31,60,'https://s.hs-data.com/bilder/spieler/gross/142263.jpg');