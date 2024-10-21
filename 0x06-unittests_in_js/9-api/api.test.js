const request = require("request");
const { expect } = require("chai");
const { exec } = require("child_process");

describe("Index page", () => {
	const baseUrl = "http://localhost:7865";
	let server;

	before((done) => {
		server = exec("node api.js", (error) => {
			if (error) {
				console.error(`Error starting server: ${error}`);
			}
		});
		setTimeout(done, 1000);
	});

	after((done) => {
		server.kill();
		done();
	});

	it("should return the correct status code", (done) => {
		request.get(baseUrl, (error, response) => {
			expect(response.statusCode).to.equal(200);
			done();
		});
	});

	it("should return the correct result", (done) => {
		request.get(baseUrl, (error, response, body) => {
			expect(body).to.equal("Welcome to the payment system");
			done();
		});
	});
});

// New test suite for the cart page
describe("Cart page", () => {
	const baseUrl = "http://localhost:7865/cart";

	it("should return the correct status code when :id is a number", (done) => {
		request.get(`${baseUrl}/12`, (error, response) => {
			expect(response.statusCode).to.equal(200);
			expect(response.body).to.equal("Payment methods for cart 12");
			done();
		});
	});

	it("should return 404 status code when :id is NOT a number", (done) => {
		request.get(`${baseUrl}/hello`, (error, response) => {
			expect(response.statusCode).to.equal(404);
			done();
		});
	});
});