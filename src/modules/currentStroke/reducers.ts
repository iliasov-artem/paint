import {
	Action,
	BEGIN_STROKE,
	UPDATE_STROKE,
	END_STROKE,
	SET_STROKE_COLOR,
} from './actions';
import { RootState } from '../../types';

const initialState: RootState['currentStroke'] = {
	points: [],
	color: '#000',
};

export const reducer = (
	state: RootState['currentStroke'] = initialState,
	action: Action
) => {
	switch (action.type) {
		case BEGIN_STROKE:
			return { ...state, points: [action.payload] };
		case UPDATE_STROKE:
			return { ...state, points: [...state.points, action.payload] };
		case END_STROKE:
			return { ...state, points: [] };
		case SET_STROKE_COLOR:
			return { ...state, color: action.payload };
		default:
			return state;
	}
};
