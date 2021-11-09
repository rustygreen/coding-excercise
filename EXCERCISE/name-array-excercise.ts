/**
 * GOAL: convert the list of string names to a list of people objects.
 * 
 * DESIRED OUTPUT:
 *  [{firstName: 'Sam', lastName: 'Green'}, ...]
 * 
 * NOTE: use interface if applicable.
 */

interface IPerson {
    firstName: string;
    lastName: string;
}

class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(name: string) {
        let splitName = name.split(' ');
        this.firstName = splitName[0];
        this.lastName = splitName.length > 1 
                            ? splitName.pop()
                            : "";
    }
}

const names = ['Sam Green', 'John Doe', 'Jerry Seinfeld'];
let people: Person[] = names.map(name => new Person(name));

/**
 * There are a couple of corner cases here depending on the type of input we get in the names array.
 * 1) More than one first name and/or more than one last name: There's no way to tell where to split between first and last names, so for the sake of simplicity,
 * we're just taking the first and last words in the string.
 * 2) One name (e.g. 'Sam') will be treated as {firstName: Sam, lastName: ''}.
 * 3) Empty strings will return empty firstName and lastName.
 */