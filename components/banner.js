import React from 'react';
import styles from './banner.module.css';

export default function Banner(props) {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<span className={styles.title1}>Bio Food </span>
				<span className={styles.title2}>For The Soul</span>
			</h1>
			<p className={styles.subTitle}>Discover your loacal bio store!</p>
			<div className={styles.buttonWrapper}>
				<button className={styles.button} onClick={props.handleOnClick}>
					{props.buttonText}
				</button>
			</div>
		</div>
	);
}
