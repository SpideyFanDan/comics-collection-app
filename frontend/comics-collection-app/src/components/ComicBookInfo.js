import React from 'react';

function ComicBookInfo(props) {
	return (
		<div classname='comic-book-info'>
			<img
				src={this.props.comicBooks.image.medium_url}
				alt='comic book cover'
			/>
			<div className='content'>
				<h2>{this.props.comicBooks.volume.name}</h2>
				<h3>
					Issue #{this.props.comicBooks.issue_number}, Pub. date:{' '}
					{this.props.comicBooks.cover_date}
				</h3>
				<h4>"{this.props.comicBooks.name}"</h4>
				<p>{this.props.comicBooks.description}</p>
			</div>
			<button className='return'>Return to search list</button>
		</div>
	);
}

export default ComicBookInfo;
