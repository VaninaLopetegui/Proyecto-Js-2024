// let validacionNumber = (variable) => !isNaN(variable) && variable != null && variable != "";

// let arrayProductos = [
//     {id: 1,nombre: "PILDORA BLUE CLOVER", precio: 0.0029, moneda: "BTC"},
//     {id: 2,nombre: "PILDORA PURPLE FLOWER", precio: 0.0021, moneda: "BTC"},
//     {id: 3,nombre: "PILDORA GREEN SNOWFLAKE", precio: 0.0044, moneda: "BTC"},
//     {id: 4,nombre: "PILDORA PINK SMILE", precio: 0.0017, moneda: "BTC"}
// ];

// function bienvenida(){
//     let usuarioBienvenida;
//     do{
//         usuarioBienvenida = parseInt(prompt("En qué te podemos ayudar? 1.Comprar productos 2.Información sobre nosotros"));
//         if(validacionNumber(usuarioBienvenida)){
//             opcionesUsuario(usuarioBienvenida);
//         } else {
//             alert("No has ingresado un número! vuelve a intentarlo. 😓");
//         }
//     } while(isNaN(usuarioBienvenida))
// }

// let productosNombres = arrayProductos.map(producto => producto.nombre);

// function mostrarNombres() {
//     return productosNombres.join(", ");
// }

// function comparacionNombres(nombre){
//     return productosNombres.indexOf(nombre.toUpperCase());
// }

// function opcionesUsuario(respuestaUsuario){
//     switch (respuestaUsuario){
//         case 1:
//             let productoIngresado;
//             do {
//                 productoIngresado = prompt(`Ingresa un nombre de producto que desees comprar, aquí nuestro catálogo: ${mostrarNombres()}`);
//                 if (comparacionNombres(productoIngresado) === -1) {
//                     alert("No has ingresado un producto existente! vuelve a intentarlo. 😓");
//                 }
//             } while (comparacionNombres(productoIngresado) === -1);
//             let productoDeUsuario = encontrarPrecioProducto(productoIngresado.toUpperCase());
//             compraUsuario(productoDeUsuario);
//             break;
//         case 2:
//             alert("Esta página está hecha en representación por una serie que me gustó mucho que se encuentra en Netflix llamada HOW TO SELL DRUGS ONLINE(FAST), es corta y muy buena, súper recomendada.");
//             break;
//         default:
//             alert("No has ingresado un número correcto! vuelve a intentarlo 😓");
//             bienvenida();
//     }
// }

// function encontrarPrecioProducto(nombreProducto){
//     return arrayProductos.filter(producto => producto.nombre == nombreProducto);
// }

// function compraUsuario(producto){
//     let precioProducto = producto[0].precio;
//     let cantidadProducto;
//     do {
//         cantidadProducto = parseInt(prompt("Desearías más de una unidad? Ingresa la cantidad que deseas llevar:"));
//         if(!validacionNumber(cantidadProducto)){
//             alert("No es posible multiplicarlo por ese número! 😵‍💫")
//         }
//     } while (!validacionNumber(cantidadProducto))
//     alert("Muy bien! entonces su costo final será de: " + precioProducto * cantidadProducto + "BTC");
// }

// bienvenida();
