import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import UpdateComic from './components/UpdateComic';
import Navbar from './components/Navbar';
import Search from './components/Search';

class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Container>
				<HashRouter basename='/'>
					<Navbar />
					<main>
						<Switch>
							<Route
								exact
								path='/search'
								render={() => <Search setComicBooks={this.setComicBooks} />}
							/>{' '}
							<Redirect path='*' to='/home' />
						</Switch>
					</main>
				</HashRouter>
			</Container>
		);
	}
}

export default App;
