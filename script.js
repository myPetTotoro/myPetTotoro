// NAMESPACE OBJECT

const guessGhibliApp = {};

// API CALL TO GET CHARACTERS FOR DROPDOWN

guessGhibliApp.getCharacters = () => {
    fetch('https://ghibliapi.herokuapp.com/species')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            
            data.forEach((item) => {
                const selectEL = document.querySelector('select');

                const classification = item.name;
                const formValue = document.createElement('option');

                selectEL.appendChild(formValue);
                formValue.textContent = classification;
                formValue.value = classification;
                
            })

        })
}

// RANDOM CHARACTER API CALL

guessGhibliApp.randomChar = (userChoice) => {
    fetch('https://ghibliapi.herokuapp.com/species')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const computerChoice = data.filter((arrayItem) => {
                return arrayItem.name === userChoice;
            })
            console.log(`this is the computer choice:`, computerChoice);
            
            const guessWho = computerChoice[0].people;

            let randomChar = guessWho[Math.floor(Math.random() * guessWho.length)];
            
            guessGhibliApp.getCharacterDetails(randomChar);
            console.log(`this is the random character:`, randomChar);
        })

}

// RANDOM CHARACTER DETAILS API CALL

guessGhibliApp.getCharacterDetails = (charURL) => {
    fetch(`${charURL}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(`this is character details:`, data);

        guessGhibliApp.displayCharacterDetails(data);
        guessGhibliApp.displayCharacterName(data);
        guessGhibliApp.userInput(data);
        guessGhibliApp.formReset(data);
        }
    )}

// CHARACTER DETAILS DISPLAY FUNCTION

guessGhibliApp.displayCharacterDetails = (displayDetails) => {
    const resultsContainer = document.getElementById('flipCardFront');
    resultsContainer.innerText = '';

    const age = document.createElement('p');
    age.innerText = `Age: ${displayDetails.age} years old`;

    const gender = document.createElement('p');
    gender.innerText = `Gender: ${displayDetails.gender}`;

    const eyeColor = document.createElement('p');
    eyeColor.innerText = `Eye Colour: ${displayDetails.eye_color}`;

    const hairColor = document.createElement('p');
    hairColor.innerText = `Hair Colour: ${displayDetails.hair_color}`

    const hint = document.createElement('h3');
    hint.innerText = 'Hover for a clue';

    const allDetails = document.createElement('div');
    allDetails.classList.add('details');


    allDetails.appendChild(age);
    allDetails.appendChild(gender);
    allDetails.appendChild(eyeColor);
    allDetails.appendChild(hairColor);
    allDetails.appendChild(hint);

    resultsContainer.appendChild(allDetails);
}

// CHARACTER NAME DISPLAY FUNCTION

guessGhibliApp.displayCharacterName = (displayDetails) => {
    const resultsName = document.getElementById('flipCardBack');
    resultsName.innerText = '';

    // NAME JUMBLE FUNCTION

    const jumbledName = displayDetails.name;
    let shuffler = jumbledName.split('').sort(() => {
        return 0.5 - Math.random()
    }).join('');

    const charName = document.createElement('h2');
    charName.innerText = shuffler;


    const characterDetail = document.createElement('div');
    characterDetail.classList.add('detail');

    characterDetail.appendChild(charName);

    resultsName.appendChild(characterDetail);
}

// USER INPUT FUNCTION

guessGhibliApp.userInput = (data) => {
    const appForm = document.getElementById('button');
    appForm.addEventListener('click', (e) => {
        e.preventDefault();
        
        const generatedName = data.name;
        
        const userText = document.getElementById('characterName');
        const userInput = userText.value;

        // capitalize user response
        const capitalizedResponse = userInput.charAt(0).toUpperCase() + userInput.slice(1);

        // conditional operator
        capitalizedResponse === generatedName ? guessGhibliApp.correctAnswer(generatedName) : guessGhibliApp.incorrectAnswer(generatedName); 
        
        userText.value = '';

        
    })
}

// CORRECT ANSWER FUNCTION

guessGhibliApp.correctAnswer = (generatedName) => {
    
    const appForm = document.getElementById('answerContainer');

    const response = document.createElement('p');

    response.innerText = `Always believe in yourself. You are correct, the answer is ${generatedName}!`;

    appForm.appendChild(response);

} 

// INCORRECT ANSWER FUNCTION

guessGhibliApp.incorrectAnswer = (generatedName) => {
    
    const appForm = document.getElementById('answerContainer');

    const response = document.createElement('p');

    response.innerText = `Life is Suffering. Incorrect answer, the answer is ${generatedName}!`;

    appForm.appendChild(response);

}

// VALUE SELECT FUNCTION

guessGhibliApp.selectValue = () => {
    const selectValue = document.getElementById('characterType');

    selectValue.addEventListener('change', (e) => {

        const userChoice = selectValue.value;
        console.log(`this is the user choice:`, userChoice);

        guessGhibliApp.randomChar(userChoice);

    })
}

// PLAY AGAIN FORM RESET
guessGhibliApp.formReset = () => {

    const playAgain = document.getElementById('appForm');
    // playAgain.classList.toggle('visible');
    playAgain.addEventListener('click', () => {
        playAgain.reset();
    })
}

// INIT FUNCTION

guessGhibliApp.init = () => {
    
    guessGhibliApp.getCharacters();
    guessGhibliApp.selectValue();
    
}

// INIT CALL

guessGhibliApp.init();



    

    