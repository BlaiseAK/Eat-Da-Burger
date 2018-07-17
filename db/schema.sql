-- Create a new database and use it in sql
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create a new table
CREATE TABLE burgers (
    -- Every new burger gets a unique record number
    id INT NOT NULL AUTO_INCREMENT,
    -- Every burger gets 255 characters to be stored for their burger
    burger_name VARCHAR(255) NOT NULL,
    -- Boolean that is set to default false so it is easier to snap to which area we'd like to attach it to upon load
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
)