/* DROP DATABASE BOOK_CLUBE;
 CREATE DATABASE BOOK_CLUBE;
 */
DROP DATABASE BOOK_CLUBE;

CREATE DATABASE BOOK_CLUBE;

USE BOOK_CLUBE;

CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
    role VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE permissions(
    id int auto_increment NOT NULL,
    permission varchar (255) NOT NULL,
    is_deleted TINYINT DEFAULT 0,
    primary key (id)
);

CREATE TABLE roles_permissions(
    id int auto_increment NOT NULL,
    permission_id INT,
    role_id INT,
    foreign key (role_id) references roles(id),
    foreign key (permission_id) references permissions(id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE users(
    id INT auto_increment NOT NULL,
    userName VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE Books (
    id INT AUTO_INCREMENT NOT NULL,
    Book_Name VARCHAR(255),
    img VARCHAR(255),
    description VARCHAR(255),
    
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE reading_list(
    id int auto_increment NOT NULL,
    book_id INT,
    user_id INT,
    foreign key (book_id) references books(id),
    foreign key (user_id) references users(id),
    is_deleted TINYINT DEFAULT 0,
    primary key (id)
);

CREATE TABLE Rooms(
    id int auto_increment NOT NULL,
    room_Name VARCHAR(255),
    book_id INT,
    foreign key (book_id) references Books(id),
    is_deleted TINYINT DEFAULT 0,
    primary key (id)
);

CREATE TABLE Room_Memmbers(
    id int auto_increment NOT NULL,
    user_id INT,
    room_id INT,
    foreign key (user_id) references users(id),
    foreign key (room_id) references Rooms(id),
    is_deleted TINYINT DEFAULT 0,
    primary key (id)
);

CREATE TABLE comments(
    id int auto_increment NOT NULL,
    comment VARCHAR(255),
    user_id INT,
    room_id INT,
    foreign key (user_id) references users(id),
    foreign key (room_id) references Rooms(id),
    is_deleted TINYINT DEFAULT 0,
    primary key (id)
);



