import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route, Redirect, HashRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
// import Login from './components/Login';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Home from './components/Home';
import UserCollection from './components/UserCollection';
import UpdateCollectionForm from './components/UpdateCollectionForm';

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
		};
	}
	componentWillMount() {
		axios
			.get(`https://dws-comicbook-collection.herokuapp.com/comics`)
			.then((res) => {
				this.setState({
					data: res.data,
				});
			});
	}

	render() {
		return (
			<Container className='App'>
				<HashRouter basename='/'>
					<Navbar />
					<main>
						<Route exact path='/home' component={Home} />
						<Route exact path='/login' />
						<Route
							exact
							path='/search'
							render={() => <Search setComicBooks={this.setComicBooks} />}
						/>{' '}
						<Route
							exact
							path='/collection'
							render={(routerProps) => {
								this.componentWillMount();
								return (
									<UserCollection
										comicsCollection={this.state.data}
										history={routerProps.history}
									/>
								);
							}}
						/>
						<Route
							exact
							path='/collection/:id'
							render={(routerProps) => {
								this.componentWillMount();
								return (
									<UpdateCollectionForm
										comicsCollection={this.state.data}
										history={routerProps.history}
									/>
								);
							}}
						/>
						<Redirect path='*' to='/home' />
					</main>
				</HashRouter>
			</Container>
		);
	}
}

export default App;
