import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<header className='navbar'>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/notes'>Notes</Link>
				</li>
				<li>
					<Link to='/create'>Create Note</Link>
				</li>
			</ul>
		</header>
	);
}
