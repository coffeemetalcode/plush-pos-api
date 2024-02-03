/* 
 * to insert this with a CLI command, do
 * mysql -u <mysql-user> -p -e "source src/data/create.sql" plush_pos_api_instance
 * and enter the MySQL user password
 */

CREATE TABLE IF NOT EXISTS customers (
  birth_date date,
  display_name varchar(64),
  email varchar(64) NOT NULL,
  first_name varchar(64) NOT NULL,
  id int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  last_name varchar(64) NOT NULL,
  phone varchar(24) NOT NULL,
  password varchar(255) NOT NULL,
  registration_date timestamp NOT NULL,
  username varchar(32) UNIQUE NOT NULL
);

INSERT INTO customers (
birth_date, display_name, email, first_name, id, last_name, phone, password, registration_date, username
) VALUES
  ('1976-01-13', 'coffeemetalcode', 'coffeemetaltest@gmail.com', 'david', default, 'stocker', '8043354241', 'Test123$', '2024-01-13 14:25:27', 'coffeemetalcode'),
  ('1973-11-18', 'Heather', 'heather@quiltingadventures.com', 'heather', default, 'stocker', '8043356042', 'Test123$', '2024-02-02 16:40:17', 'h-bomb');
