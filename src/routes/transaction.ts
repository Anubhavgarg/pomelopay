import { Transaction } from "../models";


const transaction = () => {
    const transactionData = Transaction.findByQuery();
    return transactionData
}
const createTransaction =async(body: any) => {
        const transactionData = await Transaction.Insert(body);
        return transactionData
}

export { transaction ,createTransaction};
