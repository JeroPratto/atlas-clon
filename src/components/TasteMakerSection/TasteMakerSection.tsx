import React, { useRef } from 'react'
import styles from './TasteMakerSection.module.css'
import { FadeUp } from '../FadeUp'
import { useInView } from 'framer-motion'
import horses from '/horses.jpg'
import horsesMobile from '/horses-mobile.jpg'
import TableTasteMaker from './components/TableTasteMaker'
import ImageGrid from './components/ImageGrid'

export type TasteMakerSectionProps = {
	// types...
}

const TasteMakerSection: React.FC<TasteMakerSectionProps> = ({}) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })
	const horsesRef = useRef(null)
	const isInViewHorse = useInView(horsesRef, { once: true })
	return (
		<div className={styles.container} ref={ref} id='dining'>
			<div className={styles.containerMain}>
				<FadeUp
					element='h1'
					className={styles.title}
					isInView={isInView}
					transition={{ duration: 1, delay: 0.5 }}
				>
					Taste Maker
				</FadeUp>
				<FadeUp
					element='div'
					isInView={isInView}
					transition={{ duration: 1, delay: 0.5 }}
				>
					<p className={styles.subtitle}>Meet Atlas Supper Club.</p>
					<p className={styles.subtitleDescription}>
						Skip past the endless waitlists and concierge calls that turn up
						empty handed. With Atlas, you have a seat at the table at today's
						most desirable restaurants.
					</p>
				</FadeUp>
				<FadeUp
					element='div'
					isInView={isInViewHorse}
					className={styles.containerHorses}
					transition={{ duration: 1, delay: 0.5 }}
				>
					<picture>
						<source srcSet={horses} media='(min-width:900px)' />
						<img
							ref={horsesRef}
							src={horsesMobile}
							loading='lazy'
							alt='Supper Club interface in the Atlas app'
							className={styles.horses}
						/>
					</picture>
				</FadeUp>
				<p className={styles.mobileOnly}>
					SUPPER CLUB RESERVATIONS, INSIDE ATLAS APP.
				</p>
				<TableTasteMaker />
				<ImageGrid />
			</div>
		</div>
	)
}

export default TasteMakerSection
