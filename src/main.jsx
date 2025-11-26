import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Success from './Success.jsx';
import Error from './Error.jsx';
import './scss/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<StrictMode>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/success" element={<Success />} />
				<Route path="/error" element={<Error />} />
			</Routes>
		</StrictMode>
	</BrowserRouter>,
);
