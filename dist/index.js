"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line: no-var-requires
const express = require("express");
// tslint:disable-next-line: no-var-requires
const bodyParser = require('body-parser');
const transaction_1 = require("./routes/transaction");
const app = express();
const port = 8080; // default port to listen
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.get("/transaction", (req, res) => {
    const getTransactionData = transaction_1.transaction();
    res.send(getTransactionData);
});
app.post("/transaction", (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const getTransactionData = yield transaction_1.createTransaction(req.body);
        return res.status(200).send(getTransactionData);
    }
    catch (err) {
        return res.status(400).send({
            success: false,
            err: err.toString()
        });
    }
}));
// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map