-- Create a new database and use it in sql
DROP DATABASE IF EXISTS plants_db;
CREATE DATABASE plants_db;
USE plants_db;

-- Create a new table
CREATE TABLE plants (
    -- Every new plant gets a unique record number
    id INT NOT NULL AUTO_INCREMENT,
    -- Every plant gets 255 characters to be stored for their plant
    plant_name VARCHAR(255) NOT NULL,
    -- Boolean that is set to default false so it is easier to snap to which area we'd like to attach it to upon load
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
)