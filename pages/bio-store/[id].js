import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import bioStoresData from '../../data/bio-store.json';
import Head from 'next/head';
import styles from '../../styles/bio-store.module.css';
import Image from 'next/image';
import cls from 'classnames';

export async function getStaticProps({ params }) {
	return {
		props: {
			bioStores: bioStoresData.find((store) => {
				return store.id.toString() === params.id;
			})
		} // will be passed to the page component as props
	};
}

export async function getStaticPaths() {
	const paths = bioStoresData.map((store) => {
		return {
			params: {
				id: store.id.toString()
			}
		};
	});
	return {
		paths,
		fallback: true // false or 'blocking'
	};
}

export default function BioStore(props) {
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	const handleUpvoteButton = () => {
		console.log('Vote');
	};
	return (
		<div className={styles.layout}>
			<Head>
				<title>{props.bioStores.name}</title>
			</Head>
			<div className={styles.container}>
				<div className={styles.col1}>
					<div className={styles.backToHomeLink}>
						<Link href="/">
							<a> Back to home</a>
						</Link>
					</div>
					<div className={styles.nameWrapper}>
						<h1 className={styles.name}>{props.bioStores.name}</h1>
					</div>
					<Image src={props.bioStores.imgUrl} width={600} height={360} alt={props.bioStores.name} />
				</div>
				<div className={cls('glass', styles.col2)}>
					<div className={styles.iconWrapper}>
						<Image src="/static/icons/location.svg" width={30} height={15} alt="icon" />
						<p className={styles.text}>{props.bioStores.address}</p>
					</div>
					<div className={styles.iconWrapper}>
						<Image src="/static/icons/store.svg" width={30} height={15} alt="icon" />
						<p className={styles.text}>{props.bioStores.neighbourhood}</p>
					</div>
					<div className={styles.iconWrapper}>
						<Image src="/static/icons/up.svg" width={30} height={15} alt="icon" />
						<p className={styles.text}>1</p>
					</div>
					<button className={styles.upvoteButton} onClick={handleUpvoteButton}>
						Up vote!
					</button>
				</div>
			</div>
		</div>
	);
}
