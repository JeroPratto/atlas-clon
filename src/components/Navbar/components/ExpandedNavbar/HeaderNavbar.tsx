import { motion } from 'framer-motion'
import styles from './styles/HeaderNavbar.module.css'
import icon from '/iconNavbar.svg'

export type HeaderNavbarProps = {
	isOpen: boolean
}

const HeaderNavbar: React.FC<HeaderNavbarProps> = ({ isOpen }) => {
	return (
		<div className={styles.containerLogoAndBtn}>
			<div>
				<img src={icon} alt='icon atlas' />
			</div>
			<div className={styles.containerCross}>
				<motion.svg
					animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
					transition={{ duration: 0.2 }}
					fill='null'
					height='24'
					viewBox='0 0 24 24'
					width='24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d='M12 24L12 0' stroke='currentColor' strokeWidth='2'></path>
					<path d='M24 12H0' stroke='currentColor' strokeWidth='2'></path>
				</motion.svg>
			</div>
		</div>
	)
}

export default HeaderNavbar
