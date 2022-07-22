const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('return an array of the same length', () => {
        let array = [1, 2]
        let scrambledArray = shuffleArray(array)
        expect(scrambledArray.length).toEqual(array.length)
    })

    test('shuffle the items in the array', () => {
        expect(shuffleArray()).toHaveLength(shuffleArray())
    })
})