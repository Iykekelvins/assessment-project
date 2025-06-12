import { FEATURED_CATEGORIES } from '@/utils/mock';

import Image from 'next/image';

const Featured = () => {
	return (
		<section className='mt-8 md:mt-10 xl:mt-16'>
			<div className='app-container'>
				<h2 className='text-base md:text-3xl xl:text-5xl font-bold'>
					Featured Category
				</h2>

				<ul className='mt-2 md:mt4 xl:mt-8 flex grid-cols-4 gap-6 overflow-x-auto hide-scroll'>
					{FEATURED_CATEGORIES.map((category) => (
						<li
							key={category.name}
							className='bg-white rounded-lg flex flex-1 items-center justify-center 
                          flex-col min-h-[4.5rem] min-w-[5.25rem]
                          md:min-h-[7.5rem] xl:min-h-[9.5rem]
                          '>
							<Image
								src={category.img}
								width={48}
								height={48}
								alt='category image'
								className='max-h-12 object-contain'
							/>
							<p className='text-[0.5rem] md:text-base text-center mt-1 font-medium'>
								{category.name}
							</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Featured;
