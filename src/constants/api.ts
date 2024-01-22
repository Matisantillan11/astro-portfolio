const ENV = {
	DEVELOPMENT: 'http://localhost:5173/api',
	PRODUCTION: 'https://matisantillan.dev/api',
}

const API_BASE = ENV[import.meta.env.NODE_ENV]

export const API_ROUTE = {
	NEWSLETTER: {
		BASE: `${API_BASE}/newsletter`,
		SUBSCRIBE: `${API_BASE}/newsletter/subscribe`,
	},
}
