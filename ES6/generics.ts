/**
 * GOAL: the following class is a meant to be a generic DataStore class
 * that provides re-usable CRUD operations for an entity. Refactor the class
 * so that it makes use of generics to make it an actual re-usable class.
 */

/**
 * A generic data store class that provides general CRUD operations.
 */
 export abstract class DataStore<T> {
  queryAll(): Observable<T[]> {
    // <NO CODE NEEDED>
  }

  getById(id: any): Observable<T> {
    // <NO CODE NEEDED>
  }

  save(item: T): Observable<string> {
    // <NO CODE NEEDED>
  }
}

/**
 * Using generics allows for flexibility in the types of data we're handling with our CRUD operations, while still taking advantage of TypeScript's typing.
 */