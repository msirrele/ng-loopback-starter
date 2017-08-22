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

* Styling is provided by the Bootstrap CDN, to support offline styling you will need to add Bootstrap’s source files to your project

### npm run scripts:

* **start:app** | uses concurrently to start client and server simultaneously
* **start:server** | starts server
* **start:client** | servers ng client
* **build:app** | builds ng client
* **build:sdk** | builds auto-generating sdk for LoopBack

# ng-loopback-starter
Starting code base to build MEAN web applications using ng and Loopback
