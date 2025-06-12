import PopupTag from '../popup-tag';

const TalkToMe = () => {
	return (
		<div className='mt-6 border-t border-t-border-color border-solid pt-6'>
			<PopupTag name='Talk to me' type='link' />

			<p className='text-sm text-text-color mt-2'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et .
			</p>
		</div>
	);
};

export default TalkToMe;
