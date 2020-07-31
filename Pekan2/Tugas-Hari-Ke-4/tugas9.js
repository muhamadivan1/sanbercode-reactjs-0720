//Nomor 1
console.log("_____Nomor 1_____")
const newFunction = function literal(firstName, lastName) {
    return {
        firstName,
        lastName,
        fullName: function() {
            console.log(firstName + " " + lastName)
            return
        }
    }
}

//Driver Code 
newFunction("William", "Imoh").fullName()



//Nomor 2
console.log("_____Nomor 2_____")
const newObject = {
        firstName: "Harry",
        lastName: "Potter Holt",
        destination: "Hogwarts React Conf",
        occupation: "Deve-wizard Avocado",
        spell: "Vimulus Renderus!!!"
    }
    // Driver code
const { firstName, lastName, destination, occupation } = newObject;
console.log(firstName, lastName, destination, occupation)



//Nomor 3
console.log("_____Nomor 3_____")
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
    // const combined = west.concat(east)
    //Driver Code
const combined = [...west, ...east];
console.log(combined);