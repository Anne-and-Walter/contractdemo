const readJsonContractFile = require('spring-cloud-contract-json-reader')
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

    it('should fetch the latest noodle ratings with contracts',  async () => {
        const noodleFetcher = new NoodleFetcher()
        const contractData = await readJsonContractFile('shouldReturnAvailableNoodles.json')

        const noodleResponse = await noodleFetcher.fetchNoodles()
        expect(noodleResponse).toEqual(JSON.parse(contractData))
    })
});
