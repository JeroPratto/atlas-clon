import styles from '../Hero.module.css'
import { FadeUp } from '@/components/FadeUp'

const NoLimits = () => {
	return (
		<div className={styles.containerNoLimits}>
			<FadeUp element='p'>No Limits</FadeUp>
			<FadeUp
				element='p'
				animate={{ opacity: 0.5, translateY: 0 }}
				className={styles.overNoLimits}
			>
				No Limits
			</FadeUp>
		</div>
	)
}
export default NoLimits
