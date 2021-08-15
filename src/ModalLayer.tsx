import { useSelector } from 'react-redux';
import { ProjectsModal } from './ProjectsModal';
import { ProjectSaveModal } from './ProjectSaveModal';
import { modalNameSelector } from './selectors';

const modals = {
	PROJECTS_MODAL: <ProjectsModal />,
	PROJECTS_SAVE_MODAL: <ProjectSaveModal />,
};

export const ModalLayer = () => {
	const modalName = useSelector(modalNameSelector);
	console.log(`modalName`, modalName);
	if (!modalName) {
		return null;
	}

	return modals[modalName];
};
