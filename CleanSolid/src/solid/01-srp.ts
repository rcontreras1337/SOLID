(() => {

    interface Product { 
        id:   number;
        name: string;
    }


    class ProductService{

        // private httpAdapter: Object;

        getProduct( id: number ) {
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
    
        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }
    }

    class Mailer{

        private masterEmail: string = 'ruben@gmail.com';

        sendEmail( emailList: string[], template: 'to-cliente' | 'to-admin') {
            console.log('Enviando correo a los clientes', {template}, {emailList});
        }
    }

    class CartBloc{
        addToCart( productId: number ) {
            console.log('Agregando al carrito ', productId );
        }
    }
    
    // centralizador de clases
    class ProductBloc {
        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }

        loadProductById(id: number){
            this.productService.getProduct(id);
        }

        saveProduct(product: Product){
            this.productService.saveProduct(product);
        }

        notifyClients(){
            this.mailer.sendEmail(['1','2'],'to-cliente');
        }


    }

 
    const productService = new ProductService();
    const mailer = new Mailer();


    const productBloc = new ProductBloc(productService, mailer);

    // cartBloc.addToCart(10);








})();