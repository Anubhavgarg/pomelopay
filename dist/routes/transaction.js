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
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const transaction = () => {
    const transactionData = models_1.Transaction.findByQuery();
    return transactionData;
};
exports.transaction = transaction;
const createTransaction = (body) => __awaiter(void 0, void 0, void 0, function* () {
    // tslint:disable-next-line:no-console
    console.log(body);
    const transactionData = yield models_1.Transaction.Insert(body);
    return transactionData;
});
exports.createTransaction = createTransaction;
//# sourceMappingURL=transaction.js.map