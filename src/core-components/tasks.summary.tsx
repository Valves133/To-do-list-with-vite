import Badge from "../components/badge";
import Text from "../components/text";

export default function TasksSummary() {
	return (
		<>
			<div className="flex items-center gap-2">
				<Text variant="body-sm-bold" className="!text-gray-300">
					Tasks created
				</Text>
				<Badge variant="secundary">5</Badge>
			</div>
			<div className="flex items-center gap-2">
				<Text variant="body-sm-bold" className="!text-gray-300">
					Completed
				</Text>
				<Badge variant="primary">2 of 5</Badge>
			</div>
		</>
	);
}
