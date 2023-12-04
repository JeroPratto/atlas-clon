import React from 'react'
import styles from './Hero.module.css'
import videoCard from '/atlas-card.webm'
import poster from '/atlas-card-poster.webp'
import NoLimits from './components/NoLimits'
import { FadeUp } from '../FadeUp'

export type HeroProps = {
	// types...
}

const Hero: React.FC<HeroProps> = ({}) => {
	return (
		<div className={styles.container}>
			<NoLimits />
			<div className={styles.containerVideo}>
				<video
					src={videoCard}
					className={styles.video}
					autoPlay
					disableRemotePlayback
					muted
					playsInline
					poster={poster}
				/>
			</div>
			<div className={styles.description}>
				<FadeUp element='p' className={styles.mainDescription}>
					This is your friend who scores the hottest tables in town, your
					passport to weekend getaways, and your guest pass to must-see events.
					All brilliantly brought together in a card and app of uncompromising
					beauty and utility. This is the beginning of a journey to a world with
					no limits.
				</FadeUp>
				<FadeUp
					element='p'
					animate={{ opacity: 0.5, translateY: 0 }}
					className={styles.overDescription}
				>
					This is your friend who scores the hottest tables in town, your
					passport to weekend getaways, and your guest pass to must-see events.
					All brilliantly brought together in a card and app of uncompromising
					beauty and utility. This is the beginning of a journey to a world with
					no limits.
				</FadeUp>
				<FadeUp element='p' className={styles.secondaryDescription}>
					This is Atlas.
				</FadeUp>
			</div>
		</div>
	)
}

export default Hero
