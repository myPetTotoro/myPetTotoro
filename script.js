const guessGhibliApp = {};

// Get Characters and Display in Drop Down
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


// Get Random Computer Choice
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
            console.log(`this is the random character:`, randomChar);

        })

}


guessGhibliApp.init = () => {
    // Get Characters and Display in Drop Down
    guessGhibliApp.getCharacters();

    // Get User Choice through Event Listener
    const selectValue = document.getElementById('characterType');

    selectValue.addEventListener('change', (event) => {
        event.preventDefault();

        const userChoice = selectValue.value;
        console.log(`this is the user choice:`, userChoice);

        guessGhibliApp.randomChar(userChoice);

    })

}

guessGhibliApp.init();



    

    