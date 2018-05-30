package contracts

org.springframework.cloud.contract.spec.Contract.make {
    request {
        method 'GET'
        url '/api/noodles'
    }
    response {
        status 200
        body '''
		[
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
		]
	'''
    }
}