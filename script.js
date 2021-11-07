// Namespace

const petTotoroApp = {};

// API CALL

petTotoroApp.getPets = () => {
fetch('https://ghibliapi.herokuapp.com/species')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        petTotoroApp.displayPets(data);
        console.log(data);

    })
    }


petTotoroApp.getPets();

// Display Function

petTotoroApp.displayPets = (arrayData) => {
    const selectSpecies = document.getElementById('characterType');

    arrayData.forEach((item) => {
        const classification = item.name;

        const formValue = document.createElement('option');

        selectSpecies.appendChild(formValue);
        formValue.textContent = classification;

        
        // Save user chooses the type of character into a variable 



        // feed user's choice of character type into if statement 

        if (item.name == 'Human') {

            console.log(item)

            //Trying to get 'people' (ie character names)

            peopleArray = item.people;


            // randomly pick one of the characters (ie. api endpoint leading to a character description) 

            let randomValue = peopleArray[Math.floor(Math.random() * peopleArray.length)];

            // save endpoint to a variable and use that in API call for character details


            console.log('random character', randomValue)

            let url = randomValue;


            // to generate character for the user to guess from 


            fetch(`${url}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
        
            })


            
            





           
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



    

    