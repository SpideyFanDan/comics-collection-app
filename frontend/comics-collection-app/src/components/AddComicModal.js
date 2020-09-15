import React from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AddComicModal(props) {
	const handleSubmit = () => {
		axios
			.post(
				`https://dws-comicbook-collection.herokuapp.com/comics/`,
				props.newComic
			)
			.then((res) => {
				console.log(res);
			});
	};

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	axios
	// 		.put(`https://dws-comicbook-collection.herokuapp.com/comics/`, {
	// 			title: this.state.title,
	// 			issue: this.state.issue,
	// 			publication_date: this.state.publication_date,
	// 			cover_url: this.state.cover_url,
	// 			personal_image: this.state.personal_image,
	// 			notes: this.state.notes,
	// 		})
	// 		.then((res) => {
	// 			console.log(res);
	// 		});
	// };
	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			<Modal.Header closeButton>Add a comic below:</Modal.Header>
			<div>
				<Form className='comic-collection-form'>
					<Form.Group>
						<Form.Label>Comic Book Title</Form.Label>
						<Form.Control
							type='text'
							placeholder='Title'
							// value={props.newComic.title}
						/>
						<br />
					</Form.Group>
					<Form.Group>
						<Form.Label>Issue #: </Form.Label>
						<Form.Control
							type='text'
							placeholder='issue #'
							// value={props.newComic.issue}
						/>
						<br />
					</Form.Group>
					<Form.Group>
						<Form.Label>Publication Date: </Form.Label>
						<Form.Control
							type='text'
							placeholder='publication date'
							// value={props.newComic.publication_date}
						/>
						<br />
					</Form.Group>
					<Form.Group>
						<Form.Label>Cover URL: </Form.Label>
						<Form.Control
							type='text'
							placeholder='cover URL'
							// value={props.newComic.cover_url}
						/>
						<br />
					</Form.Group>
					<Form.Group>
						<Form.Label>Personal Image: </Form.Label>
						<Form.File
							id='personal-image'
							label='Personal Image'
							// value={props.newComic.personal_image}
						/>
					</Form.Group>
					<Form.Group controlId='notes'>
						<Form.Label>Notes:</Form.Label>
						<Form.Control
							as='textarea'
							rows='3'
							// value={props.newComic.notes}
						/>
					</Form.Group>

					<Link to='/collection'>
						<Button
							className='modal-edit-button'
							variant='success'
							onClick={handleSubmit}>
							Add
						</Button>
					</Link>
					<Link to='/collection'>
						<Button className='modal-cancel-button' variant='secondary'>
							Cancel
						</Button>
					</Link>
				</Form>
			</div>
		</Modal>
	);
}

export default AddComicModal;
