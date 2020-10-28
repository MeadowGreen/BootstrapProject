//Elf page

//created variables for each p tag in the information cards
const lang1 = document.getElementById(`lang1`);
const trait1 = document.getElementById(`trait1`);
const align1 = document.getElementById(`align1`);

//Create request to server
let xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if(xhr.readyState === 4)
    if( xhr.status = 200){
//Body of the callback where data is parsed and we use DOM manipulation
        const data = JSON.parse(xhr.response);
        console.log(data);
//Information for the language card
        lang1.innerHTML = data.language_desc;
//Information for the traits card. Used concatination to put the different pieces together
        trait1.innerHTML = data.age + " " + data.size_description;
        trait1.innerHTML += " Your traits are " + data.traits[0].name + ", " + data.traits[1].name + ", and " + data.traits[2].name;
//Information for the alignment card
        align1.innerHTML = data.alignment;
//else if where we throw an error if we don't have success connecting
    }else if (xhr.status === 404){
        alert(`Oh no the page wasn't found`);
    } else if(xhr.status === 500){
        alert(`Awhh man the server is taking a break`);
    }
};

//open server request
xhr.open(`GET`, 'https://www.dnd5eapi.co/api/races/elf');
//send server request
xhr.send();




//Halfling page

//created variables for each p tag in the information cards
const lang2 = document.getElementById(`lang2`);
const trait2 = document.getElementById(`trait2`);
const align2 = document.getElementById(`align2`);

//Create request to server
let xhr2 = new XMLHttpRequest();

xhr2.onreadystatechange = () => {
    if(xhr2.readyState === 4)
    if( xhr2.status = 200){
//Body of the callback where data is parsed and we use DOM manipulation
        const data = JSON.parse(xhr2.response);
        console.log(data);
//Information for the language card
        lang2.innerHTML = data.language_desc;
//Information for the traits card. Used concatination to put the different pieces together
        trait2.innerHTML = data.age + " " + data.size_description;
        trait2.innerHTML += " Your traits are " + data.traits[0].name + ", " + data.traits[1].name + ", and " + data.traits[2].name;
//Information for the alignment card
        align2.innerHTML = data.alignment;
//else if where we throw an error if we don't have success connecting
    }else if (xhr2.status === 404){
        alert(`Oh no the page wasn't found`);
    } else if(xhr2.status === 500){
        alert(`Awhh man the server is taking a break`);
    }
};

//open server request
xhr2.open(`GET`, 'https://www.dnd5eapi.co/api/races/halfling');
//send server request
xhr2.send();



//Ariahnnah's page 
//created variables for each p tag in the information cards
const lang3 = document.getElementById(`lang3`);
const trait3 = document.getElementById(`trait3`);
const align3 = document.getElementById(`align3`);

//Create request to server
let xhr3 = new XMLHttpRequest();

xhr3.onreadystatechange = () => {
    if(xhr3.readyState === 4)
    if( xhr3.status = 200){
//Body of the callback where data is parsed and we use DOM manipulation
        const data = JSON.parse(xhr3.response);
        console.log(data);
//Information for the language card
        lang3.innerHTML = data.language_desc;
//Information for the traits card. Used concatination to put the different pieces together
        trait3.innerHTML = data.age + " " + data.size_description;
        trait3.innerHTML += " Your traits are " + data.traits[0].name + ", " + data.traits[1].name + ", and " + data.traits[2].name;
//Information for the alignment card
        align3.innerHTML = data.alignment;
//else if where we throw an error if we don't have success connecting
    }else if (xhr3.status === 404){
        alert(`Oh no the page wasn't found`);
    } else if(xhr3.status === 500){
        alert(`Awhh man the server is taking a break`);
    }
};

//open server request
xhr3.open(`GET`, 'https://www.dnd5eapi.co/api/races/half-orc');
//send server request
xhr3.send();


