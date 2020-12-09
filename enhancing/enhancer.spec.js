const enhancer = require('./enhancer.js');


const items = [
    { name: "Long Sword", durability: 20, enhancement: 0 },
    { name: "Sorrowbane", durability: 100, enhancement: 16 },
    { name: "Angel's Tear", durability: 50, enhancement: 20 }
]

describe("Tests Repair", () => {
    test.each(items)("Sets durability to 100", (item) => {
      expect(enhancer.repair(item).durability).toBe(100);
    });
});

describe('Tests success', () => {
    test.each(items)("Success for enhancement lower than 20", (item) => {
        if (item.enhancement < 20 ) {
            expect(enhancer.success(item).enhancement).toBe(item.enhancement + 1)
        } else {
            expect(enhancer.success(item).enhancement).toBe(20)
        }
    })
})

describe('tests fail', () => {
    test.each(items)("Item failures: item > 16, item < 15", (item) => {
        if (item.enhancement > 16) {
            expect(enhancer.fail(item).enhancement).toBe(item.enhancement - 1)
        }
        if (item.enhancement < 15 ) {
            expect(enhancer.fail(item).durability).toBe(item.durability - 5)
        } 
        else {
            expect(enhancer.fail(item).durability).toBe(item.durability - 10)
        }
    })
})