let pokemons = [
    {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
    {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
    {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
    {id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32},
    {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35},
    {id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32},
    {id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30},
    {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
    {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
    {id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30},
]
//1. Ordernar los pokemons por base_damage de menor a mayor.
function ordenarPokemonsBD(){
    pokemons.sort((a,b)=>a.base_damage-b.base_damage);
    return pokemons
}
 
//2. Crear una funcion para ordernar los pokemons dependiendo de el argumento que se ingrese en la funcion. Pueden ingresar: type, base_damage, base_hp o speed.
function ordenarPokemonsArgument(argument){
    if(argument==="name" || argument === "type"){
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

//4. Crear un objeto llamado Pokemon Master que tenga los siguientes atributos: id: number, name: string, created_date: string, y pokemon: array of objects.
let Pokemon_Master = {
    id: 1,
    name:"Jose",
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
    console.log("se agregaron correctamente las propiedades min_damage y max_damage")
    return pokemons
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
        console.log("se agrego correctamente el daño causado");
        return pokemons
    }else{
        return "Ejecutar primero funcion AgregarMinMaxDamage()"
    }
      
}

