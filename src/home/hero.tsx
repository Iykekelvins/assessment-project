import Image from 'next/image';

const Hero = () => {
	return (
		<section>
			<div className='app-container'>
				<div className='relative'>
					<figure>
						<Image
							src={'/images/banner.png'}
							width={1280}
							height={500}
							alt='hero banner'
							className='rounded-xl'
						/>
					</figure>
					<svg
						width='46'
						height='18'
						viewBox='0 0 46 18'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='absolute bottom-4 left-1/2 -translate-x-1/2'>
						<rect
							x='0.5'
							width='45'
							height='18'
							rx='9'
							fill='black'
							fillOpacity='0.3'
						/>
						<rect x='11' y='4.5' width='9' height='9' rx='4.5' fill='#6A7383' />
						<rect x='11' y='4.5' width='9' height='9' rx='4.5' stroke='#EBF0F4' />
						<rect x='26' y='4.5' width='9' height='9' rx='4.5' fill='#6A7383' />
						<rect x='26' y='4.5' width='9' height='9' rx='4.5' stroke='#EBF0F4' />
						<circle cx='30.5' cy='9' r='4' fill='#FF5B00' />
					</svg>
				</div>
			</div>
		</section>
	);
};

export default Hero;
