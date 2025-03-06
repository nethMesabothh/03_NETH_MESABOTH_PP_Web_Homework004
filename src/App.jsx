import "./App.css";
import TopNavbarComponent from "./components/TopNavbarComponent";
import SidebarComponent from "./components/SidebarComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import DashboardComponent from "./components/DashboardComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";
import { useState } from "react";

function App() {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearchTerm = (searchString) => {
		setSearchTerm(searchString);
	};

	return (
		<div className="flex items-start justify-between gap-6">
			<SidebarComponent />
			<div className="flex flex-col flex-1 gap-3">
				<TopNavbarComponent handleSearchTerm={handleSearchTerm} />
				<div className="flex max-2xl:flex-col">
					<div>
						<DashboardComponent />
						<AssignmentsComponent searchTerm={searchTerm} />
					</div>
					<LearningMaterialsComponent />
				</div>
			</div>
		</div>
	);
}

export default App;
