import express from 'express';
import cors from 'cors';

import { LowSync, JSONFileSync } from 'lowdb';
// import FileSync from "lowdb/adapters/FileSync"
import { nanoid } from 'nanoid';

const db = new LowSync(new JSONFileSync<{ projects: Project[] }>('db.json'));
db.data = db.data || {
	projects: [
		{
			id: nanoid(),
			name: 'Test Project',
			image: 'http://placekitten.com/100/100',
			strokes: [],
		},
	],
};
db.write();

interface Project {
	id: string;
	name: string;
	strokes: Stroke[];
	image: string;
}

interface Stroke {
	point: Point[];
}

interface Point {
	x: number;
	y: number;
}

const app = express();

app.use(cors());
app.use(express.json());

const port = 4000;

app.get('/projects', (req, res) => {
	const data = db.data!.projects;
	console.log(`data`, data);
	const projects = data.map((project) => ({
		name: project.name,
		image: project.image,
		id: project.id,
	}));
	return res.json(projects);
});

app.post('/projects/new', (req, res) => {
	db.data!.projects.push({ ...req.body, id: nanoid() });
	db.write();
	res.json({ success: true });
});

app.get('/projects/:projectId', (req, res) => {
	const { projectId } = req.params;
	const project = db.data!.projects.find(({ id }) => id === projectId);

	if (project) {
		return res.json({
			success: true,
			project,
		});
	} else {
		return res.json({
			success: false,
		});
	}
});

app.listen(port, () =>
	console.log(`Backend running on http://localhost:${port}!`)
);
