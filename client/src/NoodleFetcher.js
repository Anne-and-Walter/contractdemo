const axios = require('axios')

class NoodleFetcher {
    fetchNoodles() {
        return axios.get('http://localhost:8080/api/noodles')
            .then((response) => {
                return response.data
            })
    }
}

module.exports = { NoodleFetcher }