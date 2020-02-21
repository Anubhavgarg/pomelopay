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
const config_1 = require("../config");
const transactionSchema = new config_1.Schema({
    presentBalance: { type: Number },
    merchantFee: { type: Number },
    deductBalance: { type: Number, required: true },
    previousBalance: { type: Number },
    lastAmountDeducted: { type: Number },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});
transactionSchema.statics.findByQuery = () => config_1.dummyTransactionData;
transactionSchema.statics.Insert = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const transactionData = new Transaction(data);
    const document = yield transactionData.save();
    return document;
});
const Transaction = config_1.mongoose.model("Transaction", transactionSchema, "Transaction");
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.js.map