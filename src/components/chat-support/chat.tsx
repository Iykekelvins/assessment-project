import { useState } from 'react';

import Image from 'next/image';
import * as Icons from '@/components/icons';

const Chat = () => {
	const [message, setMessage] = useState('');
	const [record, setRecord] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMessage(e.target.value);
	};

	return (
		<div
			className='mt-2 border border-solid border-[#FFFFFF80] rounded-full h-12 flex 
                    items-center gap-4 py-1.5 px-3 bg-[#FFFFFF99]'>
			<Image src={'/chat-icon.svg'} width={32} height={32} alt='chat icon' />
			{!record ? (
				<input
					type='text'
					placeholder='Chat to shop'
					className='bg-[#FFFFFFCC] rounded-[10px] px-2 h-full w-full outline-0 placeholder:text-[#A3ACBA]
                      text-text-color font-medium text-xs
        '
					value={message}
					onChange={handleChange}
				/>
			) : (
				<div className='w-full flex justify-center'>
					<Image src={'/recording.gif'} width={40} height={40} alt='recording gif' />
				</div>
			)}
			<div className='grid'>
				<button
					aria-label='Record message'
					className={`col-start-1 row-start-1 transition-opacity duration-300 ease-in-out ${
						!record ? 'opacity-100' : 'opacity-0 pointer-events-none'
					}`}
					onClick={() => setRecord(!record)}>
					<Icons.Microphone />
				</button>
				<button
					aria-label='Send message'
					className={`col-start-1 row-start-1 transition-opacity duration-300 ease-in-out ${
						message[0] && !record ? 'opacity-100' : 'opacity-0 pointer-events-none'
					}`}
					onClick={() => setMessage('')}>
					<Icons.Send />
				</button>
				<button
					aria-label='Stop recording'
					className={`col-start-1 row-start-1 transition-opacity duration-300 ease-in-out ${
						record ? 'opacity-100' : 'opacity-0 pointer-events-none'
					}`}
					onClick={() => setRecord(!record)}>
					<Icons.Stop />
				</button>
			</div>
		</div>
	);
};

export default Chat;
