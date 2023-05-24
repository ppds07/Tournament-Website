import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login'
import Console from './components/console'
import './App.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact index path='/' element={<Login />} ></Route>
					<Route exact path='/console' element={<Console />} ></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
