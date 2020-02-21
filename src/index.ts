// tslint:disable-next-line: no-var-requires
const express= require("express");
// tslint:disable-next-line: no-var-requires
const bodyParser = require('body-parser');
import { transaction, createTransaction } from "./routes/transaction"
const app = express();
const port = 8080; // default port to listen
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));
app.use(bodyParser.json({limit: '50mb'}));
// define a route handler for the default home page
app.get("/", (req: any, res: any) => {
    res.send("Hello world!");
});

app.get("/transaction", (req: any ,res: any) => {
    const getTransactionData = transaction();
    res.send(getTransactionData);
});
app.post("/transaction", async (req: any, res: any) => {
    try {
        const getTransactionData = await createTransaction(req.body);
        return res.status(200).send(getTransactionData);
    } catch (err) {
        return res.status(400).send({
            success: false,
            err: err.toString()
        })
    }

});
// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});