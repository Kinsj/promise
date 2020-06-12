import * as chai from "chai";
import Promise from '../src/promise';

const assert = chai.assert;

describe("Promise", () => {
  it("是一个类", () => {
    assert.isFunction(Promise)
    assert.isObject(Promise.prototype)
  });
  it("new Promise 必须且只接受函数作为参数", () => {
    // 预测函数报错
    assert.throw(() => { // assert.throw 接受函数，如果函数报错，则测试通过
      // @ts-ignore
      new Promise()
    })
  })
  it("new Promise(fn) 会生成一个对象，对象有 then 方法", () => {
    const promise = new Promise(() => { });
    assert.isFunction(promise.then)
  })
  it("new Promise(fn) 中的 fn 立即执行", () => {
    let called = false
    const promise = new Promise(() => {
      called = true
    })
    // @ts-ignore
    assert(called === true)
  })
  it("new Promise(fn) 中的 fn 执行的时候必须接受 resolve 和 reject 两个函数", () => {
    let called = false
    const promise = new Promise((resolve, reject) => {
      called = true
      assert.isFunction(resolve)
      assert.isFunction(reject)
    })
  })
  it("promise.then(success) 中的 success 会在resolve被执行的时候调用", (done) => {
    let called = false
    const promise = new Promise((resolve, reject) => {
      assert(called === false) // 此处该函数未调用
      resolve()
      setTimeout( () => {
        assert(called === true) // 此处该函数调用了
        done();
      })
    })
    // @ts-ignore
    promise.then(() => {
      called = true;
    })
  })
});