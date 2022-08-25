console.log("Welcome to javascript")


// get computer choice function

function getComputerChoice() {

// program to get a ramdom item from an array 
    function getRamdomItem(arr) {
      
        const randomIndex= Math.floor(Math.random() * arr.length)
        
        // get random item
        const item = arr[randomIndex];
        return item;
    }

    const choice = ['rock', 'paper', 'scissors'];

    const computerChoice = getRamdomItem(choice);

    console.log(computerChoice);
       
}

getComputerChoice()

