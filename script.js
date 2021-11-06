const petTotoroApp = {};

petTotoroApp.getPets = () => {
fetch('https://ghibliapi.herokuapp.com/species')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    displayPets();
}

petTotoroApp.displayPets = (arrayData) => {
    const selectEl = document.querySelector('select');
    arrayData.forEach(() => {
        console.log(selectEl);
        const formValue = document.createElement('option');
    })
    

    
}





petTotoroApp();

    petTorotoApp.init = () => {

    petTotoroApp.getPets();
    }

    petTorotoApp.init();