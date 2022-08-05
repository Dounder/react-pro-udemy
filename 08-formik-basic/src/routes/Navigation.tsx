import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'

import {
	FormikBasicPage,
	FormikComponents,
	FormikYupPage,
	RegisterPage,
	FormikAbstractation,
	RegisterFormikPage,
	DynamicFormPage,
} from '../pages'

import logo from '../logo.svg'

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className='main-layout'>
				<nav>
					<img src={logo} alt='React Logo' />
					<ul>
						<li>
							<NavLink
								to='/register'
								className={({ isActive }) => (isActive ? 'nav-active' : '')}
							>
								Register Page
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/formik-basic'
								className={({ isActive }) => (isActive ? 'nav-active' : '')}
							>
								Formik Basic
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/formik-yup'
								className={({ isActive }) => (isActive ? 'nav-active' : '')}
							>
								Formik Yup
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/formik-components'
								className={({ isActive }) => (isActive ? 'nav-active' : '')}
							>
								Formik Components
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/formik-abstractations'
								className={({ isActive }) => (isActive ? 'nav-active' : '')}
							>
								Formik Abstractations
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/formik-register'
								className={({ isActive }) => (isActive ? 'nav-active' : '')}
							>
								Formik Register
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/dynamic-form'
								className={({ isActive }) => (isActive ? 'nav-active' : '')}
							>
								Dynamic form
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path='register' element={<RegisterPage />} />
					<Route path='formik-basic' element={<FormikBasicPage />} />
					<Route path='formik-yup' element={<FormikYupPage />} />
					<Route path='formik-components' element={<FormikComponents />} />
					<Route path='formik-abstractations' element={<FormikAbstractation />} />
					<Route path='formik-register' element={<RegisterFormikPage />} />
					<Route path='dynamic-form' element={<DynamicFormPage />} />
					<Route path='/*' element={<Navigate to='/register' replace />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}
