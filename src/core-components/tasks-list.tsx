import PlusIcon from "../assets/icons/plus.svg?react";
import Button from "../components/button";
import useTask from "../hooks/use-task";
import useTasks from "../hooks/use-tasks";
import { TaskState } from "../models/task";
import TaskItem from "./task-item";

export default function TasksList() {
	const { safeTasks } = useTasks();
	const { prepareTask } = useTask();

	function handleNewTask() {
		prepareTask();
	}

	return (
		<>
			<section>
				<Button
					className="w-full"
					icon={PlusIcon}
					onClick={handleNewTask}
					disabled={safeTasks.some((task) => task.state === TaskState.Creating)}
				>
					New task
				</Button>
			</section>

			<section className="space-y-2">
				{safeTasks.map((task) => (
					<TaskItem key={task.id} task={task} />
				))}
			</section>
		</>
	);
}
