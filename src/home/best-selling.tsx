import ProductCard from '@/components/product-card';
import { BEST_SELLERS } from '@/utils/mock';

const BestSelling = () => {
	return (
		<section className='mt-8 md:mt-10 xl:mt-16'>
			<div className='app-container'>
				<h2 className='text-base md:text-3xl xl:text-5xl font-bold'>Best Selling</h2>

				<div className='grid grid-cols-2 xl:grid-cols-3 gap-4 mt-2 md:mt4 xl:mt-8'>
					{BEST_SELLERS.map((card, i) => (
						<ProductCard key={i} {...card} bestSeller />
					))}
				</div>
			</div>
		</section>
	);
};

export default BestSelling;
