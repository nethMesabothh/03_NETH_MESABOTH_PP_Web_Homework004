export const formatDate = (dateStr) => {
	const date = new Date(dateStr);
	const day = date.getDate();
	const month = date.toLocaleString("en-US", { month: "short" });
	const year = date.getFullYear();
	return `${month} ${day}, ${year}`;
};

export const getDaysLeft = (dueDate) => {
	const today = new Date();
	const due = new Date(dueDate);

	today.setHours(0, 0, 0, 0);
	due.setHours(0, 0, 0, 0);

	const diffTime = due - today;
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	return diffDays;
};
