CREATE TABLE loai_sp (
                         cid INT AUTO_INCREMENT PRIMARY KEY,
                         name VARCHAR(255) NOT NULL
);

CREATE TABLE san_pham (
                          id INT AUTO_INCREMENT PRIMARY KEY,
                          name VARCHAR(255) NOT NULL,
                          price DECIMAL(10, 2) NOT NULL,
                          status VARCHAR(255) NOT NULL,
                          id_loai_sp INT,
                          FOREIGN KEY (id_loai_sp) REFERENCES loai_sp(cid)
);

INSERT INTO loai_sp (name) VALUES ('car'); 
INSERT INTO loai_sp (name) VALUES ('computer'); 
INSERT INTO loai_sp (name) VALUES ('motorbike'); 
INSERT INTO loai_sp (name) VALUES ('telephone'); 
INSERT INTO loai_sp (name) VALUES ('watch'); 

INSERT INTO san_pham (name, price, status, id_loai_sp) VALUES 
('Car 1', 20000.00, 'Available', 1),
('Car 2', 25000.00, 'Sold', 1),
('Computer 1', 1500.00, 'Available', 2),
('Computer 2', 1800.00, 'Available', 2),
('Motorbike 1', 5000.00, 'Available', 3),
('Motorbike 2', 4500.00, 'Sold', 3),
('Telephone 1', 1000.00, 'Available', 4),
('Telephone 2', 1200.00, 'Sold', 4),
('Watch 1', 200.00, 'Available', 5),
('Watch 2', 300.00, 'Available', 5);