import express from   "express";
import { transaction} from "./routes/transaction"
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.get( "/transaction", ( req, res ) => {
    const getTransactionData = transaction();
    res.send( getTransactionData );
} );
// start the Express server
app.listen( port, () => {
     // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );