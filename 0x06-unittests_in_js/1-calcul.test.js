const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", () => {
	describe("SUM operation", () => {
		it("should return 4 when adding 1 and 3", () => {
			assert.strictEqual(calculateNumber("SUM", 1, 3), 4);
		});

		it("should return 5 when input are 1 and 3.7", () => {
			assert.strictEqual(calculateNumber("SUM", 1, 3.7), 5);
		});
	});
	describe("SUBSTRACT operation", () => {
		it("should return -4 when input are 1.4 and 4.5", () => {
			assert.strictEqual(calculateNumber("SUBTRACT", 1.4, 4.5), -4);
		});
		it("should return 0 when input are 3.5 and 3.5 for SUSBTRACT", () => {
			assert.strictEqual(calculateNumber("SUBTRACT", 3.5, 3.5), 0);
		});
	});

	describe("DIVIDE operation", () => {
		it("should return 2 when input are 10 and 5 for DIVIDE", () => {
			assert.strictEqual(calculateNumber("DIVIDE", 10, 5), 2);
		});

		it("should return 0 when input are 10 and 0 for DIVIDE", () => {
			assert.strictEqual(calculateNumber("DIVIDE", 10, 0), "Error");
		});

		it("should return 2 when input are 4.5 and 2 for DIVIDE", () => {
			assert.strictEqual(calculateNumber("DIVIDE", 4.5, 2), 2.5);
		});
	});
});