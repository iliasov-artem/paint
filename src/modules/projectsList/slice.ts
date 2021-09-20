import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, Project } from '../../utils/types';

const initialState: RootState['projectsList'] = {
	error: null,
	pending: false,
	projects: [],
};

export const projectsList = createSlice({
	name: 'projectsList',
	initialState: initialState,
	reducers: {
		getProjectsListSuccess: (state, action: PayloadAction<Project[]>) => {
			state.pending = false;
			state.error = null;
			state.projects = action.payload;
		},
		getProjectsListFailed: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
			state.pending = false;
			state.projects = [];
		},
	},
});

export default projectsList.reducer;

export const { getProjectsListSuccess, getProjectsListFailed } =
	projectsList.actions;
