"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-var-requires
const mongoose = require('mongoose');
exports.mongoose = mongoose;
const Schema = mongoose.Schema;
exports.Schema = Schema;
const ObjectId = mongoose.Types.ObjectId;
exports.ObjectId = ObjectId;
const mongodbUri = "mongodb://localhost:27017/test-db";
const options = {
    useNewUrlParser: true
};
mongoose.connect(mongodbUri, options);
//# sourceMappingURL=db_Connection.js.map