//                                                         SHOP.HTM
let productos = [];

const returnImplicito = (variable) =>{
    if (!variable) return;
}

const cargarJSON = () =>{
    fetch("../json/productos.json")
    .then(function (res){
        return res.json();
    })
    .then(function (data){
        data.forEach((items) =>{
            productos.push(items)
        })
        renderProductos(); 
    })
    .catch(error => {
        console.error("Error al cargar los productos:" + error);
    });
}

const renderProductos = () => {
    const carouselContenedor = document.getElementsByClassName("carouselContenedor")[0];
    returnImplicito(carouselContenedor);

    let contenido = "";
    productos.forEach((producto, index) => {
        contenido += `
            <div id="${index + 1}" class="carousel-item ${producto.nombre === "BLUE CLOVER" ? 'active' : ''}">
                <div class="container d-flex flex-row align-items-center"> 
                    <img src="${producto.imagen}" class="d-block w-50" alt="pastilla de éxtasis de nombre ${producto.nombre}">
                    <div class="d-flex flex-column justify-content-center informacionProducto text-white w-25">
                        <h2 class="tituloProducto">${producto.nombre}</h2>
                        <div class="subtituloCards">
                        <span>Recommended</span>
                        </div>
                        <p class="h3">GOODTIMES LIMITED</p>
                        <div class="estrellasProducto">
                            <i class="bi bi-star-fill estrellas"></i>
                            <i class="bi bi-star-fill estrellas"></i>
                            <i class="bi bi-star-fill estrellas"></i>
                            <i class="bi bi-star-fill estrellas"></i>
                            <i class="bi bi-star-fill estrellas"></i>
                        </div>
                        <div class="precioProducto">${producto.precioBTC} BTC / ${producto.precioETH} ETH</div>
                        <div class="descripcionProducto">${producto.descripcion}</div>
                        <div class="sugerenciasProducto">${producto.sugerencias}</div>
                    </div>
                    <div class="compraProducto text-white w-25">
                        <div class="contenedorCompra d-flex flex-column justify-content-center align-items-center p-4">
                            <div class="w-75">
                                <p>Guaranteed delivery within 4 workdays. Choose premium delivery at checkout for faster shipping options. <span class="pt-3">Free shipping Worldwide <a class="text-white" href="https://trollface.dk/">Learn more about our shipment methods</a></span></p>
                            </div>
                            <div class="stockProducto w-75">In Stock</div>
                            <div class="cantidadElegidaProducto w-75 mb-2 mt-2">
                                <div>
                                    Qty: <span>1</span> 
                                    <svg class="botonIncrementaProd" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M240 102c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 228.66 16 172 16 102a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 48.88 157.35 40 178 40a62.07 62.07 0 0 1 62 62"/></svg>
                                </div>
                            </div>
                            <div class="contenedorBotonCarrito w-75 text-center mb-2">
                                <a class="links text-white botonCarrito">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"/></svg>
                                    Add to Cart
                                </a>
                            </div>
                            <div class="contenedorBotonComprar w-75 text-center">
                            <a class="links text-white botonComprar" href="">
                                ▷Buy now
                            </a>
                            </div>
                            <div class="pt-4">Shipped and sold by <a class="text-white" href="https://trollface.dk/">myDrugs.com</a></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
    
    carouselContenedor.innerHTML += contenido;
    
    let estrellas = document.querySelectorAll(".estrellas");
    estrellas.forEach(function (estrella, index) {
        estrella.addEventListener("click", function (){
            for (let i=0; i<=index; i++){
                estrellas[i].classList.add("checked");
            }
            for (let i=index+1; i<estrellas.length; i++){
                estrellas[i].classList.remove("checked");
            }
        })
    })
}

function alertaCarrito (){
    Toastify({
        text: "Agregado al carrito con éxito!",
        duration: 3000
    }).showToast();
}

const guardarEnLS = (clave, valor) =>{
    localStorage.setItem(clave, JSON.stringify(valor));
}

const obtenerDeLS = clave => JSON.parse(localStorage.getItem(clave)) || [];

function agregarAlCarrito() {
    const contenedorProductos = document.getElementsByClassName("carouselContenedor")[0];
    returnImplicito(contenedorProductos);

    contenedorProductos.addEventListener("click", e => {
        if (e.target.closest(".botonCarrito")) {
            e.preventDefault();
            const contenedorBotonCarrito = e.target.closest('.contenedorBotonCarrito');
            const productoTarjeta = contenedorBotonCarrito.closest(".carousel-item");
            if (productoTarjeta) {
                const productoNombre = productoTarjeta.querySelector(".tituloProducto").textContent;
                const cantidadElegida = parseInt(productoTarjeta.querySelector(".cantidadElegidaProducto span").textContent);
                if (productoNombre) {
                    const producto = productos.find(producto => producto.nombre === productoNombre);
                    if (producto) {
                        producto.cantidad = cantidadElegida;
                        carritoLocalStorage(producto);
                    }
                } else {
                    alert(`No se encontró un nombre de producto que coincida con ${productoNombre}`);
                }
            } else {
                alert("No se encontró card de este producto! :(");
            }
        } else if (e.target.closest(".botonComprar")){
            e.preventDefault();
            const contenedorBotonComprar = e.target.closest('.contenedorBotonComprar');
            const productoTarjeta = contenedorBotonComprar.closest(".carousel-item");
            if (productoTarjeta) {
                const productoNombre = productoTarjeta.querySelector(".tituloProducto").textContent;
                const cantidadElegida = parseInt(productoTarjeta.querySelector(".cantidadElegidaProducto span").textContent);
                if (productoNombre) {
                    const producto = productos.find(producto => producto.nombre === productoNombre);
                    if (producto) {
                        producto.cantidad = cantidadElegida;
                        carritoLocalStorage(producto);
                        window.location.href = "cart.html";
                    }
                } else {
                    alert(`No se encontró un nombre de producto que coincida con ${productoNombre}`);
                }
            } else {
                alert("No se encontró card de este producto! :(");
            }
        }
    });
}

function carritoLocalStorage(producto){
    let carrito = obtenerDeLS("carritoUsuario");
    const productoExistente = carrito.find(prod => prod.nombre === producto.nombre);
    productoExistente ? productoExistente.cantidad += producto.cantidad : carrito.push(producto);
    guardarEnLS("carritoUsuario", carrito);
    alertaCarrito();
}

const incrementaProducto = () => {
    const contenedorProductos = document.getElementsByClassName("carouselContenedor")[0];
    returnImplicito(contenedorProductos);

    contenedorProductos.addEventListener("click", e => {
        if (e.target.closest(".botonIncrementaProd")) {
            e.preventDefault();
            const contenedorBotonIncrementa = e.target.closest('.cantidadElegidaProducto');
            const productoTarjeta = contenedorBotonIncrementa.closest(".carousel-item");
            if (productoTarjeta){
                const productoNombre = productoTarjeta.querySelector(".tituloProducto").textContent;
                const producto = productos.find(producto => producto.nombre === productoNombre);
                if (producto){
                    producto.cantidad++;
                    contenedorBotonIncrementa.querySelector('span').textContent = producto.cantidad;
                }
            } else {
                alert("No se encontró card de este producto! :(");
            }
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    cargarJSON();
    agregarAlCarrito();
    incrementaProducto();

    const contenedorProductos = document.getElementsByClassName("carouselContenedor")[0];
    if (contenedorProductos) {
        contenedorProductos.addEventListener("click", e =>{
            if (e.target.closest(".botonComprar a")) {
                e.preventDefault();
                agregarAlCarrito();
            }
        });
    }
});

//                                                           TERMINA SHOP.HTML

//                                                           CART.HTML

const contenidoProductos = document.getElementById("productosElegidos");

let productosCarrito = obtenerDeLS("carritoUsuario");

const calcularTotal = (moneda) => {
    let total = 0;
    productosCarrito.forEach((producto) => {
        moneda == "BITCOIN" ? total += producto.cantidad * producto.precioBTC : total += producto.cantidad * producto.precioETH;
    });
    return total;
}

const mostrarPrecioMoneda = e =>{
    let total = 0;
    const monedaElegida = e.target.value.toUpperCase();
    productosCarrito.forEach((producto, index) => {
        const precioProdCarrito = document.getElementById(`precio-${index}`);
        if (monedaElegida == "BITCOIN"){
            precioProdCarrito.innerText = `${producto.precioBTC} BTC`;
            total = total + producto.cantidad * producto.precioBTC;
        } else if (monedaElegida == "ETHEREUM"){
            precioProdCarrito.innerText = `${producto.precioETH} ETH`;
            total = total + producto.cantidad * producto.precioETH;
        } else {
            precioProdCarrito.innerText = `${producto.precioETH} ETH`;
            total = total + producto.cantidad * producto.precioBTC;
        }
    })
    const totalPagar = document.getElementById("cuentaFinalCarrito");
    if (monedaElegida == "BITCOIN") {
        totalPagar.innerHTML = `
        <div class="text-white text-center h2">TOTAL : ${total.toFixed(4)} BTC</div>
        <button class="btnFinCompra">
            <span class="text">Finalizar compra</span>
        </button>
        `;
    } else if (monedaElegida == "ETHEREUM") {
        totalPagar.innerHTML = `
        <div class="text-white h2">TOTAL : ${total.toFixed(4)} ETH</div>
        <button class="btnFinCompra">
        <span class="text">Finalizar compra</span>
        </button>
        `;
    }
}

function renderCarrito (){
    returnImplicito(contenidoProductos);
    let contenido = "";
    productosCarrito.forEach((producto, index) => {
        contenido += `
        <div class="productoCarrito d-flex">
            <div class="w-100 infoProducto d-flex justify-content-between align-items-center">
                <div class="imgprodCarrito">
                    <img src="${producto.imagen}" alt="pastilla de éxtasis de nombre ${producto.nombre}">
                </div>
                <h4 class="h6 text-white p-2">Nombre: <span class="h5">${producto.nombre}</span></h4>
                <p class="h6 text-white p-2">Precio unitario: <span class="h5 precioProdCarrito" id="precio-${index}"></span></p>
                <p class="h6 text-white p-2">Cantidad: <span class="h5">${producto.cantidad}</span></p>
            </div>
        </div>
        `
    })
    contenidoProductos.innerHTML += contenido;
}

document.addEventListener("DOMContentLoaded", () => {
    renderCarrito();
    const monedaSelect = document.getElementById("monedaSelect");
    returnImplicito(monedaSelect);
    
    monedaSelect.addEventListener("change", mostrarPrecioMoneda);
    const evento = { target: { value: 'BITCOIN' } };
    mostrarPrecioMoneda(evento);
});

