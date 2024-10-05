import { test, describe } from "node:test"; // Import dari node:test
import assert from "node:assert"; // Import dari node:assert
import sum from "./index.js";

describe("Testing function sum", () => {
  test("should return the sum of two positive numbers", () => {
    assert.strictEqual(sum(5, 10), 15);
  });

  test("should return 0 if one number is negative", () => {
    assert.strictEqual(sum(-5, 10), 0);
    assert.strictEqual(sum(5, -10), 0);
  });

  test("should return 0 if both numbers are negative", () => {
    assert.strictEqual(sum(-5, -10), 0);
  });

  test("should return 0 if inputs are non-numbers", () => {
    assert.strictEqual(sum("5", 10), 0);
    assert.strictEqual(sum(5, "10"), 0);
    assert.strictEqual(sum(null, 10), 0);
    assert.strictEqual(sum(5, undefined), 0);
    assert.strictEqual(sum(undefined, undefined), 0);
  });

  test("should return correct results when adding zeros", () => {
    assert.strictEqual(sum(0, 0), 0);
    assert.strictEqual(sum(0, 10), 10);
    assert.strictEqual(sum(5, 0), 5);
  });
});
