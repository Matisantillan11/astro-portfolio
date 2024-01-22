import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer, toast } from 'react-toastify'
import { useRef, type FormEvent } from 'react'

export const NewsLetterForm = () => {
	const emailInputRef = useRef<HTMLInputElement>(null)

	const notify = () => toast('Muchas gracias por suscribirte. Te avisaremos cuando terminemos!')

	/* const submit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const email = new FormData(e.currentTarget)
		const data = await newsletterSubscriptionService(email)

		if (data.message) {
			notify()
			if (emailInputRef.current) emailInputRef.current.value = ''
			return
		}
	} */

	return (
		<div className='flex flex-col items-start'>
			<form className='w-full' /* onSubmit={submit} */>
				<label htmlFor='email'>Te avisamos cuando este listo?</label>
				<input ref={emailInputRef} autoComplete='email' className='w-full h-12 rounded-xl px-4 my-2' id='email' name='email' type='email' placeholder='Ingresa tu correo' />
				<button className='mt-4 px-12 text-sm py-2 bg-violet-700 rounded-xl hover:bg-violet-600'>Avisame!</button>
			</form>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
			/>
		</div>
	)
}
