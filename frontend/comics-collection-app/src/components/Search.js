import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import ComicBookModal from './ComicBookModal';
import './Search.css';
// import { Route, Link } from 'react-router-dom';

function Search() {
	const [query, setQuery] = useState('');
	const [comicBooks, setComicBooks] = useState([]);
	const [comic, setComic] = useState(null);
	const [isOpen, setIsOpen] = useState(false);

	const showModal = (comic) => {
		console.log('hello world');
		setIsOpen(true);
		setComic(comic);
	};

	const hideModal = () => {
		setIsOpen(false);
	};
	const searchTitle = async (event) => {
		event.preventDefault();
		const cors = 'https://cors-anywhere.herokuapp.com/';
		const url = `${cors}https://comicvine.gamespot.com/api/search/?api_key=${process.env.REACT_APP_COMICVINE_API_KEY}&format=json&sort=name:asc&resources=issue&query=${query}&limit=100`;
		try {
			const res = await fetch(url);
			const data = await res.json();
			setComicBooks(data.results);
		} catch (err) {
			console.error(err);
		}
	};
	// const chosenComic = props => {
	//  	const [comic, setComic] = useState(props);
	// };
	//		return ()

	return (
		<Container>
			<form className='search-form' onSubmit={searchTitle}>
				<label className='search-label' htmlFor='query'>
					Search by Comic Title
				</label>
				<input
					className='search-box'
					type='text'
					name='query'
					value={query}
					onChange={(event) => setQuery(event.target.value)}
					placeholder='i.e. Amazing Spider-Man...'
				/>
				<button className='search-button' type='submit'>
					Search
				</button>
			</form>
			<Container className='comics-list'>
				{comicBooks.map((comic) => (
					<div key={comic.id}>
						<Button
							onClick={() => showModal(comic)}
							variant='outline-secondary'
							className='results'
							name='comic'
							value={comic.id}>
							<img
								className='tiny-image'
								src={comic.image.icon_url}
								alt={comic.volume.name + 'cover'}
							/>
							<span className='comics-list-span'>
								{comic.volume.name}, iss. #{comic.issue_number}, pub. date:{' '}
								{comic.cover_date}
							</span>
						</Button>
					</div>
				))}
				<ComicBookModal
					comicBooks={comic}
					show={isOpen}
					onHide={hideModal}></ComicBookModal>
			</Container>
		</Container>
	);
}

export default Search;
