import Hero from './hero';
import Featured from './featured';
import BestSelling from './best-selling';

const Homepage = () => {
	return (
		<div className='p-4'>
			<Hero />
			<Featured />
			<BestSelling />
		</div>
	);
};

export default Homepage;
