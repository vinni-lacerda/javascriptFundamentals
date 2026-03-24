/* Crie uma função que obtenha o valor da chave de acordo com sua posição no array. Essa função deve possuir dois parâmetros: o objeto e a posição no array.

Crie uma função que retorne a soma do número total de estudantes em todos os cursos.

Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.

Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave. */

const school = {
  lessons: [
    {
      course: 'Python',
      students: 20,
      professor: 'Carlos Patrício',
      shift: 'Manhã',
    },
    {
      course: 'Kotlin',
      students: 10,
      professor: 'Gabriel Oliva',
      shift: 'Noite',
    },
    {
      course: 'JavaScript',
      students: 738,
      professor: 'Gustavo Caetano',
      shift: 'Tarde',
    },
    {
      course: 'MongoDB',
      students: 50,
      shift: 'Noite',
    },
  ]
};

const obtainObjValue = (obj, arrPosition) => {
    const objPosition = obj.lessons[arrPosition];
    return Object.values(objPosition)
};

console.log(obtainObjValue(school, 2));

const obtainTotalStudents = (obj) => {
    let sum = 0;
    for(let i = 0; i<obj.lessons.length; i++){
        // console.log(school.lessons[i].students);
        sum += obj.lessons[i].students;
    };
    return `Total de estudantes: ${sum}`;
};

console.log(obtainTotalStudents(school));


const verifyIfKeyExists = (obj, key) => {
    for(let i = 0; i<obj.lessons.length; i++){
        if(obj.lessons[i][key] === undefined){
            return false;
        }
        else{return true;
        }
    };
};

console.log(verifyIfKeyExists(school, 'shift'));

console.log(school.lessons[0].course);

const changeCourseShift = (obj, course, newKey) => {
    let findCourse = '';
    for(let i = 0; i<obj.lessons.length; i++){
        const element = obj.lessons[i];
        if(element.course === course){
            findCourse = element;
            break
        }
    };
    if(findCourse !== undefined){
        findCourse.shift = newKey;
        return findCourse;
    } else {
        return 'Course not found.'
    }
};

console.log(changeCourseShift(school, 'Python', 'Tarde'));
