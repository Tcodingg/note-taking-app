import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style.css';

export default function Notes() {
	const [notes, setNotes] = useState({
		title: '',
		content: '',
	});
	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await axios.get('https://localhost:3001');
				setNotes(data);
			} catch (err) {
				console.log(err);
			}
		};
	});

	return (
		<section className='notes section bd-container'>
			<h1>Notes Page</h1>
			{notes.map((note, index) => {
				<div key={index}>
					<h1>{note.title}</h1>
					<h1>{note.content}</h1>
				</div>;
			})}
		</section>
	);
}
