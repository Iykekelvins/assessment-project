import { Metadata } from 'next';

const title = 'The Project';
const description = 'Frontend Engineering Assessment';
const url = '';

export const metaDataOptions: Metadata = {
	generator: 'Next.js',
	applicationName: 'The Project',
	referrer: 'origin-when-cross-origin',
	keywords: [],
	authors: [{ name: 'Kelvin Ochubili', url: 'https://twitter.com/iykekelvins' }],
	creator: 'Kelvin Ochubili',
	publisher: 'Kelvin Ochubili',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		title,
		description,
		url,
		siteName: 'The Project',
		images: [
			{
				url: '/opengraph-image.jpg',
				width: 800,
				height: 600,
			},
			{
				url: '/opengraph-image.jpg',
				width: 1800,
				height: 1600,
				alt: 'The Project',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	icons: {
		icon: '/favicon.png',
		shortcut: '/favicon.png',
		apple: '/favicon.png',
		other: {
			rel: 'apple-touch-icon-precomposed',
			url: '/favicon.png',
		},
	},
	twitter: {
		card: 'summary_large_image',
		title,
		description,
		creator: '@iykekelvins',
		images: ['/twitter-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};
