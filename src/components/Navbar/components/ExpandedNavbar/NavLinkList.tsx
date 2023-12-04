import React from 'react'
import getNavLinks from '../../../Helpers/NavLinkList'
import styles from './styles/ExpandedNavbar.module.css'
import AnimationWoman from './AnimationWoman'
import FoundingMemberBtn from './FoundingMemberBtn'

export type NavLinkListProps = {}

const NavLinkList: React.FC<NavLinkListProps> = () => {
	const NavLinks = getNavLinks()
	return (
		<div className={styles.listContainer}>
			<FoundingMemberBtn className={styles.memberBtn} />
			{NavLinks.map((NavLink, listIndex) => (
				<ul className={styles.list} key={`List-${listIndex}`}>
					<li className={styles.listTitle}>{NavLink.title}</li>
					{NavLink.list.map((Link, itemIndex) => (
						<li key={`item-${itemIndex}`} className={styles.listItem}>
							<a href={Link.URL}>{Link.text}</a>
						</li>
					))}
				</ul>
			))}
			<AnimationWoman />
		</div>
	)
}

export default NavLinkList
