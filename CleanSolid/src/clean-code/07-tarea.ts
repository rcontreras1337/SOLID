(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ){}
    }

    class InputEvents{
        constructor() {};
        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    class InputElement{
        public htmlElement: HtmlElement;
        public inputAttributes: InputAttributes;
        public inputEvents: InputEvents;
        constructor(id: string, value: string, placeholder: string){
            this.inputAttributes = new InputAttributes(value, placeholder);
            this.htmlElement = new HtmlElement(id, 'input');
            this.inputEvents = new InputEvents();
        }
    }

    const nameField = new InputElement('1', 'Ruben', 'Enter first name');

    console.log({ nameField });

})()