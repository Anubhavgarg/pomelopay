"use strict";

 // tslint:disable-next-line:no-var-requires
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const mongodbUri = "mongodb://localhost:27017/test-db";
const options = {
    useNewUrlParser: true
};
mongoose.connect(mongodbUri, options);
export { mongoose, Schema, ObjectId };