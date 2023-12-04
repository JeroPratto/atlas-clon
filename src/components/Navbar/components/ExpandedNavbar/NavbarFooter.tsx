import FoundingMemberBtn from './FoundingMemberBtn'
import styles from './styles/NavbarFooter.module.css'

export default function NavbarFooter() {
	return (
		<div className={styles.container}>
			<p className={styles.copy}>2023 @ ATLAS EXPLORATION, INC.</p>
			<FoundingMemberBtn className={styles.memberBtn} />
		</div>
	)
}
