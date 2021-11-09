function createMenu(
  title: string,
  body: string,
  buttonText: string,
  cancellable: boolean = true,
  buttonColor: string = null,
  cancelButtonColor: string = null
) {
  // <NO CODE NEEDED>
}

createMenu("Foo", "Bar", "Baz");

/*
* By adding default parameters, we cut down on the number of arguments that will always need to be passed into the function. Having null strings for the color parameters
* is a little confusing, but it's hard to know how best to handle this without seeing the actual function implementation.
* If menus are used often, another option would be to create a Menu class with these arguments as properties, and then pass a Menu object as the argument to createMenu().
*/