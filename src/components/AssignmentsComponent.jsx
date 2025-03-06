import React, { useEffect, useState } from "react";
import AddNewProjectComponent from "./AddNewProjectComponent";
import CardComponent from "./CardComponent";

export default function AssignmentsComponent({ searchTerm }) {
	const [newProject, setNewProject] = useState([]);

	const handleNewProject = (project) => {
		setNewProject((prev) => [...prev, project]);
	};

	const filterProject = newProject.filter((project) => {
		return project.projectName.toLowerCase().includes(searchTerm.toLowerCase());
	});

	useEffect(() => {
		console.log(newProject);
	}, [newProject]);

	return (
		<div>
			<div className="flex justify-between flex-col mx-10 mt-10">
				{/* assignments  */}
				<div className="flex justify-between">
					<h2 className="text-xl font-semibold">Assignments</h2>
					<AddNewProjectComponent handleNewProject={handleNewProject} />
				</div>
				<CardComponent newProject={filterProject} />
			</div>
		</div>
	);
}
