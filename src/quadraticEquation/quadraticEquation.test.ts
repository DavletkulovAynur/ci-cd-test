import { QuadraticEquation } from "./";

describe("quadratic equation", () => {
  describe("success cases", () => {
    it("discriminant less than zero", () => {
      expect(QuadraticEquation.solve(1, 0, 1)).toEqual([]);
    });
    it("discriminant more than zero", () => {
      expect(QuadraticEquation.solve(2, 0, -2)).toEqual([1, -1]);
    });
    it("discriminant more than zero", () => {
      expect(QuadraticEquation.solve(2, 0, -2)).toEqual([1, -1]);
    });
  });
});
