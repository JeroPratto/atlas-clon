import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './styles/ExpandedNavbar.module.css'
import useMeasure from 'react-use-measure'
import NavLinkList from './NavLinkList'
import NavbarFooter from './NavbarFooter'

export type ExpandedNavbarProps = {
	isOpen: boolean
}

const ExpandedNavbar: React.FC<ExpandedNavbarProps> = ({ isOpen }) => {
	const [ref, { height }] = useMeasure()
	return (
		<AnimatePresence>
			<motion.div
				animate={{ height, transition: { duration: 0.2 } }}
				className={styles.expandedNavbarContainer}
			>
				{isOpen && (
					<div>
						<div ref={ref}>
							<NavLinkList />
							<NavbarFooter />
						</div>
					</div>
				)}
			</motion.div>
		</AnimatePresence>
	)
}

export default ExpandedNavbar
