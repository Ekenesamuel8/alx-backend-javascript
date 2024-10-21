const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");
const { expect } = require("chai");

describe("sendPaymentRequestToApi", () => {
	it("should call Utils.calculateNumber with SUM, 100 and 20", () => {
		// Creating a spy on the Utils.calculateNumber function
		const spy = sinon.spy(Utils, "calculateNumber");
		sendPaymentRequestToApi(100, 20);
		// Verify the spy was called with correct argument
		expect(spy.calledOnceWithExactly("SUM", 100, 20)).to.be.true;

		spy.restore();
	});
});