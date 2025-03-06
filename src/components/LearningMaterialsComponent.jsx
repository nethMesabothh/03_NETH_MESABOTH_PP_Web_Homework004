import React, { useMemo, useState } from "react";
import { Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import { learningMaterials as initialLeaningMaterials } from "../data/learningMaterials";

export default function LearningMaterialsComponent() {
	const [materials, setMaterials] = useState(initialLeaningMaterials);

	const [sortedOrder, setSortedOrder] = useState("");

	//update the state
	const toggleIsFavorite = (id) => {
		const updateMaterials = materials.map((material) => {
			if (material.id === id) {
				return { ...material, isFavorite: !material.isFavorite };
			}
			return material;
		});
		setMaterials(updateMaterials);
	};

	//get value from child
	const handleSorted = (order) => {
		setSortedOrder(order);
	};

	//sorted order
	const sortedOrderFilter = useMemo(() => {
		let sorted = [...materials];
		if (sortedOrder === "A-Z") {
			sorted.sort((a, b) => a.title.localeCompare(b.title));
		} else if (sortedOrder === "Z-A") {
			sorted.sort((a, b) => b.title.localeCompare(a.title));
		}
		return sorted;
	}, [materials, sortedOrder]);

	return (
		<div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh] self-start flex-[1.5] mr-10 mt-5 p-3 hidden-scrollbar w-[400px] shrink max-2xl:w-[500px]">
			{/* calling filter component */}
			<FilterComponent handleSorted={handleSorted} />

			{/* title */}
			<div className="p-4 flex justify-between items-center">
				<h2 className="text-xl font-semibold">Learning Materials</h2>
				<img src="/more.svg" alt="three dot" width={30} height={30} />
			</div>
			<div className="space-y-3 ">
				{sortedOrderFilter.map((material) => {
					return (
						<div key={material.id}>
							<div className="bg-light-gray px-4 py-2 flex gap-5 items-center rounded-md">
								<img
									src={material.image}
									alt={material.title}
									width={50}
									height={50}
									className="rounded-xl"
								/>

								<div className="w-full">
									<div className="flex justify-between">
										<p className="text-base font-medium">{material.title}</p>
										<Star
											size={20}
											onClick={() => toggleIsFavorite(material.id)}
											className={
												material.isFavorite
													? "cursor-pointer text-yellow-400 fill-yellow-400"
													: "cursor-pointer"
											}
										/>
									</div>
									<p className="text-gray-400 text-sm">
										Posted at: {material.postedAt}
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
