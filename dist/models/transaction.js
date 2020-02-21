"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const transactionSchema = new config_1.Schema({
    presentBalance: { type: Number },
    merchantFee: { type: Number },
    previousBalance: { type: Number },
    lastAmountDeducted: { type: Number },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});
transactionSchema.statics.findByQuery = () => config_1.dummyTransactionData;
const Transaction = config_1.mongoose.model("Transaction", transactionSchema, "Transaction");
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.js.map