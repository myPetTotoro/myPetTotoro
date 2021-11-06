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
        console.log(data);

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

        //Trying to get 'people' (ie character names)

        // item.forEach(i => {
        //     console.log(i.name)
        // })

        peopleArray = item.people

        // console.log(peopleArray);

        // peopleArray.forEach(i => {

        // })
      
    //     fetch('https://ghibliapi.herokuapp.com/people')
    //         .then((response) => {
    //             return response.json();
    //         }).then((data) => {
    //                 console.log(data);
    // })
        

        console.log(item.name);
        if (item.name == 'Totoro') {

            // console.log(item.people)

            //randomly pick one and save it to a variable and use that in API call to generate a character for the user to guess from 

            let randomValue = item.people[Math.floor(Math.random() * item.people.length)];
            // console.log('random totoro', randomValue)




           
        }
    
        // console.log(furColour);

    })

    
}


petTotoroApp.displayPets();

// Init Function

// petTorotoApp.init = () => {

//     petTotoroApp.getPets();
    
// }

// petTorotoApp.init();



    

    