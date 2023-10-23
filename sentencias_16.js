
use tienda_informatica
db.createCollection("fabricantes")
db.fabricantes.insert({"nombre":"epson"})
db.fabricantes.insert({"nombre":"sony"})
db.fabricantes.insert({"nombre":"ibm"})
db.fabricantes.insert({"nombre":"lenovo"})
db.createCollection("articulos")
db.articulos.insert({"nombre":"impresora","precio":120,"fabricante":"653687a235884c87509d20d7"})
db.articulos.insert({"nombre":"tonner","precio":120,"fabricante":"653687a235884c87509d20d7"})
db.articulos.insert({"nombre":"impresora laser","precio":220,"fabricante":"653687a235884c87509d20d7"})
db.articulos.insert({"nombre":"bobina","precio":120,"fabricante":"653687a235884c87509d20d8"})
// todos los fabricantes
db.fabricantes.find()
// listar la impresora
db.articulos.find({"nombre": "impresora"})


use empleados
db.createCollection("empleados")
db.createCollection("departamentos")
db.departamentos.insert({"nombre":"Marketing","presupuesto":500})
db.departamentos.insert({"nombre":"Recursos humanos","presupuesto":500})
db.departamentos.insert({"nombre":"Software","presupuesto":500})
db.departamentos.insert({"nombre":"Reparaciones","presupuesto":500})
db.empleados.insert({
    "dni":"47765234Z","nombre":"Joan","apellidos":"carmel","departamento":"653689d535884c87509d20e4"
})
db.empleados.insert({
    "dni":"324234J","nombre":"Lara","apellidos":"cañon","departamento":"653689d535884c87509d20e4"
})
db.empleados.insert({
    "dni":"324234J","nombre":"Eustaquio","apellidos":"garzón","departamento":"653689e235884c87509d20e6"
})
db.empleados.insert({
    "dni":"5674536I","nombre":"Isaura","apellidos":"Bechamel","departamento":"653689e835884c87509d20e7"
})
// buscar a isaura
db.empleados.find({"dni": "5674536I"})
//mostrar todos los departamentos
db.empleados.find()

use almacenes
db.createCollection("almacenes")
db.createCollection("cajas")
db.almacenes.insert({"lugar":"Tarragona","capacidad":50})
db.almacenes.insert({"lugar":"Reus","capacidad":50})
db.almacenes.insert({"lugar":"Valls","capacidad":50})
db.almacenes.insert({"lugar":"Constanti","capacidad":50})
db.cajas.insert({"contenido":"tornillos","valor":50,"almacen":"65368b4235884c87509d20ed"})
db.cajas.insert({"contenido":"clavos","valor":35,"almacen":"65368b4235884c87509d20ed"})
db.cajas.insert({"contenido":"revistas","valor":100,"almacen":"65368b4b35884c87509d20ee"})
db.cajas.insert({"contenido":"pomos de puerta","valor":100,"almacen":"65368b4b35884c87509d20ee"})
// buscar almacen tarragona
db.almacenes.find({"lugar": "Tarragona"})
//mostrar todas las cajas
db.cajas.find()

use cines 
db.createCollection("salas")
db.createCollection("peliculas")
db.peliculas.insert({"nombre":"Harry potter","calificacion_edad":7})
db.peliculas.insert({"nombre":"DBS La resurreció de freezer","calificacion_edad":12})
db.peliculas.insert({"nombre":"Kill bill vol 2","calificacion_edad":16})
db.peliculas.insert({"nombre":"Barbie","calificacion_edad":7})
db.salas.insert({"nombre":"Sala 01","pelicula":"65368c8a35884c87509d20f5"})
db.salas.insert({"nombre":"Sala 02","pelicula":""})
db.salas.insert({"nombre":"Sala 03","pelicula":"65368c9335884c87509d20f6"})
db.salas.insert({"nombre":"Sala 04","pelicula":"65368ca135884c87509d20f8"})

