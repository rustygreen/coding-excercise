/**
 * GOAL: the following class is a meant to be a generic DataStore class
 * that provides re-usable CRUD operations for an entity. Refactor the class
 * so that it makes use of generics to make it an actual re-usable class.
 */

/**
 * A generic data store class that provides general CRUD operations.
 */
export abstract class DataStore {
  queryAll(): Observable<any[]> {
    // <NO CODE NEEDED>
  }

  getById(id: any): Observable<any> {
    // <NO CODE NEEDED>
  }

  save(item: any): Observable<string> {
    // <NO CODE NEEDED>
  }
}
