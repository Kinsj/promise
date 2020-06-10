import * as chai from "chai";
import Promise from '../src/promise';

const assert = chai.assert;

describe("Promise", () => {
  it("是一个类", () => {
    assert(typeof Promise === 'function');
    assert(typeof Promise.prototype === "object");
  });
  // it("拥有对象方法 then", () => {
  //
  // })
});