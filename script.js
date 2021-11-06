// Namespace

const petTotoroApp = {};

// API CALL

petTotoroApp.getPets = () => {
fetch('https://ghibliapi.herokuapp.com/species')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    
        petTotoroApp.displayPets(data);
    })
    }


petTotoroApp.getPets();

// Display Function

petTotoroApp.displayPets = (arrayData) => {
    const selectEl = document.querySelector('select');
    arrayData.forEach(() => {
        console.log(selectEl);
        const formValue = document.createElement('option');
        selectEl.appendChild(formValue);
    })
    
}


petTotoroApp.displayPets();

// Init Function

// petTorotoApp.init = () => {

//     petTotoroApp.getPets();
    
// }

// petTorotoApp.init();



    

    