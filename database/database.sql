CREATE DATABASE pruebaAppsus;

USE pruebaAppsus;

CREATE TABLE productos(
    idproducto INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200),
    tipo VARCHAR(100),
    precio INT(11),
    cantidad INT (11),
    idcategoria INT(11),
    idusuario INT(11)
);

DESCRIBE productos;