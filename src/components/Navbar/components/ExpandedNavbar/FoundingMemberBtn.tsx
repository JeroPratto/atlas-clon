import styles from './styles/FoundingMemberBtn.module.css'

export type FoundingMemberBtnProps = {
	className?: CSSModuleClasses[string]
}

const FoundingMemberBtn: React.FC<FoundingMemberBtnProps> = ({ className }) => {
	return (
		<button className={`${styles.btn} ${className}`}>
			BECOME A FOUNDING MEMBER
		</button>
	)
}

export default FoundingMemberBtn
