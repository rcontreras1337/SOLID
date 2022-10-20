# SOLID
 ESTUDIO SOLID 

# DEUDA TÉCNICA 

La falta de calidad en el código, que genera una deuda
que repercutirá en costos futuros.

###### GENERA COSTOS ECONÓMICOS

* Tiempo en realizar mantenimientos.

* Tiempo en refactorizar código.

* Tiempo en comprender el código.

* Tiempo adicional en la transferencia del código.

> Tipos Deudas

* Imprudente: no hay tiempo, solo copia y pega eso de nuevo.

* prudente: tenemos que entregar rápido, ya re factorizaremos.

* inadvertido: ¿Que son patrones de diseños?.

* prudente e inadvertida: ahora sabemos como lo deberíamos haber hecho.

Caer en una deuda técnica es inevitable, por lo que un programador debería ser consiente de esto
la única forma de poder atacar este problema es con la re factorización, que tiene como 
objetivo mejorar el código sin alterar su comportamiento para que sea más entendible y tolerante a cambios.

Para poder asegurar el objetivo de esa re factorización es tener pruebas automáticas para saber que
todo funciono de la forma esperada.

# CLEAN CODE

> CÓDIGO LIMPIO ES AQUEL QUE SE HA ESCRITO CON LA INTENCIÓN DE QUE OTRA PERSONA (O TU MISMO EN EL FUTURO) LO ENTIENDA - CARLOS BLE

> “Nuestro código tiene que ser simple y directo, debería leerse con la misma facilidad que un texto bien escrito”. - Grady Booch

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


> muchas personas piensan que al tener que escribir las variables completas se usara mucho espacio al crear todo el proyecto pero la verdad es que al compilar el código el mismo bundle se encarga de dejarlo de la forma optima para que se lea por la computadora por lo que ne deberías preocuparte de aquello, ademas de tomar en cuenta que actualmente el espacio no es un problema o algo tan caro como fue en el pasado


# Arrays

* para definir estos nombres usamos la palabras en plurales y luego lo que contiene por ejemplo un arreglo de nombres de frutas seria fruitNames, tiene mas sentido que fruits ya que en ese ultimo caso sabremos que son frutas pero que hay adentro de esa lista de frutas, el origen? el peso? etc.

# Booleans

* para los booleanos es algo similar, por ejemplo write puede ser canWrite, puedo escribir, si quieres preguntar si algo esta presente no usar notEmpty = true, se le que esta vació pero igual hace pensar, es como inversa las cosas y genera enredos ya me ha pasado, en vez de eso crees que seria mejor isEmpty = true, esta vació? como si fuese una pregunta, entonces tu mente dice si, en cambio con el notEmpty = true, no esta vació? y luego lo aciertas genera como una confusion 

* fruit = true, isFruit = true
* open = true, isOpen = true
* noValues = true, hasValues = false

# Números

* se debe dar contexto a los números, por lo general con max, min, total, etc.
* fruits = 1, maxFruits = 9
* cars = 2, minCars = 1
* tCars = 1, totalOfCars = 10

# Funciones

* los nombres de las acciones deben representar acciones, que son verbos y sustantivos al construirse, debe ser descriptivo y concreto, pero debe abstenerse de toda la implementación que hace la función 

* malos nombres createUserIfNotExists(); updateUserIfNotEmpty(), sendEmailIfFieldsValid(), son bastante explicitas pero esta hablando de la implementación que debería hacerse dentro del código, ya que es implícito que realiza esas pruebas, porque si quiero crear un usuario y no se puede lanza error, pero se entiende que el verbo es crear y el sustantivo es usuario por lo que abajo estaría definida de una manera buena

* createUser(), updateUser(), sendEmail(), son formas claras y concretas.


# Recomendaciones otras en funciones

* Simplicidad es fundamental, fácil de leer fácil de entender.

* Funciones de tamaño reducido.

* Funciones de una sola linea sin causar complejidad.

* Menos de 20 lineas, aunque cuesta atinarle a esto.

* Evita el uso del "ELSE".

* Priorizar uso de condicional ternaria.

# DRY Don't Repeat Yourself

* evitar código duplicado
* simplifica las pruebas
* ayuda a centralizar procesos
* aplicar DRY usualmente lleva a refactorizar. 

# Principios responsabilidad única 
 
* Cada una de la funciones debe hacer una tarea y hacerla bien














 
