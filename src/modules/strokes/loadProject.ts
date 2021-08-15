import { AppThunk } from '../../store';
import { getProject } from './api';
import { setStrokes } from './slice';

export const loadProject =
	(id: string): AppThunk =>
	async (dispatch) => {
		try {
			const { project } = await getProject(id);
			dispatch(setStrokes(project.strokes));
		} catch (err) {
			console.log(`error.message`, err);
		}
	};
