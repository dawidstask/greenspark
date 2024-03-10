import axios from "axios";

const instance = axios.create({
	baseURL: 'https://api.mocki.io/v2/016d11e8',
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	}
})

export default instance
