import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hide } from './modules/modals/slice';
import { loadProject } from './modules/strokes/loadProject';
import { getProjectsList } from './modules/projectsList/getProjectsList';
import { getProjectsList as getProjectsListSelector } from './selectors';

export const ProjectsModal = () => {
	const dispatch = useDispatch();
	const projectsList = useSelector(getProjectsListSelector);

	useEffect(() => {
		dispatch(getProjectsList());
	}, []);

	const hideModal = () => dispatch(hide());
	const onLoadProject = (id: string) => {
		dispatch(loadProject(id));
		dispatch(hide());
	};

	return (
		<div className="window modal-panel">
			<div className="title-bar">
				<div className="title-bar-text">Counter</div>
				<div className="title-bar-controls">
					<button aria-label="Close" onClick={hideModal} />
				</div>
			</div>
			<div className="projects-container">
				{(projectsList.projects || []).map((project) => {
					return (
						<div
							key={project.id}
							className="project-card"
							onClick={() => onLoadProject(project.id)}
						>
							<img src={project.image} alt="thumbnail" />
							{project.name}
						</div>
					);
				})}
			</div>
		</div>
	);
};
