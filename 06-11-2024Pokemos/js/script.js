//obtener lista de pokemon desde la API https://pokeapi.co/api/v2/pokemon

async function obtenerPokemons(){
    try { 
        let consulta = await fetch('https://pokeapi.co/api/v2/pokemon');
        let respuesta = await consulta.json();
        return respuesta.results;

    } catch(error) {
        console.log("Error al consultar los pokemon: ", error);
    }
}

function primeraMayuscula(nombre){
    return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

async function mostrarPokemons() {
    const pokemons = await obtenerPokemons();
    const contenedor = document.getElementById('pokemons');

    pokemons.forEach(pokemon => {
        let pokemonList = document.createElement('div');
        pokemonList.classList.add('pokemon');

        let nombre = document.createElement('h3');
        nombre.textContent = primeraMayuscula(pokemon.name);

        let botonVer = document.createElement('button');
        botonVer.textContent = 'Ver detalle';
        botonVer.addEventListener('click', () => abrirModal(pokemon.url));
        
        pokemonList.appendChild(nombre);
        pokemonList.appendChild(botonVer);
        contenedor.appendChild(pokemonList);
    });
}

async function pokemonDetalles(url){
    try {
        let consulta = await fetch(url);
        let respuesta = await consulta.json();
        return respuesta;

    } catch (e) {
        console.log(e);
    }
}

async function abrirModal(url){


    const pokemon = await pokemonDetalles(url);
    const modal = document.getElementById('modal');

    modal.style.display = 'flex';

    const modalContenido = document.getElementById('modalContenido');
    modalContenido.innerHTML = ''; //Limpiar el contenido previo

    let nombre = document.createElement('h2');
    nombre.textContent = primeraMayuscula(pokemon.name);

    let img = document.createElement('img');
    img.src = pokemon.sprites.front_default;
    img.alt = pokemon.name;

    let habilidades = document.createElement('p');
    habilidades.textContent = `Habilidades: ${pokemon.abilities.map(abilitie => primeraMayuscula(abilitie.ability.name)).join(', ')}`;

    let botonCerrar = document.createElement('button');
    botonCerrar.id = 'cerrarModal';
    botonCerrar.className = 'modal-close';
    botonCerrar.textContent = 'Cerrar';
    botonCerrar.onclick = () => cerrarModal();

    modalContenido.appendChild(img);
    modalContenido.appendChild(nombre);
    modalContenido.appendChild(habilidades);
    modalContenido.appendChild(botonCerrar);

}

function cerrarModal(){
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

mostrarPokemons();