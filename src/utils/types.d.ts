export type RootState = {
	currentStroke: Stroke;
	strokes: Stroke[];
	historyIndex: number;
	modalVisible: ModalState;
	projectsList: {
		error: string | null;
		pending: boolean;
		projects: Project[];
	};
};

export type Stroke = {
	points: Point[];
	color: string;
};

export type Point = {
	x: number;
	y: number;
};

export type ModalState = {
	isShow: boolean;
	modalName: 'PROJECTS_MODAL' | 'PROJECTS_SAVE_MODAL' | null;
};

export type Project = {
	id: string;
	name: string;
	image: string;
};
