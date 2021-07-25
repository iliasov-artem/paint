import { useDispatch, useSelector } from 'react-redux';
import { strokesSelector } from '../selectors';
import { undo, redo } from '../modules/historyIndex/actions';

export const EditPanel = () => {
	const dispatch = useDispatch();
	const undoLimit = useSelector(strokesSelector).length;
	const onClickUndo = () => dispatch(undo(undoLimit));
	const onClickRedo = () => dispatch(redo());

	return (
		<div className="window edit">
			<div className="title-bar">
				<div className="title-bar-text">Edit</div>
			</div>
			<div className="window-body">
				<div className="field-row">
					<button className="button undo" onClick={onClickUndo}>
						Undo
					</button>
					<button className="button redo" onClick={onClickRedo}>
						Redo
					</button>
				</div>
			</div>
		</div>
	);
};
