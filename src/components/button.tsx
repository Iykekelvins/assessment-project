interface ButtonProps {
	children: React.ReactNode;
	size?: 'md' | 'lg';
	className?: string;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
	children,
	size = 'lg',
	className,
	onClick,
}) => {
	return (
		<button
			className={`flex items-center justify-center gap-1.5 rounded-lg px-4 bg-white border border-page-bg border-solid
            ${size === 'lg' ? 'h-[37px]' : 'h-[26px]'} ${className}
      `}
			onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
