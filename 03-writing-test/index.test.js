import { describe, it } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

describe("Sum Function Testing", () => {
  it("should return 3 when 1 + 2", () => {
    assert.strictEqual(sum(1, 2), 3);
  });

  it("should return 5 when 2 + 3", () => {
    assert.strictEqual(sum(2, 3), 5);
  });

  it("should return -1 when -1 + 0", () => {
    assert.strictEqual(sum(-1, 0), -1);
  });

  it("should return 0 when 0 + 0", () => {
    assert.strictEqual(sum(0, 0), 0);
  });

  it("should return 1 when 1 + 0", () => {
    assert.strictEqual(sum(1, 0), 1);
  });

  it("should return '123' when '12' +'3'", () => {
    assert.strictEqual(sum("12", "3"), "123");
  });
});
