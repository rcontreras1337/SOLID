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

> CODIGO LIMPIO ES AQUEL QUE SE HA ESCRITO CON LA INTENCION DE QUE OTRA PERSONA (O TU MISMO EN EL FUTURO) LO ENTIENDA - CARLOS BLE

> “Nuestro codigo tiene que ser simple y directo, deberia leerse con la misma facilidad que un texto bien escrito”. - Grady Booch

> “Programar es el arte de decirle a otro humano lo que quieres que la computadora haga”. — Donald Knuth

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


> muchas personas piensan que al tener que escribir las variables completas se usara mucho espacio al crear todo el proyecto pero la verdad es que al compilar el codigo el mismo bundle se encarga de dejarlo de la forma optima para que se lea por la computadora por lo que ne deberias preocuparte de aquello, ademas de tomar en cuenta que acutalmente el espacio no es un problema o algo tan caro como fue en el pasado


# Arrays

* para definir estos nombres usamos la palabras en plurales y luego lo que contiene por ejemplo un arrlego de nombres de frutas seria fruitNames, tiene mas sentido que fruits ya que en ese ultimo caso sabremos que son frutas pero que hay adentro de esa lista de frutas, el origen? el peso? etc.

# Booleans

* para los booleanos es algo similar, por ejemplo write puede ser canWrite, puedo escribir, si quieres preguntar si algo esta presente no usar notEmpty = true, se le que esta vacio pero igual hace pensar, es como inversar las cosas y genera enrredos ya me ha pasado, en vez de eso crees que seria mejor isEmpty = true, esta vacio? como si fuese una pregunta, entonces tu mente dice si, en cambio con el notEmpty = true, no esta vacio? y luego lo aciertas genera como una confusion 

* fruit = true, isFruit = true
* open = true, isOpen = true
* noValues = true, hasValues = false

# Numeros

* se debe dar contexto a los numeros, por lo general con max, min, total, etc.
* fruits = 1, maxFruits = 9
* cars = 2, minCars = 1
* tCars = 1, totalOfCars = 10

# Funciones

* los nombres de las acciones deben representar acciones, que son verbos y sunstantivos al construirse, debe ser descriptivo y concreto, pero debe abstenerce de toda la implementacion que hace la funcion 

* malos nombres createUserIfNotExists(); updateUserIfNotEmpty(), sendEmailIfFieldsValid(), son bastante explicitas pero esta hablando de la implementacion que deberia hacerce dentro del codigo, ya que es implicito que realiza esas pruebas, porque si quiero crear un usuario y no se puede lanza error, pero se entiende que el verbo es crear y el sustantivo es usuario por lo que abajito estaria definida de una manera buena

* createUser(), updateUser(), sendEmail(), son formas claras y concretas.


# Recomendaciones otras en funciones

* Simplicidad es fundamental, facil de leer facil de entender.

* Funciones de tamañno reducido.

* Funciones de una sola linea sin causar complejidad.

* Menos de 20 lineas, aunque cuesta atinarle a esto.

* Evita el uso del "ELSE".

* Priorizar uso de condicional ternaria.

# DRY Don't Repeat Yourself

* evitar código duplicado
* simplifica las pruebas
* ayuda a centralizar procesos
* aplicar DRY usualmente lleva a refactorizar. 














 
