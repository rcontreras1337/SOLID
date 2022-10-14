(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    // function isRedFruit( fruit: string ): boolean {
        
    //     if ( fruit === 'manzana' || fruit === 'cereza' || fruit === 'ciruela' ) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    function isRedFruit( fruit: string ): boolean {
        const redFruitNames = ['manzana', 'cereza', 'ciruela'];

        return redFruitNames.includes(fruit);
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    // function getFruitsByColor( color: string ): string[] {

    //     if ( color === 'red' ) {
    //         return ['manzana','fresa'];
    //     } else if ( color === 'yellow') {
    //         return ['piña','banana'];
    //     } else if ( color === 'purple') {
    //         return ['moras','uvas']
    //     } else {
    //         throw Error('the color must be: red, yellow, purple');
    //     }
    // }

    type FruitColor = 'red'| 'yellow' | 'purple';

    function getFruitsByColor( color: FruitColor ): string[] {

        const fruitsByColor = {
            red: ['manzana','fresa'],
            yellow:['piña','banana'],
            purple:['moras','uvas'],
        };
        // console.log({ Object :Object});
        // console.log({ EObject: !Object});
        // console.log({ EObjectKeys: !Object.keys(fruitsByColor)});
        // console.log({ ObjectKeys: Object.keys(fruitsByColor)});
        if(!Object.keys(fruitsByColor).includes(color))
        {
            throw Error('the color must be: red, yellow, purple'); 
        }

        return fruitsByColor[color];

        // if ( color === 'red' ) return ['manzana','fresa'];

        // if ( color === 'yellow') return ['piña','banana'];

        // if ( color === 'purple') return ['moras','uvas'];

        // throw Error('the color must be: red, yellow, purple');
    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    // function workingSteps() {
    //     if( isFirstStepWorking === true ) {
    //         if( isSecondStepWorking === true ) {
    //             if( isThirdStepWorking === true ) {
    //                 if( isFourthStepWorking === true ) {
    //                     return 'Working properly!';
    //                 }
    //                 else {
    //                     return 'Fourth step broken.';
    //                 }
    //             }
    //             else {
    //                 return 'Third step broken.';
    //             }
    //         }
    //         else {
    //             return 'Second step broken.';
    //         }
    //     }
    //     else {
    //         return 'First step broken.';
    //     }
    // }

    function workingSteps() {
        if (!isFirstStepWorking) return 'First step broken.';

        if (!isSecondStepWorking) return 'Second step broken.';

        if (!isThirdStepWorking) return 'Third step broken.';

        if (!isFourthStepWorking) return 'Fourth step broken.';
        
        return 'Working properly!';
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    //console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();




