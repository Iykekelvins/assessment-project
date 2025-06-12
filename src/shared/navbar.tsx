import Image from 'next/image';
import Link from 'next/link';
import * as Icons from '@/components/icons';

const Navbar = () => {
	return (
		<header className='bg-white sticky top-0 px-4 pt-10 pb-4'>
			<nav>
				<div className='app-container'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-6'>
							<button className='lg:hidden'>{<Icons.Hamburger />}</button>
							<Link href='/'>
								<Image src='/logo.svg' width={86.95} height={24} alt='sore logo' />
							</Link>
						</div>

						<div className='flex items-center gap-6'>
							<button>
								<Icons.Profile />
							</button>
							<button>
								<Icons.Notification />
							</button>

							<div
								className='hidden md:flex items-center justify-between h-12 border 
                              border-border-color border-solid rounded-full
                              w-[21.5rem] px-3.5 transition-all duration-300
                              ease-in-out focus-within:border-black
                              '>
								<input
									type='text'
									placeholder='Search'
									className='text-sm font-medium placeholder:text-secondary-text-color
                             placeholder:font-medium outline-0 bg-none text-text-color
                             w-full
                  '
								/>
								<Icons.Search />
							</div>
						</div>
					</div>

					<div
						className='flex md:hidden items-center justify-between h-12 border 
                              border-border-color border-solid rounded-full
                              w-full px-3.5 mt-4 transition-all duration-300
                              ease-in-out focus-within:border-black'>
						<input
							type='text'
							placeholder='Search'
							className='text-sm font-medium placeholder:text-secondary-text-color
                             placeholder:font-medium outline-0 bg-none text-text-color
                             w-full
                  '
						/>
						<Icons.Search />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
