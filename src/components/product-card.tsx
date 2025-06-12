import Image from 'next/image';

const ProductCard: React.FC<ProductCard> = ({
	img,
	name,
	price,
	quantity,
	rating,
	bestSeller,
	className,
}) => {
	return (
		<div className={`bg-white rounded-xl p-2 md:p-4 ${className}`}>
			<figure>
				<Image
					src={img}
					width={bestSeller ? 148 : 164}
					height={bestSeller ? 161 : 112}
					alt={name}
					className={`w-full rounded-md object-cover ${
						bestSeller ? 'h-40 md:h-100' : 'h-[7rem] md:h-[11.25rem] xl:h-[13.25rem]'
					}`}
				/>
			</figure>
			<h3 className='text-text-color text-xs md:text-sm xl:text-base mt-2'>
				{name.length > 50 ? name.slice(0, 45) + '...' : name}
			</h3>
			<p className='text-text-color text-sm font-bold mt-2'>{price}</p>
			{quantity && (
				<div className='flex items-center mt-2 gap-1'>
					<svg
						width='12'
						height='13'
						viewBox='0 0 12 13'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M10.9823 5.88358L8.87294 7.70373L9.5156 10.4258C9.55105 10.5735 9.54192 10.7285 9.48936 10.8711C9.43679 11.0137 9.34315 11.1375 9.22025 11.2268C9.09736 11.3162 8.95074 11.3672 8.7989 11.3733C8.64706 11.3794 8.49682 11.3403 8.36716 11.2611L5.99997 9.8042L3.63138 11.2611C3.50173 11.3399 3.35168 11.3785 3.2001 11.3722C3.04852 11.3659 2.9022 11.3149 2.77957 11.2256C2.65693 11.1363 2.56346 11.0127 2.51093 10.8703C2.45839 10.728 2.44914 10.5733 2.48435 10.4258L3.12935 7.70373L1.01997 5.88358C0.905267 5.78444 0.822311 5.65371 0.781463 5.50771C0.740615 5.36171 0.743685 5.20691 0.79029 5.06264C0.836896 4.91838 0.924971 4.79104 1.04352 4.69653C1.16206 4.60202 1.30582 4.54453 1.45685 4.53123L4.22247 4.30811L5.28935 1.72623C5.34709 1.58552 5.44538 1.46516 5.57171 1.38046C5.69804 1.29575 5.8467 1.25052 5.9988 1.25052C6.1509 1.25052 6.29956 1.29575 6.42589 1.38046C6.55222 1.46516 6.65051 1.58552 6.70825 1.72623L7.77466 4.30811L10.5403 4.53123C10.6916 4.54403 10.8358 4.6012 10.9548 4.69558C11.0737 4.78996 11.1622 4.91735 11.2091 5.06179C11.256 5.20623 11.2592 5.3613 11.2184 5.50757C11.1775 5.65384 11.0944 5.7848 10.9795 5.88405L10.9823 5.88358Z'
							fill='#F1B911'
						/>
					</svg>
					<p className='text-[0.625rem] md:text-sm font-semibold flex items-center gap-1'>
						<span className='text-text-color'>{rating}</span>
						<span className='text-border-color'>({quantity})</span>
					</p>
				</div>
			)}
		</div>
	);
};

export default ProductCard;
