import React from "react";
import { dashboard as dashboards } from "../data/dashboard";

export default function DashboardComponent() {
	return (
		<div className="flex-5 mx-10">
			<h2 className="text-xl font-semibold mb-5">Dashboard</h2>
			<div className="flex gap-5 justify-center">
				{dashboards.map((dashboard) => {
					return (
						<div
							key={dashboard.id}
							className="flex bg-white gap-5 py-3.5 px-4 rounded-xl w-[250px]"
						>
							<div className={`p-3 rounded-xl ${dashboard.color}`}>
								<img src={dashboard.icon} alt={dashboard.label} />
							</div>
							<div>
								<p className="text-xl font-semibold">{dashboard.totalTasks}</p>
								<p className="text-gray-400">{dashboard.label}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