// mostrar peliculas de calificacion_edad 7
db.peliculas.find({"calificacion_edad":7})
//mostrar todas las salas
db.salas.find()



use directores
db.createCollection("directores")
db.createCollection("despachos")
db.despachos.insert({"numero":1,"capacidad":5})
db.despachos.insert({"numero":2,"capacidad":7})
db.despachos.insert({"numero":3,"capacidad":8})
db.despachos.insert({"numero":4,"capacidad":9})
db.directores.insert({"dni":"554534kL","nomapels":"Alfonso Garrido","despacho":'65368e9935884c87509d20fd'})
db.directores.insert({"dni":"2323434P","nomapels":"Lara Carbó","despacho":'65368e9935884c87509d20fd'})
db.directores.insert({"dni":"3456435Z","nomapels":"Lourdes Anafrasia","despacho":'65368e9935884c87509d20fd'})
db.directores.insert({"dni":"22133234H","nomapels":"Alfonso Perez","despacho":'65368e9935884c87509d20fd',"dni_jefe":"554534kL"})

// mostrar director con determinado dni
db.directores.find({"dni":"554534kL"})
//mostrar todas los despachos
db.despachos.find()


use piezas
db.createCollection("piezas")
db.createCollection("suministra")
db.createCollection("proveedores")
db.piezas.insert({"nombre":"Tuerca 8mm"})
db.piezas.insert({"nombre":"Tuerca 7mm"})
db.piezas.insert({"nombre":"Tuerca 6mm"})
db.piezas.insert({"nombre":"Tuerca thor 8mm"})
db.proveedores.insert({"nombre":"Sony"})
db.proveedores.insert({"nombre":"Samsung"})
db.proveedores.insert({"nombre":"Sanyo"})
db.proveedores.insert({"nombre":"Aiwa"})
db.suministra.insert({"pieza":"6536923d35884c87509d2106","proveedor":"6536927b35884c87509d210c"})
db.suministra.insert({"pieza":"6536924235884c87509d2107","proveedor":"6536927b35884c87509d210b"})
db.suministra.insert({"pieza":"6536924835884c87509d2108","proveedor":"6536927b35884c87509d210c"})
db.suministra.insert({"pieza":"6536924d35884c87509d2109","proveedor":"6536927b35884c87509d210b"})

// mostrar proveedor con nombre Sony
db.proveedores.find({"nombre":"Sony"})
//mostrar todas las piezas
db.piezas.find()



use grandes_almacenes
db.createCollection("cajeros")
db.createCollection("productos")
db.createCollection("ventas")
db.createCollection("maquinas_registradoras")
db.cajeros.insert({"nomapels":"Jose castaña"})
db.cajeros.insert({"nomapels":"Laura Pleistoceno"})
db.cajeros.insert({"nomapels":"Marc sanguin"})
db.cajeros.insert({"nomapels":"Carlos Llopis"})
db.productos.insert({"nombre":"Vinilo Janis Joplin","precio":20})
db.productos.insert({"nombre":"Pokemon escudo","precio":40})
db.productos.insert({"nombre":"Tostadora philips","precio":30})
db.productos.insert({"nombre":"Esterilla Jardin","precio":12})
db.maquinas_registradoras.insert({"piso":1})
db.maquinas_registradoras.insert({"piso":2})
db.maquinas_registradoras.insert({"piso":3})
db.maquinas_registradoras.insert({"piso":1})
db.ventas.insert({"cajero":"6536953535884c87509d2112","producto":"6536953535884c87509d2118","maquina":"6536953535884c87509d211b"})
db.ventas.insert({"cajero":"6536953535884c87509d2112","producto":"6536953535884c87509d2116","maquina":"6536953535884c87509d211c"})
db.ventas.insert({"cajero":"6536953535884c87509d2112","producto":"6536953535884c87509d2118","maquina":"6536953535884c87509d211b"})
db.ventas.insert({"cajero":"6536953535884c87509d2113","producto":"6536953535884c87509d2119","maquina":"6536953535884c87509d211c"})

