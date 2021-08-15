import currentStroke from './modules/currentStroke/slice';
import historyIndex from './modules/historyIndex/slice';
import modalVisible from './modules/modals/slice';
import projectsList from './modules/projectsList/slice';
import strokes from './modules/strokes/slice';

// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { logger } from 'redux-logger';
import { RootState } from './utils/types';

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export const store = configureStore({
	reducer: {
		currentStroke,
		historyIndex,
		modalVisible,
		projectsList,
		strokes,
	},
	middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});
