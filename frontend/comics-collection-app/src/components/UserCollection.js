import React, { Component } from 'react';
import { Button, Container, Card, CardGroup } from 'react-bootstrap';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import UpdateCollectionForm from './UpdateCollectionForm';

class UserCollection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newComic: {},
		};
	}
	componentWillMount() {
		axios
			.get(`https://dws-comicbook-collection.herokuapp.com/comics`)
			.then((res) => {
				this.setState({
					newComic: res.data,
				});
			});
	}

	render() {
		return (
			<Container className='main-view'>
				<h1 className='user-collection'>Your comic book collection</h1>

				<Container className='cards'>
					{this.props.comicsCollection.map((comic) => {
						return (
							<div>
								<CardGroup>
									<Card
										key={comic.id}
										style={{ backgroundColor: 'rgb(255, 232, 126)' }}>
										<Card.Body>
											<Card.Title className='text-name'>
												{comic.title} #{comic.issue}
											</Card.Title>
											<Card.Text>
												<img
													className='cover'
													src={`${comic.cover_url}`}
													alt='comic-cover'
												/>
												<img
													className='personal'
													src={`${comic.personal_image}`}
													alt='personal-cover'
												/>
												<p>Cover date: {comic.publication_date}</p>
												<p>Notes: {comic.notes}</p>
											</Card.Text>
										</Card.Body>
										<Link to='/collection/:id'>
											<Button
												variant='primary'
												className='edit-button'
												value={comic.id}
												onClick={(e) => {
													const selectedComic = this.props.comicsCollection.find(
														(comic) => comic.id === e.currentTarget.value
													);
													this.setState({
														selectedComic: selectedComic,
													});
												}}>
												Edit
											</Button>
										</Link>{' '}
									</Card>
								</CardGroup>
							</div>
						);
					})}
					<Route
						path='/collection/:id'
						render={(routerProps) => {
							return (
								<UpdateCollectionForm
									history={routerProps.history}
									comicsCollection={this.state.data}
									comicBook={routerProps.match}
								/>
							);
						}}
					/>
				</Container>
			</Container>
		);
	}
}

export default UserCollection;
