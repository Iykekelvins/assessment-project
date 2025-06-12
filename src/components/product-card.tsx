import Image from 'next/image';

const ProductCard: React.FC<ProductCard> = ({
	img,
	name,
	price,
	quantity,
	rating,
	bestSeller,
}) => {
	return (
		<div className='bg-white rounded-xl p-2 md:p-4'>
			<figure>
				<Image
					src={img}
					width={bestSeller ? 148 : 164}
					height={bestSeller ? 161 : 112}
					alt={name}
					className={`w-full rounded-md ${
						bestSeller ? 'h-40 md:h-100 object-cover' : ''
					}`}
				/>
				<h3 className='text-text-color text-xs md:text-sm xl:text-base mt-1'>
					{name.length > 50 ? name.slice(0, 45) + '...' : name}
				</h3>
				<p className='text-text-color text-sm font-bold mt-1'>{price}</p>
			</figure>
		</div>
	);
};

export default ProductCard;
