import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'

import '../styles/styles.css'

export const RegisterPage = () => {
	const { name, email, pasword1, pasword2, formData, onChange, onReset, isValidEmail } = useForm({
		name: '',
		email: '',
		pasword1: '',
		pasword2: '',
	})

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		console.log(formData)
	}

	return (
		<div>
			<h1>Register Page</h1>

			<form noValidate onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='Name...'
					value={name}
					onChange={onChange}
					name='name'
					className={`${name.trim().length <= 0 && 'has-error'}`}
				/>
				{name.trim().length <= 0 && <span>Esete campo es obligatorio</span>}

				<input
					type='email'
					placeholder='Email...'
					value={email}
					onChange={onChange}
					name='email'
					className={`${!isValidEmail(email) && 'has-error'}`}
				/>
				{!isValidEmail(email) && <span>El email no es valido</span>}

				<input
					type='password'
					placeholder='Password...'
					value={pasword1}
					onChange={onChange}
					name='pasword1'
				/>
                {name.trim().length <= 0 && <span>Esete campo es obligatorio</span>}
				{pasword1.trim().length < 6 && pasword1.trim().length > 0 && <span>El password debe ser de 6 caracteres</span>}

				<input
					type='password'
					placeholder='Confirm Password...'
					value={pasword2}
					onChange={onChange}
					name='pasword2'
				/>
                {pasword2.trim().length <= 0 && <span>Esete campo es obligatorio</span>}
                {pasword2.trim().length > 0 && pasword1 !== pasword2 && <span>El password no coincide</span>}

				<button type='submit'>Create</button>

				<button type='button' onClick={onReset}>
					Reset
				</button>
			</form>
		</div>
	)
}
