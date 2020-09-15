import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UpdateCollectionForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// title: '',
			// issue: '',
			// publication_date: '',
			// cover_url: '',
			// personal_image: '',
			// notes: '',
			comicBook: {},
		};
	}
	// componentWillMount() {
	// 	const selectedComic = this.props.comicBook.find(
	// 		(comicBook) => comicBook.id === this.props.comicBook.params.id
	// 	);
	// 	this.setState({
	// 		comicBook: selectedComic,
	// 	});
	// }
	handleDelete = (e) => {
		e.preventDefault();
		axios
			.delete(
				`https://dws-comicbook-collection.herokuapp.com/comics/${this.comicBook.id}`
			)
			.then((res) => {
				console.log(res);
			});
	};
	handleOnChange = (e) => {
		e.preventDefault();
		axios
			.put(
				`https://dws-comicbook-collection.herokuapp.com/comics/${this.comicBook.id}`,
				{
					title: this.state.title,
					issue: this.state.issue,
					publication_date: this.state.publication_date,
					cover_url: this.state.cover_url,
					personal_image: this.state.personal_image,
					notes: this.state.notes,
				}
			)
			.then((res) => {
				console.log(res);
			});
	};
	render() {
		return (
			<div>
				<Form className='comic-collection-form'>
					<Form.Group>
						<Form.Label>Comic Book Title</Form.Label>
						<Form.Control type='text' placeholder='Title' />
						<br />
					</Form.Group>
					<Form.Group>
						<Form.Label>Issue #: </Form.Label>
						<Form.Control type='text' placeholder='issue #' />
						<br />
					</Form.Group>
					<Form.Group>
						<Form.Control type='text' placeholder='Cover URL' />
						<br />
					</Form.Group>
					<Form.Group>
						<Form.File id='personal-image' label='Personal Image' />
					</Form.Group>
					<Form.Group controlId='notes'>
						<Form.Label>Notes:</Form.Label>
						<Form.Control as='textarea' rows='3' />
					</Form.Group>
				</Form>
				<Link to='/collection'>
					<Button
						className='modal-delete-button'
						variant='danger'
						onClick={this.handleDelete}>
						Delete
					</Button>
				</Link>{' '}
				<Link to='/collection'>
					<Button
						className='modal-edit-button'
						variant='warning'
						onClick={this.handleOnChange}>
						Edit
					</Button>
				</Link>
				<Link to='/collection'>
					<Button className='modal-cancel-button' variant='secondary'>
						Cancel
					</Button>
				</Link>
			</div>
		);
	}
}

export default UpdateCollectionForm;
