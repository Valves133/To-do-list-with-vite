import CheckIcon from "../assets/icons/check.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import PlusIcon from "../assets/icons/plus.svg?react";
import SpinnerIcon from "../assets/icons/spinner.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/buttonIcon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import Input from "../components/input";
import InputCheckbox from "../components/input-checkbox";
import Skeleton from "../components/skeleton";
import Text from "../components/text";

export default function PageComponent() {
	return (
		<Container>
			<div className="grid gap-3">
				<div className="flex flex-col gap-10">
					<Text variant="body-sm-bold" className="text-pink-base">
						Hello World!
					</Text>
					<Text className="text-green-base">Hello World!</Text>
					<Text variant="body-sm-bold">Hello World!</Text>
				</div>

				<div className="flex gap-1">
					<Icon svg={TrashIcon} className="fill-pink-base" />
					<Icon svg={CheckIcon} className="fill-pink-base" />
					<Icon svg={PencilIcon} className="fill-pink-base" />
					<Icon svg={PlusIcon} className="fill-pink-base" />
					<Icon svg={SpinnerIcon} className="fill-pink-base" animate />
					<Icon svg={XIcon} className="fill-pink-base" />
				</div>

				<div className="flex gap-1">
					<Badge variant="secundary">5</Badge>
					<Badge variant="primary">2 de 5</Badge>
					<Badge loading>Loading</Badge>
				</div>

				<div>
					<Button icon={PlusIcon} variant="primary">
						Nova Tarefa
					</Button>
				</div>

				<div className="flex gap-1">
					<ButtonIcon icon={TrashIcon} variant="primary" />
					<ButtonIcon icon={TrashIcon} variant="secundary" />
					<ButtonIcon icon={TrashIcon} variant="tertiary" />
					<ButtonIcon icon={TrashIcon} loading />
				</div>
				<div>
					<Input />
				</div>

				<div>
					<InputCheckbox />
					<InputCheckbox loading />
				</div>

				<div>
					<Card size="md">Hello world</Card>
				</div>

				<div className="space-y-2">
					<Skeleton className="h-6" />
					<Skeleton className="h-6" />
					<Skeleton className="w-96 h-6" />
				</div>
			</div>
		</Container>
	);
}
