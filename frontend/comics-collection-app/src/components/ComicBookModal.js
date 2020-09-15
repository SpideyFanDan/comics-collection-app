import React from 'react';
import { Modal, Button, Image } from 'react-bootstrap';
// import axios from 'axios';
import { Link } from 'react-router-dom';
// import UserCollection from './UserCollection';

function ComicBookModal(props) {
	// handleSubmit = (e) => {
	// 	const newComic = {
	// 		title: props.comicBooks.volume.name,
	// 		issue: props.comicBooks.issue_number,
	// 		cover_url: props.comicBooks.image.small_url,
	// 		publication_date: props.comicBooks.cover_date,
	//     };
	//     axios
	// 		.post(
	// 			`https://dws-comicbook-collection.herokuapp.com/comics/${props.newComic.id}`
	// 		)
	// 		.then((res) => {
	// 			console.log(res);
	//          this.setState({newComic: newComic})
	//     //somehow route to /collection in the browser UserCollection.js
	// });
	return (
		<Modal
			{...props}
			show={props.show}
			size='sm'
			aria-labelledby='contained-modal-title-vcenter'
			centered
			className='comic-book-modal'>
			<Modal.Header closeButton>
				<Modal.Title className='comic-modal-title'>
					{props.comicBooks && props.comicBooks.volume.name} #
					{props.comicBooks && props.comicBooks.issue_number}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className='content'>
					<Image
						src={props.comicBooks && props.comicBooks.image.small_url}
						alt='comic cover image'
						fluid
					/>
					<h3>Published: {props.comicBooks && props.comicBooks.cover_date}</h3>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' className='return' onClick={props.onHide}>
					Return to search list
				</Button>
				<Link to='/collection'>
					<Button
						variant='primary'
						// onClick={handleSubmit}
						className='add'>
						Add to collection
					</Button>
				</Link>
			</Modal.Footer>
		</Modal>
	);
}

export default ComicBookModal;
