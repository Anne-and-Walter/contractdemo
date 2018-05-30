const { NoodleFetcher } = require('../NoodleFetcher')

describe('fetching noodles', () => {
    it('should fetch the latest noodle ratings',  async () => {
        const noodleFetcher = new NoodleFetcher()
        const noodleResponse = await noodleFetcher.fetchNoodles()
        expect(noodleResponse).toEqual([
            {
                "noodle": "wheat",
                "rating": 10
            },
            {
                "noodle": "rice",
                "rating": 11
            },
            {
                "noodle": "zucchini",
                "rating": 9
            }
        ])
    })
});