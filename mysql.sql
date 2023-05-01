ssh -i "cab.cer" ubuntu@ec2-13-233-99-238.ap-south-1.compute.amazonaws.com


CREATE TABLE invoices (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), phone INT);

current_date DATETIME);



journey_date DATETIME, rate INT, seatCount INT, seats VARCHAR(255), tax INT, time INT, total INT);

MYSQL INSTALL AND COMMANDS




sudo apt update
sudo apt install mysql-server
sudo systemctl status mysql
sudo mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password_here';
EXIT
sudo mysql -u root -p

CREATE TABLE CAR
CREATE TABLE cars (
routes VARCHAR(255),
    time INT,
    carNo INT,
    seat1 BOOL
    seat2 BOOL,
    seat3 BOOL,
    seat4 BOOL,
    seat5 BOOL,
    seat6 BOOL
);

INSERT INTO cars
VALUES(
'leh_nubravalley',
        10.00,
        001,
        1,
        1,
        0,
        0,
        0,
        0
    );

SET SQL_SAFE_UPDATES = 0;
SET SQL_SAFE_UPDATES = 1;

ALTER TABLE cars
	ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY;