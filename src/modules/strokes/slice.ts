import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { endStroke } from '../sharedActions';
import { RootState, Stroke } from '../../utils/types';

const initialState: RootState['strokes'] = [];

export const strokes = createSlice({
	name: 'strokes',
	initialState: initialState,
	reducers: {
		setStrokes: (state, action: PayloadAction<Stroke[]>) => {
			return action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(endStroke, (state, action) => {
			const { historyIndex, stroke } = action.payload;
			if (historyIndex === 0) {
				state.push(stroke);
			} else {
				state.splice(-historyIndex, historyIndex, stroke);
			}
		});
	},
});

export default strokes.reducer;
export const { setStrokes } = strokes.actions;
