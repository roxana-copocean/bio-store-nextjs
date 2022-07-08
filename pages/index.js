import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Banner from '../components/banner';
import Card from '../components/card';
import { fetchBioStores } from '../lib/bio-stores';

export async function getStaticProps(context) {
	const bioStores = await fetchBioStores();
	console.log(bioStores);

	return {
		props: { bioStores: bioStores } // will be passed to the page component as props
	};
}

export default function Home(props) {
	const handleOnBannerBtnClick = () => {
		console.log('clicked');
	};
	return (
		<div className={styles.container}>
			<Head>
				<title>Bio Food For The Soul</title>

				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Banner buttonText="View stores nearby" handleOnClick={handleOnBannerBtnClick} />
				<div className={styles.heroImage}>
					<Image src="/static/hero.svg" alt="Hero Image" width={700} height={400} />
				</div>
				{props.bioStores.length > 0 && (
					<div>
						<h2 className={styles.heading2}>Bucharest Bio Stores</h2>
						<div className={styles.cardLayout}>
							{props.bioStores.map((store) => {
								return (
									<Card
										key={store.name}
										name={store.name}
										imgUrl={store.imgUrl || '/static/2 (2).jpg'}
										href={`/bio-store/${store.id}`}
									/>
								);
							})}
						</div>{' '}
					</div>
				)}
			</main>
		</div>
	);
}
