import { Route, Routes } from 'react-router-dom';
import MainPage from '../MainPage';

const routes =
	(
		<Routes>
			<Route path="/" element={<MainPage />} />
		</Routes>
	)

export default routes;