import { ErrorMessage, useField } from 'formik'

interface Props {
	label: string
	name: string
	options?: Option[]
	placeholder?: string
	[x: string]: any
}

interface Option {
	value: string
	name: string
}

export const MySelect = ({ label, placeholder = 'Pick something...', ...props }: Props) => {
	const [field] = useField(props)

	return (
		<>
			<label htmlFor='jobType'>Job Type</label>
			{props.options ? (
				<select {...field} {...props}>
					<option value='' hidden>
						{placeholder}
					</option>
					{props.options.map(({ value, name }) => (
						<option key={value} value={value}>
							{name}
						</option>
					))}
				</select>
			) : (
				<select {...field} {...props}></select>
			)}
			<ErrorMessage name={props.name} component='span' />
		</>
	)
}
