// Altere a cor de fundo do header para rgb(0, 176, 105);
// Altere a cor de fundo da div das tarefas que são Urgentes e Importantes para rgb(255, 159, 132);
// Altere a cor de fundo do título das das tarefas que são Urgentes e Importantes e não importantes para rgb(165, 0, 243);
// Altere a cor de fundo da div das tarefas que não são Urgentes e Importantes e não importantes para rgb(249, 219, 94);
// Altere a cor de fundo do título das das tarefas que não são Urgentes e Importantes e não importantes para rgb(35, 37, 37);
// Altere a cor de fundo do footer para rgb(0, 53, 51).

const header = document.querySelector('#header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

const importantEmergency = document.querySelector('.emergency-tasks');
importantEmergency.style.backgroundColor = 'rgb(255, 159, 132)';

const emergencyTasksTitle  = document.querySelectorAll('.emergency-tasks h3');
for(let i = 0; i<emergencyTasksTitle.length; i++){
    emergencyTasksTitle[i].style.backgroundColor = 'rgb(165, 0, 243)';
}

const notUrgentTask = document.querySelector('.no-emergency-tasks');
notUrgentTask.style.backgroundColor = 'rgb(249, 219, 94)';

const notUrgentTaskTitle = document.querySelectorAll('.no-emergency-tasks h3');
for(let i = 0; i<notUrgentTaskTitle.length; i++){
    notUrgentTaskTitle[i].style.backgroundColor = 'rgb(35, 37, 37)';
}

const footer = document.querySelector('#footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';