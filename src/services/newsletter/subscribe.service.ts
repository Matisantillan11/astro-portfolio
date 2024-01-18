import { API_ROUTE } from '../../constants/api'
import { baseApi } from '../../lib/api'
export const newsletterSubscriptionService = async (email: FormData) => {
	const response = await baseApi(API_ROUTE.NEWSLETTER.SUBSCRIBE, {
		method: 'POST',
		body: email,
	})
	const data = await response.json()
	return data
}
