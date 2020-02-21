"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const transaction = () => {
    const transactionData = models_1.Transaction.findByQuery();
    return transactionData;
};
exports.transaction = transaction;
//# sourceMappingURL=transaction.js.map