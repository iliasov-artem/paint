import { reducer as currentStroke } from './modules/currentStroke/reducers';
import { reducer as historyIndex } from './modules/historyIndex/reducer';
import { reducer as strokes } from './modules/strokes/reducer';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import { logger } from 'redux-logger';

export const store = createStore(
	combineReducers({
		currentStroke,
		historyIndex,
		strokes,
	}),
	composeWithDevTools(applyMiddleware(logger))
);
