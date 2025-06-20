import Image from 'next/image';
import { useState } from 'react';
import ProductCard from '../product-card';
import Button from '../button';

const TAGS = [
	{
		name: 'Recommended',
		quantity: '20',
	},
	{
		name: 'Deals',
		quantity: '4',
	},
	{
		name: 'Coupon',
		quantity: '2',
	},
];

const MoreItems = () => {
	const [active, setActive] = useState(0);

	return (
		<div className='mt-4'>
			<ul className='flex items-center gap-4 overflow-x-auto hide-scroll'>
				{TAGS.map((tag, i) => (
					<li
						key={tag.name}
						className={`flex items-center justify-center h-[34px] rounded-lg px-2
                       ${
													i === active ? 'bg-brand-color' : 'bg-white'
												} border border-solid border-page-bg whitespace-nowrap  
                        transition-all duration-300 ease-in-out   
    `}>
						<button
							className='h-full w-full flex items-center justify-center gap-3.5'
							onClick={() => setActive(i)}>
							<div className='flex items-center'>
								<div
									className='h-[15px] w-[15px] flex items-center justify-center bg-page-bg rounded-[3px]
                            border border-white border-solid p-[1px] relative z-[2]
                  '>
									<span className='text-[0.625rem] text-text-color font-semibold'>
										{tag.quantity}
									</span>
								</div>
								<Image
									src={'/images/tag.png'}
									width={15}
									height={15}
									alt='WD Blue 1TB'
									className='relative -left-2'
								/>
							</div>
							<span
								className={`text-xs font-medium ${
									i === active ? 'text-white' : 'text-text-color'
								}`}>
								{tag.name}
							</span>
						</button>
					</li>
				))}
			</ul>

			<div className='flex items-center gap-4 overflow-x-auto hide-scroll mt-2'>
				{/* I displayed only the first row of products here becuase there are no aseets for the other filter tags */}
				{[...Array(4)].map((_, i) => (
					<ProductCard
						key={i}
						img={`/images/next-products/img-${i + 1}.jpg`}
						name='Wall Mounted 6u Rack - 600 X 450'
						price='$58,000'
						rating={4.7}
						quantity={188}
						className='min-w-[11.25rem] md:min-w-[13.25rem] xl:min-w-[15.25rem] w-full self-stretch'
					/>
				))}
			</div>

			<p className='text-sm text-text-color mt-2'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et .
			</p>

			<Button className='mt-2' size='md'>
				<svg
					width='16'
					height='16'
					viewBox='0 0 16 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M4.29295 2.55608C4.47273 1.81467 5.52718 1.81467 5.70696 2.55608L6.20164 4.59611C6.26583 4.86081 6.4725 5.06748 6.73721 5.13167L8.77724 5.62635C9.51864 5.80613 9.51864 6.86058 8.77724 7.04036L6.73721 7.53504C6.4725 7.59922 6.26583 7.8059 6.20164 8.0706L5.70696 10.1106C5.52718 10.852 4.47273 10.852 4.29295 10.1106L3.79828 8.0706C3.73409 7.8059 3.52741 7.59922 3.26271 7.53504L1.22268 7.04036C0.481275 6.86058 0.481274 5.80613 1.22268 5.62635L3.26271 5.13167C3.52741 5.06748 3.73409 4.86081 3.79828 4.59611L4.29295 2.55608Z'
						fill='#FF5B00'
					/>
					<path
						d='M10.2315 9.67554C10.3422 9.21929 10.9911 9.21929 11.1017 9.67554L11.4061 10.9309C11.4456 11.0938 11.5728 11.221 11.7357 11.2605L12.9911 11.5649C13.4474 11.6756 13.4474 12.3245 12.9911 12.4351L11.7357 12.7395C11.5728 12.779 11.4456 12.9062 11.4061 13.0691L11.1017 14.3245C10.9911 14.7807 10.3422 14.7807 10.2315 14.3245L9.92713 13.0691C9.88763 12.9062 9.76044 12.779 9.59755 12.7395L8.34215 12.4351C7.8859 12.3245 7.8859 11.6756 8.34215 11.5649L9.59755 11.2605C9.76044 11.221 9.88763 11.0938 9.92713 10.9309L10.2315 9.67554Z'
						fill='#FF5B00'
					/>
					<path
						d='M12.3811 2.47458C12.4537 2.17517 12.8795 2.17517 12.9521 2.47458L13.1519 3.29844C13.1778 3.40534 13.2613 3.4888 13.3682 3.51473L14.1921 3.7145C14.4915 3.7871 14.4915 4.21294 14.1921 4.28554L13.3682 4.48531C13.2613 4.51124 13.1778 4.5947 13.1519 4.7016L12.9521 5.52546C12.8795 5.82487 12.4537 5.82487 12.3811 5.52546L12.1813 4.7016C12.1554 4.5947 12.0719 4.51124 11.965 4.48531L11.1412 4.28554C10.8418 4.21294 10.8418 3.7871 11.1412 3.7145L11.965 3.51473C12.0719 3.4888 12.1554 3.40534 12.1813 3.29844L12.3811 2.47458Z'
						fill='#FF5B00'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M12.6666 2.62075L12.5036 3.29316C12.4384 3.56194 12.2285 3.7718 11.9598 3.83697L11.2874 4.00002L11.9598 4.16307C12.2285 4.22825 12.4384 4.4381 12.5036 4.70688L12.6666 5.37929L12.8297 4.70688C12.8949 4.4381 13.1047 4.22825 13.3735 4.16307L14.0459 4.00002L13.3735 3.83697C13.1047 3.7718 12.8949 3.56194 12.8297 3.29316L12.6666 2.62075ZM12.9929 2.25666C12.91 1.91447 12.4233 1.91447 12.3403 2.25666L12.112 3.19821C12.0824 3.32038 11.987 3.41577 11.8648 3.4454L10.9233 3.67371C10.5811 3.75669 10.5811 4.24335 10.9233 4.32633L11.8648 4.55464C11.987 4.58427 12.0824 4.67966 12.112 4.80183L12.3403 5.74338C12.4233 6.08557 12.91 6.08557 12.9929 5.74338L13.2212 4.80183C13.2509 4.67966 13.3463 4.58427 13.4684 4.55464L14.41 4.32633C14.7522 4.24335 14.7522 3.75669 14.41 3.67371L13.4684 3.4454C13.3463 3.41577 13.2509 3.32038 13.2212 3.19821L12.9929 2.25666Z'
						fill='#FF5B00'
					/>
					<path
						d='M4.66663 15.3334C4.29844 15.3334 3.99996 15.0349 3.99996 14.6667C3.99996 14.2985 4.29844 14 4.66663 14C5.03482 14 5.33329 14.2985 5.33329 14.6667C5.33329 15.0349 5.03482 15.3334 4.66663 15.3334Z'
						fill='#FF5B00'
					/>
					<path
						d='M1.33329 12.6667C0.965103 12.6667 0.666626 12.3682 0.666626 12C0.666626 11.6318 0.965103 11.3334 1.33329 11.3334C1.70148 11.3334 1.99996 11.6318 1.99996 12C1.99996 12.3682 1.70148 12.6667 1.33329 12.6667Z'
						fill='#FF5B00'
					/>
					<path
						d='M8.66663 2.00002C8.29844 2.00002 7.99996 1.70154 7.99996 1.33335C7.99996 0.965164 8.29844 0.666687 8.66663 0.666687C9.03481 0.666687 9.33329 0.965164 9.33329 1.33335C9.33329 1.70154 9.03481 2.00002 8.66663 2.00002Z'
						fill='#FF5B00'
					/>
					<path
						d='M14.6666 9.33335C14.2984 9.33335 14 9.03488 14 8.66669C14 8.2985 14.2984 8.00002 14.6666 8.00002C15.0348 8.00002 15.3333 8.2985 15.3333 8.66669C15.3333 9.03488 15.0348 9.33335 14.6666 9.33335Z'
						fill='#FF5B00'
					/>
				</svg>
				<span className='text-[0.625rem] text-brand-color font-semibold'>
					View more
				</span>
			</Button>
		</div>
	);
};

export default MoreItems;
