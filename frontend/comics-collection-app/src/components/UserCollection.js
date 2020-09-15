import React, { Component } from 'react';
import { Button, Container, Card, CardGroup } from 'react-bootstrap';
import axios from 'axios';
import UserCollectionModal from './UserCollectionModal';

class UserCollection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalShow: false,
			setModalShow: false,
			newComic: {},
			updateComic: {},
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
							<div key={comic.id}>
								<CardGroup>
									<Card style={{ backgroundColor: 'rgb(255, 232, 126)' }}>
										<Card.Body>
											<Card.Title className='text-name'>
												{comic.title}
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
											</Card.Text>
										</Card.Body>
										<Button
											variant='primary'
											className='edit-button'
											value={comic.id}
											onClick={(e) => {
												const updateComic = this.props.comicsCollection.find(
													(comic) => comic.id === e.currentTarget.value
												);

												this.setState({
													setModalShow: true,
													modalShow: true,
													updateComic: updateComic,
												});
											}}>
											Edit
										</Button>{' '}
									</Card>
								</CardGroup>
							</div>
						);
					})}

					<UserCollectionModal
						newComic={this.state.newComic}
						show={this.state.modalShow}
						onHide={() =>
							this.setState({ setModalShow: false, modalShow: false })
						}
					/>
				</Container>
			</Container>
		);
	}
}

export default UserCollection;
