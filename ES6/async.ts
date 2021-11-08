/**
 * GOAL: refactor the class below to avoid the confusing chaining of promises.
 */

class AppLoader {
    public loadApp(): Promise {
      return this.getMetadata()
        .then(function () {
          return this.getAppConfig()
            .then(function () {
              return this.getAppDomains();
            });
        });
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
  