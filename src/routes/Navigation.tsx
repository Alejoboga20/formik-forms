import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import { FormikComponents } from '../03-forms/pages/FormikComponents';
import { FormikYupPage } from '../03-forms/pages/FormikYupPage';
import { RegisterPage } from '../03-forms/pages/RegisterPage';
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

					<Route path='/formik-components'>
						<FormikComponents />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};
