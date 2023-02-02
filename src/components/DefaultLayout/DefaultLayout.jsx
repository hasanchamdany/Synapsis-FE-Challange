// import Footer from 'components/Footer';
import Navbar from './../Navbar/Navbar';
import Head from 'next/head';

export default function DefaultLayout({ title = 'GMAD 2022', children }) {
	return (
		<div className="relative">
			<Head>
				<title>{title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<div className="w-screen max-w-full overflow-x-hidden">
				<main>{children}</main>
				{/* <Footer /> */}
			</div>
		</div>
	);
}
