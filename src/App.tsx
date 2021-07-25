import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
	strokesSelector,
	historyIndexSelector,
	currentStrokeSelector,
} from './selectors';

import {
	beginStroke,
	endStroke,
	updateStroke,
} from './modules/currentStroke/actions';

import { useCanvas } from './CanvasContext';

import { drawStroke, clearCanvas } from './canvasUtils';
import { ColorPanel } from './shared/ColorPanel';
import { EditPanel } from './shared/EditPanel';
import { FilePanel } from './shared/FilePanel';

export const App = () => {
	const dispatch = useDispatch();
	const currentStroke = useSelector(currentStrokeSelector);
	const historyIndex = useSelector(historyIndexSelector);
	const strokes = useSelector(strokesSelector);

	const isDrawing = !!currentStroke.points.length;

	const getCanvasWithContext = (canvas = canvasRef.current) => {
		return { canvas, context: canvas?.getContext('2d') };
	};

	const startDrawning = ({
		nativeEvent,
	}: React.MouseEvent<HTMLCanvasElement>) => {
		const { offsetX, offsetY } = nativeEvent;
		dispatch(beginStroke(offsetX, offsetY));
	};

	const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
		if (!isDrawing) {
			return;
		}
		const { offsetX, offsetY } = nativeEvent;
		dispatch(updateStroke(offsetX, offsetY));
	};

	const endDrawning = () => {
		if (isDrawing) {
			dispatch(endStroke(currentStroke, historyIndex));
		}
	};

	const canvasRef = useCanvas();

	useEffect(() => {
		const { context } = getCanvasWithContext();
		if (!context) {
			return;
		}
		requestAnimationFrame(() =>
			drawStroke(context, currentStroke.points, currentStroke.color)
		);
	}, [currentStroke]);

	useEffect(() => {
		const { canvas, context } = getCanvasWithContext();
		if (!canvas || !context) {
			return;
		}
		requestAnimationFrame(() => {
			clearCanvas(canvas);
			strokes.slice(0, strokes.length - historyIndex).forEach((stroke) => {
				drawStroke(context, stroke.points, stroke.color);
			});
		});
	}, [historyIndex, strokes]);
	console.log(historyIndex);
	return (
		<div className="window">
			<div className="title-bar">
				<div className="title-bar-text">Paint</div>
				<div className="title-bar-controls">
					<button aria-label="Close" />
				</div>
			</div>
			<FilePanel />
			<EditPanel />
			<ColorPanel />
			<canvas
				onMouseDown={startDrawning}
				onMouseUp={endDrawning}
				onMouseOut={endDrawning}
				onMouseMove={draw}
				ref={canvasRef}
			/>
		</div>
	);
};
