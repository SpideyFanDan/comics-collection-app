import React, { Component } from 'react';
import { Button, Container, Card, CardGroup } from 'react-bootstrap';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import UpdateCollectionForm from './UpdateCollectionForm';
import AddComicModal from './AddComicModal';

class UserCollection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			issue: '',
			publication_date: '',
			cover_url: '',
			personal_image: '',
			notes: '',
			newComic: {},
		};
	}
	showModal = () => {
		this.setState({ show: true });
	};

	hideModal = () => {
		this.setState({ show: false });
	};
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
				<h1 className='user-collection'>
					Your comic book collection{' '}
					<Button variant='success' onClick={this.state.showModal}>
						+
					</Button>{' '}
				</h1>

				<Container className='cards'>
					{this.props.comicsCollection.map((comic) => {
						return (
							<div>
								<CardGroup>
									<Card
										key={comic.id}
										style={{ backgroundColor: 'rgb(255, 232, 126)' }}>
										<Card.Body>
											<Card.Title as='h1' className='text-name'>
												{comic.title} #{comic.issue}
											</Card.Title>
											<Card.Text as='h2'>
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
					<AddComicModal>
						newComic={this.state.newComic}
						show={this.state.showModal}
						onHide={this.state.hideModal}
					</AddComicModal>
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
