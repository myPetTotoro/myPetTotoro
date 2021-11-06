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
    const selectSpecies = document.getElementById('speciesType');
    // ^ change to document to .getElementByID

    arrayData.forEach((item) => {
        const classification = item.classification;
        // console.log(item);
        // console.log(classification);

        const formValue = document.createElement('option');

        selectSpecies.appendChild(formValue);
        formValue.textContent = classification;
        // console.log(item);

        const furSelect = document.getElementById('furColour');
    
        const furColour = item.hair_colors;

        const words = furColour.split(' ')[0];

        // words.slice(0, -1);

        console.log(words);

        // console.log(furColour);
    
        // console.log(furColour);

    })

    
}


petTotoroApp.displayPets();

// Init Function

// petTorotoApp.init = () => {

//     petTotoroApp.getPets();
    
// }

// petTorotoApp.init();



    

    