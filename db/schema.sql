DROP DATABASE IF EXISTS mixologist_db;
CREATE DATABASE mixologist_db;
USE mixologist_db;

CREATE TABLE ingredients 
(
    id INT NOT NULL AUTO_INCREMENT,
    ingredient_name VARCHAR(50) NOT NULL,
    used BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

