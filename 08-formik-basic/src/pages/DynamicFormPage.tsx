import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import { MyTextInput } from '../components'
import { MySelect } from '../components/MySelect'
import formJson from '../data/custom-form.json'

const initialValues: { [key: string]: any } = {}
const requiredFields: { [key: string]: any } = {}

for (const { name, value, validation } of formJson) {
	initialValues[name] = value

	if (!validation) continue

	let schema = Yup.string()

	for (const rule of validation) {
		if (rule.type === 'required') schema = schema.required(rule.message)

		if (rule.type === 'min')
			schema = schema.min(
				(rule as any).value || 2,
				rule.message || 'This field must be at least 2 characters long'
			)

		if (rule.type === 'max')
			schema = schema.min(
				(rule as any).value || 20,
				rule.message || 'This field must be at most 20 characters long'
			)

		if (rule.type === 'email') schema = schema.email(rule.message)
	}

	requiredFields[name] = schema
}

export const DynamicFormPage = () => {
	return (
		<div>
			<h1>DynamicFormPage</h1>

			<Formik
				initialValues={initialValues}
				onSubmit={(values) => console.log(values)}
				validationSchema={Yup.object({ ...requiredFields })}
			>
				{({ handleReset }) => (
					<Form noValidate>
						{formJson.map(({ label, name, placeholder, type, options }) => {
							switch (type) {
								case 'text':
								case 'password':
								case 'email':
									return (
										<MyTextInput
											key={name}
											label={label}
											name={name}
											type={type as any}
											placeholder={placeholder}
										/>
									)

								case 'select':
									return (
										<MySelect
											key={name}
											label={label}
											name={name}
											options={options as any}
										/>
									)

								default:
									throw new Error(`Unknown type: ${type}`)
							}
						})}

						<button type='submit'>Submit</button>
						<button type='reset' onClick={handleReset}>
							Reset
						</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}
