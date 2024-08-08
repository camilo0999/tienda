const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

const searchBtn = document.querySelector('.content nav form .form-input button');
const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
const searchForm = document.querySelector('.content nav form');

searchBtn.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault;
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search');
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});

const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});

function openModal() {
    document.getElementById('crud-modal').style.display = 'flex';
};

function closeModal() {
    document.getElementById('crud-modal').style.display = 'none';
};

function openEditModal(id) {
    // Lógica para abrir el modal de edición
    console.log("Abrir modal de edición para ID:", id);
}

function confirmDelete(id) {
    if (confirm("¿Estás seguro de que quieres eliminar este elemento?")) {
        // Crear un formulario dinámico
        var form = document.createElement('form');
        form.method = 'POST';
        form.action = '/admin/shirt/delete/' + id;

        // Agregar un campo CSRF si es necesario
        var csrfField = document.createElement('input');
        csrfField.type = 'hidden';
        csrfField.name = '_csrf';
        csrfField.value = document.querySelector('meta[name="_csrf"]').getAttribute('content');
        form.appendChild(csrfField);

        // Enviar el formulario
        document.body.appendChild(form);
        form.submit();
    }
}


