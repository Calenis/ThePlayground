/* console.log("Hello World!")
    var message = "Hello My Computer"
    alert(message) */

/* 
    const priceToGram = (price, gram) => price / gram

    const chicken_strips = {
        price: 10,
        weightGrams: 1200
    }
    
    console.log(priceToGram(chicken_strips.price,chicken_strips.weightGrams)) */

// Lesson 7 - untested

/* var currentYear = 2023

function countPersonBirthYear(personAge) {
    return resolvedYear = currentYear - personAge
}

console.log(countPersonBirthYear(19)) */

/* lesson 10 - operators

export default function() {


    var result = 7 + 1
    var result2 = 7 / 1
    var result3 = 7 % 2 // modular operator, the remainder after dividing by the number, in this case 1 (2*3=6, 1 remains)
    var result4 = 7 - 1
    var result5 = 7 / 0
    var result6 = 7 * 0
  
    var b = 9
    var result7 = ++b
    var a = 7
    var result8 = --a
    var result9 = "Filip" + "Jerga"
    var result10 = "1" + 2
    var result11 = 2 + "1"
    var result12 = 3 + 3 + "1"
    var result13 = 7 - "2" //only + concatinates, so this will do the math
    var result14 = "8" / "4" //only + concatinates, so this will do the math
    var result15 = 2 ** 3 // 2 to the power of 3
  
    debugger
    result13 -= 2
    result15 += 7
  }
   */

/*   lesson 11 - callstack

  const thisVariable // can be assigned once, but not changed later
  var thisVariable2 // can be reassigned at will
  let thisVariable3 // is like var, but need more info */

  /*    const dog = {
        name: 'billy',
        age: 9,
        breed: 'Shiba Inu',
        printDogInfo() {
            console.log(`The dog's name is ${this.name} which is a ${this.breed} and is ${this.age} years old.`)
        },

    }

    var key = 'printDogInfo'

    dog.name = "omg"
    dog[key]()
    dog['name'] = "thor"
    dog[key]()

    console.log(typeof dog)
     */
/* 
    dog.age = 10.99
    dog[key]()
    dog['age'] = 7 % 2
    dog[key]()

payment = 1500 % 350
    console.log("if you pay 350 in payments, your last payment will be: " + payment) */


/* //lesson 13 - learn about classes (and constructor)

  class Person {
    firstName = ''
    lastName = ''
    age = 0

    helpers = {
      helperVar: "testin variable",
      helperFunc: function() {
        console.log(this.helperVar)
      }
    }


    constructor(firstName, lastName, age) {
      debugger
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
    }

    printUserInfo() {
      console.log(`Hello ${this.firstName} ${this.lastName} of age: ${this.age}`)
    }

    // printUserInfo = function() {

    // }

    // printUserInfo = () => {}
  } */