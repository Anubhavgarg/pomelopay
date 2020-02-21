"use strict";

import { mongoose, Schema, dummyTransactionData } from "../config"

const transactionSchema = new Schema({
    presentBalance: { type: Number },
    merchantFee: { type: Number },
    deductBalance: { type: Number, required: true },
    previousBalance: { type: Number },
    lastAmountDeducted: { type: Number },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

transactionSchema.statics.findByQuery = () => dummyTransactionData;
transactionSchema.statics.Insert = async (data: any) => {
    const transactionData = new Transaction(data);
    const document = await transactionData.save();
    return document;
}

const Transaction = mongoose.model("Transaction", transactionSchema, "Transaction");

export { Transaction }