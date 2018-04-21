# Angular 5 + Loopback 3
###ng-loopback-starter
Starting code base to build MEAN web applications using Angular 5 and Loopback 3

##### NOTE: 
* By default, Loopback has route authorization enabled, which we may not want to handle when initially starting development. However, this should be re-enabled if your web application is going to be used in production!

    Within `server/boot/authentication.js` the following code is commented out:
    
      server.enableAuth();
        
* The client ng assets are served via `server/middleware.json`:

      "files": {
        "loopback#static": {
          "params": "$!../client"
        }
      },
      
* If you make changes to your Loopback models, update the sdk by running:
 
      npm run build:sdk

* Styling is provided by the Angular Material, for more information please read their documentation via<a href="https://material.angular.io/">https://material.angular.io/</a>

* Run npm install in root of the project as well as in the client directory

### npm run scripts:

* **start:app** | uses concurrently to start client and server simultaneously
* **start:server** | starts server
* **start:client** | servers ng client
* **build:app** | builds ng client
* **build:sdk** | builds auto-generating sdk for LoopBack
