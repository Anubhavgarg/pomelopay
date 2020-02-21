export {};
// tslint:disable-next-line: no-var-requires
require("../index")
// tslint:disable-next-line: no-var-requires
const assert = require("assert");
// tslint:disable-next-line: no-var-requires
const chai = require('chai');
// tslint:disable-next-line: no-var-requires
const chaiHttp = require('chai-http');
import {dummyTransactionData} from "../config/config"
chai.use(chaiHttp);
const expect = chai.expect;
const server = "http://localhost:8080"

describe('Api to check the transaction data', () => {
    it('Transaction data should be equal', (done) => {
        chai.request(server)
            .get('/transaction')
            .send()
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .end((err: any, res: any)=> {
                assert.deepEqual(res.body, dummyTransactionData)
                done();
            });
    });
});