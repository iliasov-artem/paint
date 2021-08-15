import { Stroke } from '../../utils/types';

export const newProject = (name: string, strokes: Stroke[], image: string) =>
	fetch('http://localhost:4000/projects/new', {
		method: 'POST',
		headers: {
			// Accept: 'application/json',
			'Content-type': 'application/json',
		},
		body: JSON.stringify({
			name,
			strokes,
			image,
		}),
	}).then((res) => res.json());

export const getProject = (id: string) =>
	fetch(`http://localhost:4000/projects/${id}`).then((res) => res.json());
