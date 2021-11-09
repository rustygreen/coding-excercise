/**
 * GOAL: refactor the class below to avoid the confusing chaining of promises.
 */

 class AppLoader {
  public async loadApp(): Promise {
    await this.getMetadata();
    await this.getAppConfig();
    return this.getAppDomains();
  }

  private getMetadata(): Promise{
    // <NO CODE NEEDED>
  }

  private getAppConfig(): Promise{
    // <NO CODE NEEDED>
  }

  private getAppDomains(): Promise{
    // <NO CODE NEEDED>
  }
}

/**
* Async/await is a lot clearer than those confusing chained promises in this situation.
*/