document.addEventListener('DOMContentLoaded', function () {

    //una mejor opción para hacer el delete
    const list = document.querySelector('#book-list ul');
    list.addEventListener('click', function (mejor) {
        if (mejor.target.className == 'delete') {
            console.log(mejor.target.parentElement);
            const li_borrado = mejor.target.parentElement;
            list.removeChild(li_borrado);
        }
    });

    const padre = document.querySelector('#form-group');

    const title = document.getElementById('#modal-title');

    const btn = document.getElementById('modal-btn');
    btn.addEventListener('click', function (e) {
        console.log(btn);
    });

    //añadir libro ('submit': The event occurs when a form is submitted)
    const addForm = document.forms['add-book'];
    addForm.addEventListener('submit', function (formulario) {
        formulario.preventDefault();//evita que el botón add recargue la página
        const anyadir_input = addForm.querySelector('input[type="text"]').value;//valor 

        //crear elementos
        const li = document.createElement('li');//elemento padre de ambos
        const bookName = document.createElement('span');//nombre
        const deleteBtn = document.createElement('span');//boton borrar
        const editBtn = document.createElement('span');//boton editar
        const check = document.createElement('span');//checkbox

        //añadir contenido
        deleteBtn.textContent = 'delete';
        editBtn.innerHTML = 'edit';
        editBtn.style.marginRight = "8px";
        bookName.innerHTML = anyadir_input; //se añade lo que hay en el cuadro de texto
        check.innerHTML = `is done`;

        //añadir clases (para que salga la configuración de estilo, por ej)
        bookName.classList.add('name');
        deleteBtn.classList.add('delete');
        editBtn.classList.add('edit');
        check.classList.add('done');

        //adjuntar, añadir elementos como hijos a un nodo padre
        li.appendChild(bookName);
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        li.appendChild(check);
        list.appendChild(li);

        const buscar = document.querySelector('#search-books');
        console.log(buscar);
        buscar.style.display = 'block';
    });

    // const hide = document.querySelector('.ocultar');
    // hide.addEventListener('click', function (ocultado) {
    //     const e = document.getElementsByClassName('hecho');
    //     Array.from(e).forEach(function (e) {
    //         if (e.style.display == "block") {
    //             e.style.display = "none";
    //             console.log(e);
    //         } else {
    //             e.parentElement.style.display = "block";
    //             e.style.display = "block";
    //         }
    //     });
    // });


    //filtro busqueda
    const searchBar = document.forms['search-books'].querySelector('input');
    searchBar.addEventListener('keyup', function (tecleo) {
        const term = tecleo.target.value.toLowerCase();
        const libros = list.getElementsByTagName('li');

        Array.from(libros).forEach(function (recorre) {
            const libro_encontrado = recorre.firstElementChild.textContent;
            if (libro_encontrado.toLowerCase().indexOf(term) != -1) {
                recorre.style.display = "block";
            } else {
                recorre.style.display = "none";
            }

        })

    });

    const title_libro = document.querySelector('#wrapper #book-list ul');
    title_libro.addEventListener('click', function (e) {
        if (e.target.className == 'edit') {

            //elemento padre y primer hijo
            const buscar = e.target.parentElement;
            // console.log(buscar);
            const searching = buscar.firstElementChild;
            // console.log(searching);

            buscar.innerHTML = `<input id="valor" type="text" placeholder="${searching.textContent}"/>
                                       <span class="save">save</span>
                                       <span class="back">back</span>`;
        }
    });

    const title_libro2 = document.querySelector('#wrapper #book-list ul');
    title_libro2.addEventListener('click', function (e) {
        if (e.target.className == 'save') {
            const buscar2 = e.target.parentElement;
            console.log(buscar2);
            const buscar3 = document.getElementById('valor');
            console.log(buscar3.value);
            buscar2.innerHTML = `<span class="name" style="width: 20vh">${buscar3.value}</span>
                                                <span class="delete">delete</span>
                			                    <span class="edit">edit</span>
                                                <span class="done">is done</span>`;
        }
    });

    const title_libro5 = document.querySelector('#wrapper #book-list ul');
    title_libro5.addEventListener('click', function (e) {
        if (e.target.className == 'back') {
            const buscar2 = e.target.parentElement;
            const t = buscar2.firstElementChild;
            console.log(t.placeholder);
            buscar2.innerHTML = `<span class="name">${t.placeholder}</span>
                                                <span class="delete">delete</span>
                			                    <span class="edit">edit</span>
                                                <span class="done">is done</span>`;
        }
    });

    title_libro.addEventListener('click', function (e) {
        if (e.target.className == 'done') {

            const tachar = e.target.parentElement.firstElementChild;
            const holaadios = tachar.parentElement;
            holaadios.style.borderLeftColor = "green";
            holaadios.style.borderRightColor = "rgb(144, 255, 97)";
            holaadios.classList.add('hecho');

            const nueva_variable4 = e.target.parentElement.children[0];
            nueva_variable4.style.color = "black";
            console.log(nueva_variable4);

            const nueva_variable = e.target.parentElement.children[2];
            // console.log(nueva_variable);
            nueva_variable.style.display = "none";

            const nueva_variable2 = e.target.parentElement.children[1];
            // console.log(nueva_variable);
            nueva_variable2.style.display = "none";

            const nueva_variable22 = e.target.parentElement.children[3];
            // // console.log(nueva_variable22);
            // nueva_variable22.textContent = "task done";
            // nueva_variable22.style.backgroundColor = "green";
            // nueva_variable22.style.borderBottomColor = "black";
            nueva_variable22.style.display = "none";

            const nueva_variable3 = e.target.parentElement;
            // console.log(nueva_variable3);
            nueva_variable3.style.backgroundColor = "rgb(144, 255, 97)";
            nueva_variable3.style.color = "black";
            // nueva_variable3.textContent = "done";
        }
    });
});

















