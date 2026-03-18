import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import Icon from "./icon";

export const buttonVariants = cva(
	"inline-flex items-center justify-center transition cursor-pointer group",
	{
		variants: {
			variant: {
				primary: "bg-green-base hover:bg-green-dark",
				secundary: "bg-gray-200 hover:bg-pink-base",
				tertiary: "bg-white hover:bg-gray-200",
			},
			size: {
				sm: "w-6 h-6 p-1 rounded",
			},
			disabled: {
				true: "opacity-50 pointer-events-none",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "sm",
			disabled: false,
		},
	},
);

export const buttonIconVariants = cva("transition", {
	variants: {
		variant: {
			primary: "fill-white",
			secundary: "fill-pink-base group-hover:fill-white",
			tertiary: "fill-gray-300 group-hover:fill-gray-400",
		},
		size: {
			sm: "w-4 h-4 ",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "sm",
	},
});

interface ButtonIconProps
	extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
		VariantProps<typeof buttonVariants> {
	icon: React.ComponentProps<typeof Icon>["svg"];
}

export default function ButtonIcon({
	variant,
	size,
	className,
	disabled,
	icon,
	...props
}: ButtonIconProps) {
	return (
		<button
			className={buttonVariants({ variant, size, className, disabled })}
			{...props}
		>
			{icon && (
				<Icon svg={icon} className={buttonIconVariants({ variant, size })} />
			)}
		</button>
	);
}
