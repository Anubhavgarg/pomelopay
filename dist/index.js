"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const transaction_1 = require("./routes/transaction");
const app = express_1.default();
const port = 8080; // default port to listen
app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
app.use(body_parser_1.default.json({ limit: '50mb' }));
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.get("/transaction", (req, res) => {
    const getTransactionData = transaction_1.transaction();
    res.send(getTransactionData);
});
app.post("/transaction", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getTransactionData = yield transaction_1.createTransaction(req.body);
        // tslint:disable-next-line:no-console
        res.send(getTransactionData);
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