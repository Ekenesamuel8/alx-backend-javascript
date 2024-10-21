const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./4-payment");
const { expect } = require("chai");

describe("sendPaymentRequestToApi", () => {
	it("should stub Utilis.calculateNumber to always return 10", () => {
		const stub = sinon.stub(Utils, "calculateNumber").returns(10);

		const consoleSpy = sinon.spy(console, "log");

		sendPaymentRequestToApi(100, 20);

		expect(stub.calledOnceWithExactly("SUM", 100, 20)).to.be.true;

		stub.restore();
		consoleSpy.restore();
	});
});