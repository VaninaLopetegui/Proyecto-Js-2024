class Producto {
    constructor (nombre, estrellas, precioBTC, precioETH, descripcion, stock, imagen, sugerencias){
        this.nombre = nombre,
        this.estrellas = estrellas,
        this.precioBTC = precioBTC,
        this.precioETH = precioETH,
        this.descripcion = descripcion,
        this.stock = stock,
        this.imagen = imagen,
        this.sugerencias = sugerencias
    }
}

let bluePill = new Producto("BLUE CLOVER", 5, 0.0029, 0.0035, "A high quality product our premium source, All the MDMA you will ever need, and much more. With 400mg of MDMA per pill it guarantees an extrordinary experience", 3450, "../img/blue_pill.png", "hi");

let greenPill = new Producto("GREEN SNOWFLAKE", 3, 0.0044, 0.0050, "A high quality product our premium source, All the MDMA you will ever need, and much more. With 400mg of MDMA per pill it guarantees an extrordinary experience", 4600, "../img/green_pill.png", "hi");

let pinkPill = new Producto("PINK SMILE", 3, 0.0017, 0.0023, "A high quality product our premium source, All the MDMA you will ever need, and much more. With 400mg of MDMA per pill it guarantees an extrordinary experience", 3000, "../img/pink_pill.png", "hi");


let purplePill = new Producto("PURPLE FLOWER", 4, 0.0021, 0.0027, "A high quality product our premium source, All the MDMA you will ever need, and much more. With 400mg of MDMA per pill it guarantees an extrordinary experience", 8700, "../img/purple_pill.png", "hi");

let redPill = new Producto("RED PILL", 2, 0.0013, 0.0019, "A high quality product our premium source, All the MDMA you will ever need, and much more. With 400mg of MDMA per pill it guarantees an extrordinary experience", 6300, "../img/red_pill.png", "hi");

let yellowPill = new Producto("YELLOW EMOJI", 5, 0.0050, 0.0056, "A high quality product our premium source, All the MDMA you will ever need, and much more. With 400mg of MDMA per pill it guarantees an extrordinary experience", 6300, "../img/yellow_pill.png", "hi");

let productos = [];

productos.push(bluePill, greenPill, pinkPill, purplePill, redPill, yellowPill);


const renderProductos = () => {
    let contenido = "";
    let carouselItem = document.getElementsByClassName("carousel-item")[0];
    productos.forEach(producto => {
        contenido += `
            <div class="carousel-item ${producto.nombre === "BLUE CLOVER" ? 'active' : ''}">
                <div class="container d-flex flex-row"> 
                    <img src="${producto.imagen}" class="d-block w-25 imagenProducto" alt="pastilla de éxtasis de nombre ${producto.nombre}">
                    <div class="d-flex flex-column informacionProducto text-white">
                        <h2 class="tituloProducto">${producto.nombre}</h2>
                        <div class="estrellasProducto">${producto.estrellas}</div>
                        <div class="precioProducto">${producto.precioBTC} BTC / ${producto.precioETH} ETH</div>
                        <div class="descripcionProducto">${producto.descripcion}</div>
                        <div class="sugerenciasProducto">${producto.sugerencias}</div>
                    </div>
                    <div class="compraProducto text-white">
                        <p>Guaranteed delivery within 4 workdays. Choose premium delivery at checkout for faster shipping options. <span>Free shipping Worldwide <a>Learn more about our shipment methods</a></span></p>
                        <div class="stockProducto">En stock</div>
                        <div class="cantidadElegidaProducto">Qty: <span>1</span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M240 102c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 228.66 16 172 16 102a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 48.88 157.35 40 178 40a62.07 62.07 0 0 1 62 62"/></svg>
                        </div>
                        <div class="botonCarrito">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"/></svg>
                            Add to Cart
                        </div>
                        <div class="botonComprar">▷Buy now</div>
                        <div class="botonComprar">Shipped and sold by myDrugs.com</div>
                    </div>
                </div>
            </div>
        `
    })
    
    document.getElementsByClassName("carouselContenedor")[0].innerHTML = contenido;

}

document.addEventListener("DOMContentLoaded", renderProductos);