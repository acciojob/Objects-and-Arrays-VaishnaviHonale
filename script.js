const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};
   
        // Create a reference to the players array
        let team = players;

        // Create a copy of the players array
        let team1 = [...players];

        // Create a copy of the person object
        let cap1 = { ...person };

        // Testing the variables
        console.log("Team:", team);
        console.log("Team1:", team1);
        console.log("Cap1:", cap1);


// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
