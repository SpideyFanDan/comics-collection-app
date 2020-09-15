import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UpdateCollectionForm extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			issue: '',
			publication_date: '',
			cover_url: '',
			personal_image: '',
			notes: '',
			comicBook: {},
		};
	}
	componentWillMount() {
		const selectedComic = this.props.comicsCollection.find(
			(comicBook) => comicBook.id === this.props.comicBook.params.id
		);
		this.setState({
			comicBook: selectedComic,
		});
	}
	handleDelete = (e) => {
		e.preventDefault();
		axios
			.delete(
				`https://dws-comicbook-collection.herokuapp.com/comics/${this.comicBook.id}`
			)
			.then((res) => {
				console.log(res);
				this.history.goBack();
			});
	};
	handleEdit = (e) => {
		e.preventDefault();
		console.log(this.comicBook.id);
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
				this.history.goBack();
			});
	};
	cancel = () => {
		this.history.goBack();
	};
	render() {
		return (
			<div>
				<Form className='comic-collection-form'>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Cover URL'
							value={this.comicBook.cover_url}
						/>
						<br />
					</Form.Group>
					<Form.Group>
						<Form.File id='personal-image' label='Personal Image' />
					</Form.Group>
					<Form.Group controlId='notes'>
						<Form.Label>Notes:</Form.Label>
						<Form.Control as='textarea' rows='3' value={this.comicBook.notes} />
					</Form.Group>
				</Form>
				<Button
					className='modal-delete-button'
					variant='danger'
					onClick={this.handleDelete}>
					Delete
				</Button>{' '}
				<Button
					className='modal-edit-button'
					variant='warning'
					onClick={this.handleEdit}>
					Edit
				</Button>
				<Link to='/collection'>
					<Button
						className='modal-cancel-button'
						variant='secondary'
						onClick={this.cancel}>
						Cancel
					</Button>
				</Link>
			</div>
		);
	}
}

export default UpdateCollectionForm;
