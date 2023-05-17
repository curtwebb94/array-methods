const contacts = require('./data.json');

// the following exercises require the data from data.json.
// you can look in that file to see the data structure you
// will be working with. 

// For each exercise:
// 1. use array methods with the variable contacts to get the desired result, 
// 2. store the result with a variable
// 3. appropriately log the results to the console



//You can put your solutions after each comment below:

//1. an array that contains all of the contacts that work at INSECTUS *************
const workInsectus = contacts.filter(contact => contact.company === "INSECTUS")
// console.log(workInsectus) 

//2. an array all of the contacts, with only the name property ***********
const theNames = contacts.map(contact => contact.name)
// console.log(theNames)

//3. an array of all of the contacts over the age of 50 **************
const overFifty = contacts.filter(contact => contact.age > 50)
// console.log(overFifty)

//4. the first ten contacts when alphabetically ordered by name **************

// Sort the contacts array by name in alphabetical order
contacts.sort((a, b) => a.name.localeCompare(b.name));

// Create a new array with the first ten contacts
const firstTenContacts = contacts.slice(0, 10);

// console.log(firstTenContacts);

//5. the oldest person's name *****************

// Find the oldest person
const oldestPerson = contacts.reduce((oldest, current) => {
    if (current.age > oldest.age) {
      return current;
    } else {
      return oldest;
    }
  });
  
  // Create an array with the oldest person's name
  const oldestPersonName = [oldestPerson.name];
  
//   console.log(oldestPersonName);

//6. the contact id with the name Isabella Burke ****************

// Find contacts with the name "Isabella Burke"
const matchingContacts = contacts.filter(contact => contact.name === 'Isabella Burke');

// Create an array with the contact IDs
const contactIDs = matchingContacts.map(contact => contact.id);

// console.log(contactIDs);


//7. an array of all of the contacts, but with the name split up into a firstName and lastName properties ****************

const transformedContacts = contacts.map(contact => {
    const [firstName, lastName] = contact.name.split(' ');
    return { id: contact.id, firstName, lastName };
  });
  
//   console.log(transformedContacts);


//8. an array of all of the contacts where the friends property is an array with each contact that is their friend *************

const FriendContacts = contacts.map(contact => {
    const friends = contact.friends.map(friendId => contacts.find(c => c.id === friendId));
    return { ...contact, friends };
  });
  
//   console.log(FriendContacts);


//9. the average age of the contacts *******************

// Calculate the sum of ages
const ageSum = contacts.reduce((sum, contact) => sum + contact.age, 0);

// Calculate the average age
const averageAge = ageSum / contacts.length;

// Create an array with the average age
const averageAgeArray = [averageAge];

// console.log(averageAgeArray);


//10. the median age of the contacts ******************

// Sort the contacts array based on age in ascending order
contacts.sort((a, b) => a.age - b.age);

// Calculate the median age
const middleIndex = Math.floor(contacts.length / 2);
const medianAge =
  contacts.length % 2 === 0
    ? (contacts[middleIndex - 1].age + contacts[middleIndex].age) / 2
    : contacts[middleIndex].age;

// Create an array with the median age
const medianAgeArray = [medianAge];

console.log(medianAgeArray);