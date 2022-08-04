import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import { MyCheckbox, MySelect, MyTextInput } from '../components'

import '../styles/styles.css'

export const FormikAbstractation = () => {
	return (
		<div>
			<h1>Formik Abstractations</h1>

			<Formik
				initialValues={{ firstName: '', lastName: '', email: '', terms: true, jobType: '' }}
				onSubmit={console.log}
				validationSchema={Yup.object({
					firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required*'),
					lastName: Yup.string().max(10, 'Must be 10 characters or less').required('Required*'),
					email: Yup.string().email('Invalid email address').required('Required*'),
					terms: Yup.boolean()
						.isTrue('You must accept the terms and conditions')
						.required('Required*'),
					jobType: Yup.string()
						.notOneOf(['', 'it-junior'], 'This option is not allowed')
						.required('Required*'),
				})}
			>
				{() => (
					<Form>
						<MyTextInput label='First name' name='firstName' placeholder='John' />
						<MyTextInput label='Last name' name='lastName' placeholder='Doe' />
						<MyTextInput
							label='Email'
							name='email'
							placeholder='john.doe@example.com'
							type='email'
						/>

						<MySelect label='Job Type' name='jobType'>
							<option value='' hidden>
								Pick Job...
							</option>
							<option value='developer'>Developer</option>
							<option value='designer'>Designer</option>
							<option value='it-senior'>IT Senior</option>
							<option value='it-junior'>IT Junior</option>
						</MySelect>
						{/* <MySelect label='Job Type' name='jobType' options={option} /> */}

						<MyCheckbox label='Terms & conditions' name='terms' />

						<button type='submit'>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}
