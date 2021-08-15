import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ModalState } from '../../utils/types';

const initialState: ModalState = {
	isShow: false,
	modalName: null,
};

const modalVisible = createSlice({
	name: 'modal',
	initialState: initialState,
	reducers: {
		show: (state, action: PayloadAction<ModalState['modalName']>) => {
			state.isShow = true;
			state.modalName = action.payload;
		},
		hide: () => initialState,
	},
});

export default modalVisible.reducer;
export const { show, hide } = modalVisible.actions;
