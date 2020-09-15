import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from '../images/comicbook-box.png';
import Container from 'react-bootstrap/Container';

class Home extends Component {
	render() {
		return (
			<Container className='homepage'>
				<h1 className='welcome-header'>
					Welcome to the comic book collector's app!
					<p className='instructions'>
						Click on the comic book storage box below to begin building your
						collection!
					</p>
				</h1>

				<div className='homepage-container'>
					<Link to='/search'>
						<img
							src={Image}
							alt='comic book collection box'
							className='comic-box-image'
						/>
					</Link>
				</div>
			</Container>
		);
	}
}
export default Home;
