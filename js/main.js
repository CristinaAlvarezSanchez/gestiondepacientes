const listadoPacientes = document.querySelector('#listaPacientes');
const filtroTexto = document.querySelector('#filtroTexto');
const filtroEdad = document.querySelector('#filtroEdad');
const filtroEnfermedad = document.querySelector('#filtroEnfermedad');
const resetFiltro = document.querySelector('#resetFiltro');
filtroEdad.addEventListener('submit', getDataEdad);
filtroTexto.addEventListener('submit', getDataTexto);
filtroEnfermedad.addEventListener('change', getDataEnfermedad);

// Pintar pacientes
function pintarPacientes(pListadoPacientes, pDom) {
    pDom.innerHTML = "";
    if (pListadoPacientes.length !== 0) {
        pListadoPacientes.forEach(paciente => pintarUnPaciente(paciente, pDom));
    }
    else {
        pDom.innerHTML = `<article class="card p-2 bg-warning">
        <h3 class="text-dark"> NO EXITEN PACIENTES CON ESTE FILTRO </h3>
        </article> `;
    }
};
function pintarUnPaciente(pPaciente, pDom) {
    let article = document.createElement('article');
    article.classList.add('card', 'p-2', 'mb-3')
    let h3 = document.createElement('h3');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    h3.innerText = pPaciente.nombre + ' ' + pPaciente.apellidos;
    p1.innerText = 'Edad: ' + pPaciente.edad;
    p2.innerText = 'Enfermedad: ' + pPaciente.enfermedad;
    p3.innerText = 'Número SS: ' + pPaciente.numSeguridadSocial;

    article.appendChild(h3);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);

    pDom.appendChild(article);
};
pintarPacientes(pacientes, listadoPacientes);

// Pintar enfermedades del listado en el filtro // la lista filtrada de enfermedades está en datos.js
function pintarEnfermedades(pListadoEnfermedades, pDom) {
    pListadoEnfermedades.forEach(enfermedad => pintarUnaEnfermedad(enfermedad, pDom))
};
function pintarUnaEnfermedad(pEnfermedad, pDom) {
    let div = document.createElement('div');
    div.innerHTML = `<label class="form-check-label" for="${pEnfermedad}">${pEnfermedad}</label>
   <input class="form-check-input mb-3" type="radio" name="${pEnfermedad}" id="${pEnfermedad}"> `
    pDom.appendChild(div);

};
pintarEnfermedades(enfermedadesUnicas, filtroEnfermedad);

// Pintar pacientes filtrados
function getDataEdad(event) {
    event.preventDefault();
    let edadMin = event.target.edadMinima.value;
    let edadMax = event.target.edadMaxima.value;
    let filtro = `entre ${edadMin} y ${edadMax} años `;
    pintarPacientes((filtrarPorEdad(pacientes, parseInt(edadMax), parseInt(edadMin))), listadoPacientes);
    pintarFiltro(filtro, resetFiltro);
    filtroEdad.reset();
};
function getDataTexto(event) {
    event.preventDefault();
    let texto = event.target.texto.value;
    let filtro = `con filtro '${texto}' `;
    pintarPacientes((filtrarPorTexto(pacientes, texto)), listadoPacientes);
    pintarFiltro(filtro, resetFiltro);
    filtroTexto.reset();
};
function getDataEnfermedad(event) {
    filtroEnfermedad.reset();
    event.preventDefault();
    let enfermedad = event.target.id;
    let filtro = `con ${enfermedad}`;
    pintarPacientes((filtrarPorEnfermedad(pacientes, enfermedad)), listadoPacientes);
    pintarFiltro(filtro, resetFiltro);
};

// Filtros 
function filtrarPorEdad(pListadoPacientes, pEdadMax, pEdadMin) {
    return pListadoPacientes.filter(paciente => paciente.edad >= pEdadMin && paciente.edad <= pEdadMax);
};
function filtrarPorTexto(pListadoPacientes, pTextoFiltro) {
    return pListadoPacientes.filter(paciente => ((paciente.nombre).toLowerCase().includes(pTextoFiltro.toLowerCase()) | (paciente.apellidos).toLowerCase().includes(pTextoFiltro.toLowerCase()) | (paciente.numSeguridadSocial).toLowerCase().includes(pTextoFiltro.toLowerCase())));
};
function filtrarPorEnfermedad(pListadoPacientes, pEnfermedad) {
    return pListadoPacientes.filter(paciente => paciente.enfermedad === pEnfermedad);
};

// Reset filtro
function pintarFiltro(pFiltro, pDom) {
    pDom.innerHTML = "";
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    p1.innerHTML = `<p class="mt-2 me-3"> Pacientes <span class="fw-bolder"> ${pFiltro} </span> </p>`;
    p2.innerHTML = `<input id="resetFiltroButton" class="btn btn-outline-info" type="submit" value="Mostrar Todos">`;
    pDom.appendChild(p1);
    pDom.appendChild(p2);
    let resetFiltroButton = document.querySelector('#resetFiltroButton');
    resetFiltroButton.addEventListener('click', addResetFiltro);
};
function addResetFiltro() {
    resetFiltro.innerHTML = '';
    pintarPacientes(pacientes, listadoPacientes);
};