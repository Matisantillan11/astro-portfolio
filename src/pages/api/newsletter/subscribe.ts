import type { APIRoute } from 'astro'
import { supabase } from '../../../lib/supabase'

export const POST: APIRoute = async ({ request, redirect }) => {
	const formData = await request.formData()
	const email = formData.get('email')?.toString()
	if (!email) {
		return new Response('Email is required', { status: 400 })
	}

	const { data, error } = await supabase
		.from('newsletter')
		.insert([
			{
				email,
			},
		])
		.select()

	if (error) {
		return redirect('/404')
	}

	return new Response(
		JSON.stringify({
			message: data,
		}),
		{
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
		},
	)
}
