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
        const contractData = await readContractJson('shouldReturnAvailableNoodles.json')

        const noodleResponse = await noodleFetcher.fetchNoodles()
        expect(noodleResponse).toEqual(JSON.parse(contractData))
    })
});

function readContractJson(filename) {
    const { exec } = require('child_process');
    const util = require('util')
    const fs = require('fs')

    const execAsPromise = util.promisify(exec)
    const fsReadFileAsPromise = util.promisify(fs.readFile)

    return execAsPromise('git rev-parse --show-toplevel')
        .then((output) => {
            const topLevelPath = output.stdout.replace('\n','')
            return fsReadFileAsPromise(`${topLevelPath}/build/stubs/META-INF/com.contractdemo/contractdemo/0.0.1-SNAPSHOT/mappings/${filename}`)
        })
        .then((contractData) => {
            return JSON.parse(contractData).response.body
        })
}