const { expect } = require("chai");
describe("sum", () => {
    const sumFn = require("../functions/sum");
    it("should add number", () => {
        expect(sumFn(1, 2)).to.equal(3);
    });
    it("should return a message if param is string", () => {
        expect(sumFn("foo", 2)).to.equal("Param should be a number");
    });
});
