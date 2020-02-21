"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line: no-var-requires
require("../index");
// tslint:disable-next-line: no-var-requires
const assert = require("assert");
// tslint:disable-next-line: no-var-requires
const chai = require('chai');
// tslint:disable-next-line: no-var-requires
const chaiHttp = require('chai-http');
const config_1 = require("../config/config");
chai.use(chaiHttp);
const expect = chai.expect;
const server = "http://localhost:8080";
describe('Api to check the transaction data', () => {
    it('Transaction data should be equal', (done) => {
        chai.request(server)
            .get('/transaction')
            .send()
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .end((err, res) => {
            assert.deepEqual(res.body, config_1.dummyTransactionData);
            done();
        });
    });
});
//# sourceMappingURL=getTransaction.js.map