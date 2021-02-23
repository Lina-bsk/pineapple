# pineapple - test project

HTML, SASS
The page is responsive for all devices.
Pixel-perfect.
Custom icon font used for SVG icons.

JavaScript
Form validation and shows error messages.
A success message will appear in case of successful validation.


PHP, MYSQL
Data is validated also in PHP, and if JavaScript is disabled it will display errors in the same place.
The data is submitted and saved in a MySQL database. In a 'data.php' file you can see all the data from 'users' table and able to sort it
by name or date.

How to install:
1. Clone repository
2. Open Terminal, GO to the folder where you clone repository and type: npm i  (Install dependencies)
3. In Terminal type: npm start  (this command creates a 'build' directory with a production build of this project)
4. Copy 'build' folder to the localhost directory and open the project in browser.
5. Exported table from database you can find  in - 'php/db.sql'