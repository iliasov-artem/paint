import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { endStroke } from '../sharedActions';
import { Point, RootState } from '../../utils/types';

const initialState: RootState['currentStroke'] = { color: '#000', points: [] };

export const currentStroke = createSlice({
	name: 'strokes',
	initialState: initialState,
	reducers: {
		beginStroke: (state, action: PayloadAction<Point>) => {
			state.points = [action.payload];
		},
		updateStroke: (state, action: PayloadAction<Point>) => {
			state.points.push(action.payload);
		},
		setStrokeColor: (state, action: PayloadAction<string>) => {
			state.color = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(endStroke, (state) => {
			state.points = [];
		});
	},
});

export default currentStroke.reducer;
export const { beginStroke, updateStroke, setStrokeColor } =
	currentStroke.actions;
