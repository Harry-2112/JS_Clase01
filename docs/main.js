let pokemons = [
    {id: 1, nombre: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
    {id: 2, nombre: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
    {id: 3, nombre: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
    {id: 4, nombre: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32},
    {id: 5, nombre: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35},
    {id: 6, nombre: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32},
    {id: 7, nombre: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30},
    {id: 8, nombre: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
    {id: 9, nombre: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
    {id: 10, nombre: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30},
]

const respuesta = document.getElementById("respuesta")



//10. Utilizando javascript crear una tabla de pokemons con las siguientes columnas: id, nombre, type, base_damage, base_hp, speed

function crearTabla(){
    const keys = Object.keys(pokemons[0]);

    let tabla = document.getElementById("tabla");
    let table = document.createElement("table");
    tabla.append(table);
    table.border=1;
    let tr = document.createElement("tr");

    //Creo La cabecera de la tabla
    for (const key in keys) {
        if (Object.hasOwnProperty.call(keys, key)) {
            const element = keys[key];
                table.append(tr);
                const th = document.createElement("th");
                th.textContent=element;
                tr.append(th); 
                th.id=(element)

        }
    }
    //Creo el cuerpo de la tabla
    for (const pokemon in pokemons) {
        if (Object.hasOwnProperty.call(pokemons, pokemon)) {       
            const e = pokemons[pokemon];
            const tr = document.createElement("tr");
            for(let i=0;i<keys.length;i++){
                let td = document.createElement("td");
                keys.forEach((key)=>{
                    key =keys[i]
                    td.textContent = e[key]
                })
                tr.append(td)
                table.append(tr)
            }
        }
    }
    
}
function eliminarTabla(){
    let tabla = document.getElementById("tabla");
    tabla.innerHTML=""
}

//ordenar tabla


//1. Ordernar los pokemons por base_damage de menor a mayor.
function ordenarPokemonsBD(){
    pokemons.sort((a,b)=>a.base_damage-b.base_damage);
    return pokemons
}
 
//2. Crear una funcion para ordernar los pokemons dependiendo de el argumento que se ingrese en la funcion. Pueden ingresar: type, base_damage, base_hp o speed.
function ordenarPokemonsArgument(argument){
    if(argument==="nombre" || argument === "type"){
        pokemons.sort((a,b)=>a[argument].localeCompare(b[argument]))
        return pokemons
    }else{
        if(argument==="base_damage" || argument==="base_hp" || argument==="speed"){
            pokemons.sort((a,b)=>a[argument]-b[argument])
            return pokemons
        }else{
            return ("Error: Ingrese un argumento valido")
        }
    }    
}

//3. Crear una funcion que filtre el objeto pokemons y devuelva un arreglo con los pokemons filtrados. La funcion debe aceptar un argumento para filtrar por type de pokemon.
function filtrarArgumento(argument){
    let filtro = pokemons.filter((element)=>element.type===argument)
    return filtro
}

//4. Crear un objeto llamado Pokemon Master que tenga los siguientes atributos: id: number, nombre: string, created_date: string, y pokemon: array of objects.
let Pokemon_Master = {
    id: 1,
    nombre:"Jose",
    created_date:"25-05-2022",
    pokemon:[],
}


//5. Crear una funcion que de manera aleatoria agregue un nuevo pokemon al atributo pokemon de Pokemon Master.
function agregarPokemonAleatorio(){
    const aleatorio = Math.floor(Math.random()*pokemons.length);
    Pokemon_Master.pokemon.push(pokemons[aleatorio]);
    return Pokemon_Master.pokemon
}

//6. Crear una funcion que agregue de manera aleatoria los atributos min_damage y max_damage a nuestro arreglo de pokemons teniendo en cuenta lo siguiente:
// min_damage debe ser un numero entero aleatorio entre 1 y 2 y max_damage debe ser un numero entero aleatorio entre 3 y 5
function AgregarMinMaxDamage(){
    for (const pokemon in pokemons) {
        if (Object.hasOwnProperty.call(pokemons, pokemon)) {
            const element = pokemons[pokemon];
            const min = Math.round(Math.random()*(2-1)+1);
            const max = Math.round(Math.random()*(5-3)+3);
            element.min_damage = min;
            element.max_damage = max;
        }
    }
    eliminarTabla()
    crearTabla()
    console.log("se agregaron correctamente las propiedades min_damage y max_damage")
    respuesta.innerHTML = "se agregaron correctamente las propiedades min_damage y max_damage"
   
}

//7. Crear una funcion que determine el daño que hara un pokemon elegido de la lista ante una posible pelea, para ello considerar que el daño que hara el pokemon es:
// daño = base_damage + un valor aleatorio entre el min_damage y el max_damage
function agregarDaño(){
    if ("min_damage" in pokemons[0]) {
        for (const pokemon in pokemons) {
            if (Object.hasOwnProperty.call(pokemons, pokemon)) {
                const element = pokemons[pokemon];
                var daño = element.base_damage+(Math.round(Math.random()*(element.max_damage-element.min_damage)+element.min_damage));
                element.daño = daño;
            }
        }
        respuesta.innerHTML="se agrego correctamente el daño causado";
        
    }else{
        respuesta.innerHTML="Ejecutar primero funcion AgregarMinMaxDamage()"
    } 
    eliminarTabla()
    crearTabla()
}

 
//8. Nuestro Pokemon Master quiere estar preparado para pelear, para ello necesita que lo apoyes a ordenar sus pokemons. Colocar tres pokemons con la funcion del ejercicio 5.
// El quiere que sus pokemons se ordenen de manera que el que tenga un mayor valor posible de base_damage + max_damage sea el que este primero en la lista y asi sucesivamente.
 
//9. Crear una lista desordenada de Pokemons en nuestro documento HTML
function listaPokemon(){
    const root = document.getElementById("root");
    const ul = document.createElement('ul');
    root.append(ul);

    pokemons.forEach(pokemon=>{
        const li = document.createElement('li');
        li.textContent = pokemon.nombre;
        ul.append(li)
})
}


 

    
   
//11. Utilizando javascript modifica el codigo creado en el ejecicio anterior y agrega un evento que permita ordenar los pokemons haciendo click en sus encabezados.

 
//12. Corrige la function sortPokemons para que acepte ordenarlos segun id y nombre.
