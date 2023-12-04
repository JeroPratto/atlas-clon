import React from 'react'
import { getCompleteNavLinks } from '../Helpers/NavLinkList'
import styles from './Footer.module.css'
import atlasIcon from '/atlas-icon-blue.svg'
import women from '/women-blue.svg'

export type FooterProps = {
	// types...
}

const Footer: React.FC<FooterProps> = ({}) => {
	const linkList = getCompleteNavLinks()
	return (
		<div className={styles.container}>
			<div className={styles.containerLists}>
				{linkList.map((NavLink, listIndex) => (
					<ul className={styles.list} key={`footer-${listIndex}`}>
						<li className={styles.listTitle}>{NavLink.title}</li>
						{NavLink.list.map((Link, itemIndex) => (
							<li key={`item-footer-${itemIndex}`} className={styles.listItem}>
								<a href={Link.URL}>{Link.text}</a>
							</li>
						))}
					</ul>
				))}
				<img src={atlasIcon} alt='atlas icon' className={styles.atlasIcon} />
				<img src={women} alt='' className={styles.women} />
			</div>
		</div>
	)
}

export default Footer
