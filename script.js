// Namespace

const petTotoroApp = {};

// API CALL

petTotoroApp.getPets = () => {
fetch('https://ghibliapi.herokuapp.com/species')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(`first console log:`, data);
        petTotoroApp.displayPets(data);
    })
    }


petTotoroApp.getPets();

// Display Function

petTotoroApp.displayPets = (arrayData) => {
    const selectEl = document.querySelector('select');
    // ^ change to document to .getElementByID

    arrayData.forEach((item) => {
        const classification = item.classification;
        console.log(classification);

        const formValue = document.createElement('option');

        selectEl.appendChild(formValue);
        formValue.textContent = classification;


    })
    
}


petTotoroApp.displayPets();

// Init Function

// petTorotoApp.init = () => {

//     petTotoroApp.getPets();
    
// }

// petTorotoApp.init();



    

    