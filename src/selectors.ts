import { RootState } from './utils/types';

export const currentStrokeSelector = (state: RootState) => state.currentStroke;
export const historyIndexSelector = (state: RootState) => state.historyIndex;
export const strokesSelector = (state: RootState) => state.strokes;
export const modalNameSelector = (state: RootState) =>
	state.modalVisible.modalName;

export const getProjectsList = (state: RootState) => state.projectsList;
