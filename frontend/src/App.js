import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import Notes from './components/Notes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/' component={Notes} />
					<Route exact path='/' component={Create} />
				</Switch>
			</div>
		</Router>
	);
}
