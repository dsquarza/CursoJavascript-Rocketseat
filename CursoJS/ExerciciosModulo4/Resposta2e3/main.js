var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');
var containerElement = document.querySelector('#app');
var ulElement = document.createElement('ul');

var link = 'https://api.github.com/users/';

function addUser(){
    var user = inputElement.value;
    var linkUser = link + user + '/repos';
    inputElement.value = '';
    loader();

    axios.get(linkUser)
        .then(function(response){
            removeLoader();
            showReps(response);
        })
        .catch(function(error){
            console.warn(error);
            alert("Usuário não existe. :(")
        });
    
}

function showReps(response){
    ulElement.innerHTML = '';
        var reps = response.data;
        console.log(reps);
        console.log(response.status);
        for (value of reps){  
            var liElement = document.createElement('li');              
            var repText = document.createTextNode(value.name);

            liElement.appendChild(repText);
            ulElement.appendChild(liElement);
            containerElement.appendChild(ulElement);
        }
}

function loader(){
    ulElement.innerHTML = '';
    var loadElement = document.createElement('div');
    loadElement.setAttribute('id', 'load');
    var loadText = document.createTextNode('Carregando...');

    loadElement.appendChild(loadText);
    containerElement.appendChild(loadElement);
}

function removeLoader(){
    var loadElement = document.querySelector('#load');
    containerElement.removeChild(loadElement);
}

btnElement.onclick = addUser;


   