import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Navbar.module.css'
import { ExpandedNavbar } from './components/ExpandedNavbar'
import HeaderNavbar from './components/ExpandedNavbar/HeaderNavbar'

export type NavbarProps = {
	// types...
}

const Navbar: React.FC<NavbarProps> = ({}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const containerRef = useRef<HTMLDivElement | null>(null)
	const toggleState = () => setIsOpen(!isOpen)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				if (isOpen) setIsOpen(false)
			}
		}
		document.addEventListener('click', handleClickOutside)
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	})

	return (
		<motion.nav
			ref={containerRef}
			className={styles.containerNavbar}
			onClick={() => toggleState()}
			animate={isOpen ? { padding: '0 8px' } : { padding: '0' }}
		>
			<HeaderNavbar isOpen={isOpen} />
			<ExpandedNavbar isOpen={isOpen} />
		</motion.nav>
	)
}

export default Navbar
