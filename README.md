# Brief Application Description

The colors app is a simple application to keep track of the the colors for each of the individual users.

# Technologies used

For this project the following technolgies were utilized:
- MySQL
- JavaScript
- HTML
- CSS
- Apache2
- PHP

To run this project you must ensure that you have the LAMP stack installed and make sure to put
in your own credentials in the PHP sql clients. Then you must create a schema for the users and 
a schema for the colors 
```mysql
CREATE TABLE `COP4331`.`Users`
(
`ID` INT NOT NULL AUTO_INCREMENT ,
`FirstName` VARCHAR(50) NOT NULL DEFAULT '' ,
`LastName` VARCHAR(50) NOT NULL DEFAULT '' ,
`Login` VARCHAR(50) NOT NULL DEFAULT '' ,
`Password` VARCHAR(50) NOT NULL DEFAULT '' ,
PRIMARY KEY (`ID`)
) ENGINE = InnoDB;

CREATE TABLE `COP4331`.`Colors`
(
`ID` INT NOT NULL AUTO_INCREMENT ,
`Name` VARCHAR(50) NOT NULL DEFAULT '' ,
`UserID` INT NOT NULL DEFAULT '0' ,
PRIMARY KEY (`ID`)
) ENGINE = InnoDB;

```

Once these schemas are set up then the next step would be to place the files in the apache site folder.
Additionally you need to change the lines on each of the .php scripts in the api/ folder where it says mysqli to your
proper credentials where the first value is mysql server IP, second is user, third is password and final is database.
After this you have to ensure that the root of the website has the index.html set as the index. Then you would
access the application through the webbrowser utilizing the running servers IP.
