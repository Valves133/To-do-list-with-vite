import React from "react";
import useLocalStorage from "use-local-storage-state";
import { delay } from "../helpers/utils";
import { TASKS_KEY, type Task, TaskState } from "../models/task";

export default function useTasks() {
	const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY);
	const [tasks, setTasks] = React.useState<Task[]>([]);
	const [isLoadingTasks, setIsLoadingTasks] = React.useState(true);

	const safeTasks = tasksData ?? [];

	// async function fetchTasks() {
	// 	if (isLoadingTasks) {
	// 		await delay(2000);
	// 		setIsLoadingTasks(false);
	// 	}

	// 	setTasks(tasksData);
	// }

	// React.useEffect(() => {
	// 	fetchTasks();
	// }, [tasksData]);

	React.useEffect(() => {
		async function fetchTasks() {
			if (isLoadingTasks) {
				await delay(2000);
				setIsLoadingTasks(false);
			}

			setTasks(safeTasks);
		}

		fetchTasks();
	}, [safeTasks, isLoadingTasks]);

	return {
		tasks,
		createdTasksCount: tasks.filter((task) => task.state === TaskState.Created)
			.length,
		concludedTasksCount: tasks.filter((task) => task.concluded).length,
		isLoadingTasks,
	};
}
