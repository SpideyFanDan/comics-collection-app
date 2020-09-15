import React from 'react';
import { Modal, Button, Image } from 'react-bootstrap';
import axios from 'axios';
// import { Link } from 'react-router-dom';

function ComicBookModal(props) {
	const handleDelete = (e) => {
		e.preventDefault();
		console.log(props.newComic.id);
		axios
			.delete(
				`https://dws-comicbook-collection.herokuapp.com/comics/${props.newComic.id}`
			)
			.then((res) => {
				console.log(res);
				this.props.history.goBack();
			});
	};
	const handleEdit = (e) => {
		e.preventDefault();
		console.log(props.newComic.id);
		axios
			.put(
				`https://dws-comicbook-collection.herokuapp.com/comics/${props.newComic.id}`
			)
			.then((res) => {
				console.log(res);
				this.props.history.goBack();
			});
	};
	// render() {
	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
			className='modal-comic'>
			<Modal.Header closeButton>
				<Modal.Title id='modal-comic-title'>
					{/* {props.newComic.title} #{props.newComic.issue} */}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className='modal-body'>
				<div>
					<Image
						src='{props.newComic.cover_url}'
						alt='comic cover'
						className='cover-image'
						fluid
					/>
					<p>
						Personal image:
						{/* {props.newComic.personal_image} */}
					</p>
					<p>
						Notes:
						{/* {props.newComic.notes} */}
					</p>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<div>
					<Button
						className='modal-delete-button'
						variant='danger'
						onClick={() => {
							handleDelete();
						}}>
						Delete
					</Button>{' '}
					<Button
						className='modal-edit-button'
						variant='warning'
						onClick={() => {
							handleEdit();
						}}>
						Edit
					</Button>
				</div>

				<Button
					className='modal-cancel-button'
					variant='secondary'
					onClick={props.onHide}>
					Cancel
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
// }

export default ComicBookModal;
