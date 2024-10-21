const { expect } = require("chai");
const request = require("request");
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
		// Give the server a moment to start
		setTimeout(done, 1000);
	});

	after((done) => {
		server.kill(); // Ensure the server is closed after tests
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