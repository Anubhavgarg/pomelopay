import { Transaction } from "../models";


const transaction = () => {
    const transactionData = Transaction.findByQuery();
    return transactionData
}

export { transaction };
