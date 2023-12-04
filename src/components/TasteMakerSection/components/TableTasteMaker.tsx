import { FadeUp } from '@/components/FadeUp'
import styles from './styles/TableTasteMaker.module.css'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export type TableTasteMakerProps = {
	// types...
}

const TableTasteMaker: React.FC<TableTasteMakerProps> = ({}) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })
	return (
		<FadeUp
			element='div'
			className={styles.container}
			transition={{ duration: 1, delay: 0.5 }}
			isInView={isInView}
		>
			<div className={styles.item} ref={ref}>
				<p className={styles.itemTitle}>
					Dedicated
					<br />
					reservations¹
				</p>
				<p className={styles.itemDescription}>
					Access exclusive inventory at our restaurant partners including –
					Horses, Felix Trattoria, Cucina Alba, and more.
				</p>
			</div>
			<div className={styles.item}>
				<p className={styles.itemTitle}>
					Last-minute
					<br />
					bookings²
				</p>
				<p className={styles.itemDescription}>
					With bookings available at short notice, you won't find yourself on a
					waitlist.
				</p>
			</div>
			<div className={styles.item}>
				<p className={styles.itemTitle}>
					Acces during
					<br />
					peak hours
				</p>
				<p className={styles.itemDescription}>
					Members get seated at prime time, when availability is typically the
					hardest to get.
				</p>
			</div>
		</FadeUp>
	)
}
export default TableTasteMaker
