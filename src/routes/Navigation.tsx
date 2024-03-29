import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import {
	DynamicForm,
	FormikAbstraction,
	FormikBasicPage,
	FormikComponents,
	FormikYupPage,
	RegisterFormikPage,
	RegisterPage,
} from '../03-forms/pages';
import logo from '../logo.svg';

export const Navigation = () => {
	return (
		<Router>
			<div className='main-layout'>
				<nav>
					<img src={logo} alt='React Logo' />
					<ul>
						<li>
							<NavLink to='/register' activeClassName='nav-active' exact>
								Register Page
							</NavLink>
						</li>
						<li>
							<NavLink to='/formik-register' activeClassName='nav-active' exact>
								Register Formik Page
							</NavLink>
						</li>
						<li>
							<NavLink to='/formik-basic' activeClassName='nav-active' exact>
								Formik Basic Page
							</NavLink>
						</li>
						<li>
							<NavLink to='/formik-yup' activeClassName='nav-active' exact>
								Formik Yup Page
							</NavLink>
						</li>
						<li>
							<NavLink to='/formik-components' activeClassName='nav-active' exact>
								Formik Components
							</NavLink>
						</li>
						<li>
							<NavLink to='/formik-abstraction' activeClassName='nav-active' exact>
								FormikAbstraction
							</NavLink>
						</li>
						<li>
							<NavLink to='/dynamic-form' activeClassName='nav-active' exact>
								DynamicForm
							</NavLink>
						</li>
					</ul>
				</nav>

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path='/formik-basic'>
						<FormikBasicPage />
					</Route>
					<Route path='/formik-yup'>
						<FormikYupPage />
					</Route>
					<Route path='/register'>
						<RegisterPage />
					</Route>
					<Route path='/formik-register'>
						<RegisterFormikPage />
					</Route>

					<Route path='/formik-components'>
						<FormikComponents />
					</Route>
					<Route path='/formik-abstraction'>
						<FormikAbstraction />
					</Route>
					<Route path='/dynamic-form'>
						<DynamicForm />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};
