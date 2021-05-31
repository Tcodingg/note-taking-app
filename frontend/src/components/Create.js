import React, { useState } from 'react';

export default function Create() {
	const [note, setNote] = useState({
		title: '',
		content: '',
	});

	return (
		<section className='create section bd-container'>
			<h1>Create Note</h1>
			<form>
				<input type='text' />
				<textarea name='' id='' cols='30' rows='10'></textarea>
				<button>Add Note</button>
			</form>
		</section>
	);
}
