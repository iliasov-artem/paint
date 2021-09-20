import { AppThunk } from '../../store';
import { newProject } from './api';

export const saveProject =
	(name: string, thumbmail: string): AppThunk =>
	async (dispatch, getState) => {
		try {
			const response = await newProject(name, getState().strokes, thumbmail);
			console.log(`response`, response);
		} catch (err) {
			console.log(`error.message`, err);
		}
	};
