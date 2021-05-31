import React, { useState } from 'react';
import axios from 'axios';

export default function Create() {
	const [note, setNote] = useState({
		title: '',
		content: '',
	});

	function handleClick(e) {
		e.preventDefault();

		const newNote = {
			title: note.title,
			content: note.content,
		};
		axios.post('http://localhost:3001/create', newNote);
	}
	return (
		<section className='create section bd-container'>
			<h1>Create Note</h1>
			<form>
				<input type='text' />
				<textarea name='' id='' cols='30' rows='10'></textarea>
				<button onClick={handleClick}>Add Note</button>
			</form>
		</section>
	);
}
