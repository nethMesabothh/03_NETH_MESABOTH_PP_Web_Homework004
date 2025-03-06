import { EllipsisVertical } from "lucide-react";
import React from "react";
import { formatDate, getDaysLeft } from "./Constant";

export default function CardComponent({ newProject }) {
	return (
		<div className="flex justify-start items-start gap-10 flex-wrap max-w-[1000px] h-[62vh] overflow-auto hidden-scrollbar ">
			{newProject?.map((project) => {
				return (
					<div
						key={project.projectName}
						className="w-[450px] h-[280px] p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700 mt-5"
					>
						<div className="flex justify-between mb-5">
							{/* date */}
							<p className={`text-custom-sky-blue font-medium`}>
								{formatDate(project.dueDate)}
							</p>
							<EllipsisVertical size={20} color="#374957" />
						</div>

						<h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
							{project.projectName}
						</h5>
						<p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
							{project.description
								? project.description
								: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique veritatis, excepturi quam nobis pariatur sed, repudiandae sapiente sunt fugiat tempora nam harum inventore"}
						</p>

						{/* progress bar */}
						<div className="w-full flex justify-between font-medium mb-1">
							<p>Progress</p>
							<p>{project.progress}%</p>
						</div>
						<div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
							<div
								className={`h-2.5 rounded-full ${
									project.progress === "100"
										? "bg-custom-sky-blue"
										: project.progress === "75"
										? "bg-custom-carrot w-[75%]"
										: project.progress === "50"
										? "bg-yellow-500 w-[50%]"
										: project.progress === "25"
										? "bg-custom-pink w-[25%]"
										: ""
								}`}
							></div>
							<div
								className="border-l-4 rounded-full border-l-custom-pink h-5 absolute -top-1 left-1/4"
								title="25%"
							></div>

							<div
								className="border-l-4 rounded-full border-l-custom-yellow-500 h-5 absolute -top-1 left-2/4"
								title="50%"
							></div>

							<div
								className="border-l-4 rounded-full border-l-custom-carrot h-5 absolute -top-1 left-3/4"
								title="75%"
							></div>
						</div>

						{/* deadline */}
						<div className="flex justify-end">
							<p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-28 text-center">
								{getDaysLeft(project.dueDate) === 0
									? "Today"
									: `${getDaysLeft(project.dueDate)} day left`}
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
