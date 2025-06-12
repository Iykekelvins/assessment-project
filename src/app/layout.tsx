import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { metaDataOptions } from '@/utils/metadata';

import Navbar from '@/shared/navbar';

import './globals.css';

const poppins = Poppins({
	variable: '--font-poppins',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: 'The Project',
	description: 'Frontend Engineering Assessment',
	...metaDataOptions,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${poppins.variable}  antialiased`}>
				<main>
					<Navbar />
					{children}
				</main>
			</body>
		</html>
	);
}
