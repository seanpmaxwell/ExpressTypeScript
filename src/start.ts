/**
 * Start the Express Web-Server
 *
 * created by Sean Maxwell Apr 14, 2019
 */

import ExampleServer from './ExampleServer';


const exampleServer = new ExampleServer();
exampleServer.start(3000);
