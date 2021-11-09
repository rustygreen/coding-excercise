interface Car {
  make: string;
  model: string;
  color: string;
}

/*
* Repeating the word 'car' in the properties is a bit redundant -- we know this is a car from the interface name.
* It might be useful to use enums for the make and color if we have a list of expected values for these attributes.
*/