import '../styles/styles.css'

import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import { MyTextInput } from '../components/MyTextInput'

export const RegisterFormikPage = () => {
	return (
		<div>
			<h1>Register Page</h1>

			<Formik
				initialValues={{ name: '', email: '', password1: '', password2: '' }}
				onSubmit={console.log}
				validationSchema={Yup.object({
					name: Yup.string()
						.min(2, 'Must be at least 2 characters')
						.max(15, 'Must be 15 characters or less')
						.required('Required*'),
					email: Yup.string().email('Invalid email address').required('Required*'),
					password1: Yup.string().min(6, 'Must be at least 6 characters').required('Required*'),
					password2: Yup.string()
						.min(6, 'Must be at least 6 characters')
						.oneOf([Yup.ref('password1')], 'Passwords does not match')
						.required('Required*'),
				})}
			>
				{({handleReset}) => (
					<Form>
						<MyTextInput label='Name' name='name' placeholder='John Doe' />
						<MyTextInput
							label='Email'
							name='email'
							placeholder='john.doe@example.com'
							type='email'
						/>
						<MyTextInput label='Password' name='password1' placeholder='******' type='password' />
						<MyTextInput
							label='Confirm password'
							name='password2'
							placeholder='******'
							type='password'
						/>

						<button type='submit'>Create</button>
						<button type='button' onClick={handleReset}>Reset</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}
