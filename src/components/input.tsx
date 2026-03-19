import { cva, cx, type VariantProps } from "class-variance-authority";
import { textVariants } from "./text";

export const inputTexteVariants = cva(
	`border-b border-solid border-gray-200 focus:border-pink-base bg-transparent outline-none`,
	{
		variants: {
			size: {
				md: "pb-2 px-2",
			},
			disabled: {
				true: "pointer-events-none",
			},
		},
		defaultVariants: {
			size: "md",
			disabled: false,
		},
	},
);

interface InputTextProps
	extends VariantProps<typeof inputTexteVariants>,
		Omit<React.ComponentProps<"input">, "size" | "disabled"> {}

export default function Input({
	size,
	disabled,
	className,
	...props
}: InputTextProps) {
	return (
		<input
			className={cx(
				inputTexteVariants({ size, disabled }),
				textVariants(),
				className,
			)}
			{...props}
		/>
	);
}
