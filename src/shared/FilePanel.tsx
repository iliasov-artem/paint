import { useDispatch } from 'react-redux';
import { useCanvas } from '../CanvasContext';
import { saveAs } from 'file-saver';
import { show } from '../modules/modals/slice';
import { getCanvasImage } from '../canvasUtils';

export const FilePanel = () => {
	const dispatch = useDispatch();
	const canvasRef = useCanvas();

	const exportToFile = async () => {
		const file = await getCanvasImage(canvasRef.current);
		if (!file) {
			return;
		}
		saveAs(file, 'drawing.png');
	};

	const saveProject = () => dispatch(show('PROJECTS_SAVE_MODAL'));
	const loadProject = () => dispatch(show('PROJECTS_MODAL'));

	return (
		<div className="window file">
			<div className="title-bar">
				<div className="title-bar-text">File</div>
			</div>
			<div className="window-body">
				<div className="field-row">
					<button className="save-button" onClick={exportToFile}>
						Export
					</button>
					<button className="save-button" onClick={saveProject}>
						Save
					</button>
					<button className="save-button" onClick={loadProject}>
						Load
					</button>
				</div>
			</div>
		</div>
	);
};
