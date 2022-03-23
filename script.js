alert(`Welcome to 'Twenty'! This is a competition to see which player gets closer to the number 20. You are going to be playing against the computer.\n\n You will draw numbers from 1 to 10. The computer will stop at 16.\n\n Pay attention to the screen to see what your total is.`);

alert(`The computer will stop at or after 16 if the sum of the new draw is greater. \n\n While the user will stop at or after 19 if the sum of the new draw is greater.`)
alert(`Now, let's start! It's the computer's turn.`);

user = 0
computer = 0

//computer score vvvvv
do {
    var random = Math.floor(Math.random() * 11);
    console.log(random);

    computer = computer + random;

    alert(`The new number is '${random}'.\n\n Making the compter's total '${computer}'`);

} while ( computer < 16)
alert(`The total is '${computer}' for the computer. \n\n Now its your turn!`)

//user score vvvvv
random = Math.floor(Math.random() * 11);
user = user + random;
do {
    var agree = prompt("The new number is '" + `${random}` + "'. \n\n Your new total is '" + `${user}` + "' \n\n Would you like another number? 'y' for yes, 'n' for no.")
    random = Math.floor(Math.random() * 11);
    console.log(random);

    if (agree == "y") {
        user = user + random;
    } else {
        alert(`The total is '${user}' for the user.`)
        break
    }

} while (( user < 19));
alert(`The final score is '${user}' for the user and '${computer}' for the computer. \n\n Thanks for playing!`)

