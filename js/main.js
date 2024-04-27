let validacionNumber = (variable) => !isNaN(variable) && variable != null && variable != "";

function bienvenida(){
    let usuarioBienvenida;
    do{
        usuarioBienvenida = parseInt(prompt("En qué te podemos ayudar? 1.Catalogo de productos 2.Información sobre nosotros"));
        if(validacionNumber(usuarioBienvenida)){
            opcionesUsuario(usuarioBienvenida);
        } else {
            alert("No has ingresado un número! vuelve a intentarlo. 😓");
        }
    } while(isNaN(usuarioBienvenida))
}

function opcionesUsuario(respuestaUsuario){
    switch (respuestaUsuario){
        case 1:
            let productoIngresado;
            do {
                productoIngresado = parseInt(prompt("Aquí nuestros productos! :D 1.Píldora blue clover->0.0029BTC 2.Píldora purple flower->0.0021BTC 3.Píldora green snowflake->0.0044BTC 4.Píldora pink smile->0.0017BTC"));
                if (!validacionNumber(productoIngresado)) {
                    alert("No has ingresado un número! vuelve a intentarlo. 😓");
                }
            } while (!validacionNumber(productoIngresado));
            compraUsuario(productoIngresado);
            break;
        case 2:
            alert("Esta página está hecha en representación por una serie que me gustó mucho que se encuentra en Netflix llamada HOW TO SELL DRUGS ONLINE(FAST), es corta y muy buena, súper recomendada.");
            break;
        default:
            alert("No has ingresado un número correcto! vuelve a intentarlo 😓");
            bienvenida();
    }
}

let productosPreciosPorNum = [0.0029, 0.0021, 0.0044, 0.0017];

function compraUsuario(producto){
    if(producto==1 || producto==2 || producto==3 || producto==4){
        let productoPosicion = producto - 1;
        let precioProducto = productosPreciosPorNum[productoPosicion];
        let cantidadProducto;
        do {
            cantidadProducto = parseInt(prompt("Desearías más de una unidad? Ingresa la cantidad que deseas llevar:"));
            if(!validacionNumber(cantidadProducto)){
                alert("No es posible multiplicarlo por ese número! 😵‍💫")
            }
        } while (!validacionNumber(cantidadProducto))
        alert("Muy bien! entonces su costo final será de: " + precioProducto * cantidadProducto + "BTC");
    } else {
        alert("No has ingresado un producto existente! 😓");
    }
}

alert("Hola, te damos la bienvenida a nuestra página web🤩❗❗");

bienvenida();









