//cargar tareas
document.getElementById('btn-cargar').onclick = () => {
    fetch ('https://jsonplaceholder.typicode.com/todos')
        .then (response => response.json())
        .then (tareas => cargarTareas(tareas))
        .catch(error => console.log('Error: ', error)
        )
};

function cargarTareas(tareas){
    console.log('tareas', tareas);
    
    const lista=document.getElementById('lista-tareas');
    lista.innerHTML = '';

    tareas.forEach(tarea => {
        const li = document.createElement('li');
        li.textContent = `${tarea.id}: ${tarea.title}`;
        agregarBotones(li, tarea.id)
        lista.appendChild(li);
    })
};

function mostrarTarea(tareas){
    const listaTarea = document.getElementById('lista-tareas');
    //listaTarea.innerHTML = '';

    tareas.forEach(tarea => {
        const li = document.createElement('li');
        li.textContent = `${tarea.id}: ${tarea.title}`;

        const eliminar = document.createElement('button');
        eliminar.textContent = 'Eliminar';
        eliminar.onclick = () => li.remove();
        li.appendChild(eliminar);

        const editar = document.createElement('button');
        editar.textContent = 'Editar';
        editar.onclick = () => editarTarea(tarea.id, li);
        li.appendChild(editar);

        listaTarea.appendChild(li);
    })
}


document.getElementById('btn-agregar').onclick = () => {
    const titulo = document.getElementById('titulo').value;
    const nuevaTarea = {title: titulo, completed: true};

    console.log(titulo);
    if (titulo) {
        fetch('https://jsonplaceholder.typicode.com/todos',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(nuevaTarea)
        })
        .then (response => response.json())
        .then (tareaAgregada => {
            mostrarTarea ([tareaAgregada]);
            titulo.value='';
        })
        .catch (error => console.log('error al enviar', error));
    } else {
        alert ('Por favor Ingrese un titulo')
    }
}

function agregarBotones (li, id){
    const eliminar = document.createElement('button');
    eliminar.textContent = 'Eliminar';
    eliminar.onclick = () => li.remove();
    li.appendChild(eliminar);

    const editar = document.createElement('button');
    editar.textContent = 'Editar';
    editar.onclick = () => editarTarea(id, li);
    li.appendChild(editar);
}

function editarTarea (id, li) {
    const nuevoTitulo = prompt('Ingresar nuevo titulo');

    if (nuevoTitulo){
        fetch('https://jsonplaceholder.typicode.com/todos/${id}',{
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(nuevoTitulo)
        })
        .then (response => response.json())
        .then (tareaEditada => {
            li.textContent = `${tareaEditada.id}: ${tareaEditada.title}`;
            agregarBotones(li, tareaEditada.id)
        })
        .catch (error => console.log('error al editar tarea', error));


    } else {
        alert ('Por favor Ingrese un titulo');
    }
}