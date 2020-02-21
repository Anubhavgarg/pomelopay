"use strict";

import {mongoose, Schema, dummyTransactionData} from "../config"

const transactionSchema = new Schema({
    presentBalance: {type: Number},
	merchantFee:{type: Number},
    previousBalance : {type: Number},
    lastAmountDeducted: {type: Number},
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

transactionSchema.statics.findByQuery = () => dummyTransactionData;
const Transaction = mongoose.model("Transaction", transactionSchema, "Transaction");

export {Transaction}