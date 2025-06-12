import Image from 'next/image';
import ChristmasItems from './christmas-items';
import NextProducts from './next-products';

const ChatSupport = ({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: (e: boolean) => void;
}) => {
	return (
		<div
			className={`fixed top-0 left-0 h-full w-full z-50 flex items-center 
                     justify-center bg-[#000000B3] transition-opacity
                     duration-300 ease-in-out ${
												open
													? 'opacity-100 pointer-events-auto'
													: 'opacity-0 pointer-events-none'
											}
                     `}>
			<div className='max-w-[22.125rem] xl:max-w-[27.125rem] w-full'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-2.5'>
						<Image src={'/popup-icon.svg'} width={40} height={40} alt='popup icon' />
						<h2 className='text-white text-base font-bold'>Bing Chat Support</h2>
					</div>
					<button onClick={() => setOpen(false)}>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								opacity='0.4'
								d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
								fill='white'
							/>
							<path
								d='M13.0594 11.9999L15.3594 9.69986C15.6494 9.40986 15.6494 8.92986 15.3594 8.63986C15.0694 8.34986 14.5894 8.34986 14.2994 8.63986L11.9994 10.9399L9.69936 8.63986C9.40936 8.34986 8.92937 8.34986 8.63938 8.63986C8.34938 8.92986 8.34938 9.40986 8.63938 9.69986L10.9394 11.9999L8.63938 14.2999C8.34938 14.5899 8.34938 15.0699 8.63938 15.3599C8.78938 15.5099 8.97936 15.5799 9.16936 15.5799C9.35936 15.5799 9.54936 15.5099 9.69936 15.3599L11.9994 13.0599L14.2994 15.3599C14.4494 15.5099 14.6394 15.5799 14.8294 15.5799C15.0194 15.5799 15.2094 15.5099 15.3594 15.3599C15.6494 15.0699 15.6494 14.5899 15.3594 14.2999L13.0594 11.9999Z'
								fill='white'
							/>
						</svg>
					</button>
				</div>

				<div
					className={`w-full bg-popup-70 border border-popup border-solid rounded-3xl 
                        p-2 mt-3 transition-transform duration-300 ease-in-out
                        ${open ? 'scale-100' : 'scale-70'}
                        `}>
					<div className='bg-[#FFFFFF99] border border-[#FFFFFF80] border-solid rounded-2xl p-4'>
						<ChristmasItems />
						<NextProducts />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatSupport;
