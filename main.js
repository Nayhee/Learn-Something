// trying to make a list/object of facts I've learned. 
// need it to be easy to add facts. 

const factArray = ["If a function returns a value, you need to store it in a variable.", "Synchronous means they happen at the same time, Asynchronous means they happen one after another.", "Ways to access items in an array: For Loop, ForEach method, Map method, Filter method, and Find method."];

const generateFact = () => {
    const replica = [...factArray];
    const randomNumber = Math.floor(Math.random() * replica.length + 1);
    document.getElementById("Fact").innerHTML = `${replica[randomNumber]}`; 
}

const addFact = () => {
    const factInputByUser = document.getElementById("addFactInput").value;
    factArray.push(factInputByUser);
    console.log(factArray);
    document.getElementById("addFactInput").value = '';
    // then need it to reset to blank. 
    //also want it to get darker when clicking it. 

}

// still need to figure out how to edit the FactArray permanently. 