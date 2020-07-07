const router = require('express').Router()
const axios = require('axios')

router.get('/deez/:search', (req, res) => {
	axios
		.get(
			`https://deezerdevs-deezer.p.rapidapi.com/search?q=${req.params.search}`,
			{
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
					'x-rapidapi-key': process.env.API_KEY,
				},
			}
		)
		.then(({ data }) => {
			res.json(data.data)
		})
		.catch((e) => console.error(e))
})
module.exports = router
