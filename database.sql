	CREATE DATABASE ims;
	 USE ims;

CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    company_name VARCHAR(255),
    username VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    phone_number INT(11),
    userImage VARCHAR(255),
    is_admin INT,
    created_at timestamp,
    updated_at timestamp
);

CREATE TABLE category(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    category_type VARCHAR(255),
    created_at timestamp,
    updated_at timestamp
);

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category INT,
    product_name VARCHAR(255),
    sku VARCHAR(255),
    stock INT,
    unit_price INT,
    total_amount INT,
    created_by_id INT null,
    created_at timestamp,
    updated_at timestamp,

    FOREIGN KEY(created_by_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY(category) REFERENCES category(id) ON DELETE CASCADE
);
