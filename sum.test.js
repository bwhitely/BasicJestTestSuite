import { expect, test } from '@jest/globals';
import { capitalize, reverse, calculator, arrayAnalysis } from './sum'

test('test capitalize first char', () => {
    let str = "aSSDF";
    expect(capitalize(str)).toBe("ASSDF")
})

test('test calculator methods', () => {
    expect(calculator.add(3, 3)).toBe(6);
    expect(calculator.subtract(6, 3)).toBe(3)
    expect(calculator.multiply(9, 9)).toBe(81)
    expect(calculator.divide(9, 3)).toBe(3)
})

test('test array analysis', () => {
    let arr = [1, 8, 3, 4, 2, 6]
    let obj = arrayAnalysis(arr)
    expect(obj.average).toBe(4)
    expect(obj.min).toBe(1)
    expect(obj.max).toBe(8)
    expect(obj.length).toBe(6)
})