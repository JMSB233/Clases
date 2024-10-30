//abrir y cerrar el drawer
const drawer = document.getElementById('drawer');
const menuToggle = document.getElementById('menu-toggle');

menuToggle.addEventListener('click', () =>{
    drawer.classList.toggle('open');
});

//cambiar entre tabs de habilidades
const tabs = document.querySelectorAll('.tab-link');
const tabPanes = document.querySelectorAll('.tab-pane');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        //remover de active de todos los tab
        tabs.forEach(t => t.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));

        //agregar la clase active al tab y el pane correspondiente
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
})


const modal = document.getElementById('modal');
const abrirModal = document.getElementById('abrirModal');
const cerrarModalBtn = document.getElementById('.close');

abrirModal.addEventListener('click', () => {
    modal.style.display = 'flex';
});

cerrarModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

document.getElementById('agregarCategoria').addEventListener('click', () => {
    const nuevaCategoria = document.getElementById('nuevaCategoria').value;

    const formDataAdd = new FormData();
    formDataAdd.append('nueva_categoria', nuevaCategoria);

    
});