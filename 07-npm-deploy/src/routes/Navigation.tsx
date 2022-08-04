import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'

import logo from '../logo.svg'
import { ShoppingPage } from '../pages'

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className='main-layout'>
				<nav>
					<img src={logo} alt='React Logo' />
					<ul>
						<li>
							<NavLink to='/' className={({ isActive }) => (isActive ? 'nav-active' : '')}>
								Shoppin page
							</NavLink>
						</li>
						<li>
							<NavLink to='/about' className={({ isActive }) => (isActive ? 'nav-active' : '')}>
								About
							</NavLink>
						</li>
						<li>
							<NavLink to='/users' className={({ isActive }) => (isActive ? 'nav-active' : '')}>
								Users
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path='home' element={<ShoppingPage />} />
					<Route path='users' element={<h1>UsersPage</h1>} />
					<Route path='about' element={<h1>HomePage</h1>} />
					<Route path='/*' element={<Navigate to='/home' replace />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}