// mostrar las maquinas del piso 1
db.maquinas_registradoras.find({"piso":1})
//mostrar todos los productos
db.productos.find()


use facultades
db.createCollection("facultades")
db.createCollection("investigadores")
db.createCollection("reservas")
db.createCollection("equipos")
db.facultades.insert({"nombre":"Sescelades"})
db.facultades.insert({"nombre":"Juridiques"})
db.facultades.insert({"nombre":"SocioSanitario"})
db.facultades.insert({"nombre":"Educacion"})
db.investigadores.insert({"nomapels":"Laura Pleistoceno","dni":"3238998P","facultad":"6536976a35884c87509d2122"})
db.investigadores.insert({"nomapels":"Carla Bracon","dni":"345345H","facultad":"6536976a35884c87509d2122"})
db.investigadores.insert({"nomapels":"Estefano beige","dni":"345235J","facultad":"6536976a35884c87509d2124"})
db.investigadores.insert({"nomapels":"Ambrosio dicatomo","dni":"2342344X","facultad":"6536976a35884c87509d2125"})
db.equipos.insert({"num_serie":123,"nombre":"Debate paleontologia","facultad":"6536976a35884c87509d2122"})
db.equipos.insert({"num_serie":54,"nombre":"Ensayo ciencias","facultad":"6536976a35884c87509d2122"})
db.equipos.insert({"num_serie":33,"nombre":"Laboratorio experimental","facultad":"6536976a35884c87509d2123"})
db.equipos.insert({"num_serie":77,"nombre":"Estudios cretacicos","facultad":"6536976a35884c87509d2122"})
db.reservas.insert({"dni_investigador":"3238998P",
                    "num_serie":123,
                    "comienzo":"20/10/2023"
                    })
db.reservas.insert({"dni_investigador":"2342344X",
                    "num_serie":54,
                    "comienzo":"10/6/2023"
                    })
db.reservas.insert({"dni_investigador":"345345H",
                    "num_serie":33,
                    "comienzo":"12/4/2020",
                    "final":"10/2/2022"
                    })
db.reservas.insert({"dni_investigador":"345235J",
                    "num_serie":77,
                    "comienzo":"12/10/2023"
                    })
// mostrar la facultad de sescelades
db.facultades.find({"nombre": 'Sescelades'})
//mostrar todos los investigadores
db.investigadores.find()


use cientificos
db.createCollection("cientificos")
db.createCollection("proyectos")
db.createCollection("asignado")
db.cientificos.insert({"nomapels":"Laura Pleistoceno","dni":"534987P"})
db.cientificos.insert({"nomapels":"David Ramonero","dni":"3238998P"})
db.cientificos.insert({"nomapels":"Estomacio Garcia","dni":"45345P"})
db.cientificos.insert({"nomapels":"Taciturnio Miranda","dni":"222443P"})
db.proyectos.insert({"nombre":"Proyecto Mayhem","horas":120})
db.proyectos.insert({"nombre":"Proyecto Manhattan","horas":1220})
db.proyectos.insert({"nombre":"Proyecto X","horas":50})
db.proyectos.insert({"nombre":"Proyecto 001","horas":70})
db.asignado.insert({"cientifico":"3238998P","proyecto":"65369b0f35884c87509d2132"})
db.asignado.insert({"cientifico":"45345P","proyecto":"65369b0f35884c87509d2132"})
db.asignado.insert({"cientifico":"222443P","proyecto":"65369b0f35884c87509d2134"})
db.asignado.insert({"cientifico":"222443P","proyecto":"65369b0f35884c87509d2135"})

// mostrar proyectos de 120 horas
db.proyectos.find({"horas": 120})
//mostrar todos los cientificos
db.cientificos.find()

