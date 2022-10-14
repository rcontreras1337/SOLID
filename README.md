# SOLID
 ESTUDIO SOLID 

# DEUDA TÉCNICA 

La falta de calidad en el codigo, que genera una deuda
que repercutira en costos futuros.

###### GENERA COSTOS ECONÓMICOS

* Tiempo en realizar mantenimientos.

* Tiempo en refactorizar código.

* Tiempo en comprender el código.

* Tiempo adicional en la transferencia del código.

> Tipos Deudas

* Imprudente: no hay tiempo, solo copia y pega eso de nuevo.

* prudente: tenemos que entregar rapido, ya refactorizaremos.

* inadvertido: ¿Que son patrones de diseños?.

* prudente e inadvertida: ahora sabemos como lo deberiamos haber hecho.

Caer en una deuda tecnica es inevitable, por lo que un programador deberia ser conciente de esto
la unica forma de poder atacar este problema es con la refactorización, que tiene como 
objetivo mejorar el código sin alterar su comportamiento para que sea más entendible y tolerante a cambios.

Para poder asegurar el objetivo de esa refactorización es tener pruebas automáticas para saber que
todo funciono de la forma esperada.

# CLEAN CODE

> CODIGO LIMPIO ES AQUEL QUE SE HA ESCRITO CON LA INTENCION DE QUE OTRA PERSONA (O TU MISMO EN EL FUTURO)
LO ENTIENDA - CARLOS BLE

> “Nuestro codigo tiene que ser simple y directo, deberia leerse con
la misma facilidad que un texto bien escrito”. - Grady Booch

> “Programar es el arte de decirle a otro humano lo que
quieres que la computadora haga”. — Donald Knuth

# NOMBRES PRONUNCIABLES Y EXPRESIVOS

## MAL

* const n = 53;

* const tx = 0.1!

* const cat = 'T-Shirts';

* const ddnmyyyy = new Date('August 15, 1965 00:00:00');

## MEJOR
* const numberOfUnits = 53;
* const tax = 0.15;
* const category = 'T-Shirts';
* const birthDate = new Date('August 15, 1965 00:00:00');








 
