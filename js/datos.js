const pacientes = new Array(
    {
        nombre: 'Cristina',
        apellidos: 'Álvarez Sánchez',
        edad: 41,
        enfermedad: 'gripe',
        numSeguridadSocial: 'A123456'
    },
    {
        nombre: 'Francisco Miguel',
        apellidos: 'Santos Villarón',
        edad: 43,
        enfermedad: 'lumbalgia',
        numSeguridadSocial: 'S1776756'
    },
    {
        nombre: 'Laura',
        apellidos: 'Gómez Beltrán',
        edad: 25,
        enfermedad: 'pulmonía',
        numSeguridadSocial: 'A4456587867'
    },
    {
        nombre: 'Dolores',
        apellidos: 'Pérez Martín',
        edad: 85,
        enfermedad: 'gripe',
        numSeguridadSocial: 'C7765578'
    },
    {
        nombre: 'Fernándo',
        apellidos: 'Sánchez López',
        edad: 48,
        enfermedad: 'otitis',
        numSeguridadSocial: 'R775578'
    },
    {
        nombre: 'Lucía',
        apellidos: 'Córdoba Ruiz',
        edad: 15,
        enfermedad: 'sinusitis',
        numSeguridadSocial: 'A7674578'
    },
    {
        nombre: 'Esther',
        apellidos: 'Villarón González',
        edad: 49,
        enfermedad: 'pulmonía',
        numSeguridadSocial: 'A1765434567'
    },
    {
        nombre: 'María Isabel',
        apellidos: 'García Ruiz',
        edad: 55,
        enfermedad: 'sinusitis',
        numSeguridadSocial: 'A6567888'
    },
    {
        nombre: 'Matías',
        apellidos: 'Rodríguez Baz',
        edad: 60,
        enfermedad: 'lumbalgia',
        numSeguridadSocial: 'T17656456'
    },
    {
        nombre: 'Alicia',
        apellidos: 'Bello Escobar',
        edad: 33,
        enfermedad: 'resfriado común',
        numSeguridadSocial: 'G77655'
    },
    {
        nombre: 'Ricardo',
        apellidos: 'Marín Rodríguez',
        edad: 5,
        enfermedad: 'resfriado común',
        numSeguridadSocial: 'T665446'
    },
    {
        nombre: 'Lidia',
        apellidos: 'Segundo López',
        edad: 12,
        enfermedad: 'gripe',
        numSeguridadSocial: 'A886556'
    },
    {
        nombre: 'Rocío',
        apellidos: 'Luengo Villalba',
        edad: 23,
        enfermedad: 'lumbalgia',
        numSeguridadSocial: 'Y88765'
    },
    {
        nombre: 'Román',
        apellidos: 'Álvarez Baz',
        edad: 36,
        enfermedad: 'otitis',
        numSeguridadSocial: 'Y7765579'
    },
    {
        nombre: 'Marta',
        apellidos: 'Pérez Gómez',
        edad: 15,
        enfermedad: 'gripe',
        numSeguridadSocial: 'Y9874479'
    },

);

const todasEnfermedades = new Array();
function listadoEnfermedades(pLista) {
    for (paciente of pLista) {
        todasEnfermedades.push(paciente.enfermedad)
    }
};
listadoEnfermedades(pacientes);
const enfermedadesUnicas = todasEnfermedades.filter((enfermedad, index) => { return todasEnfermedades.indexOf(enfermedad) === index });