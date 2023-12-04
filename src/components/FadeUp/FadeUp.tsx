import { AnimationProps, motion } from 'framer-motion'
import React, { ReactNode } from 'react'

type MotionElement = keyof typeof motion

export type FadeUpProps = {
	initial?: AnimationProps['initial']
	animate?: AnimationProps['animate']
	transition?: AnimationProps['transition']
	element: MotionElement
	children: ReactNode
	className?: CSSModuleClasses[string]
	isInView?: boolean
}

const FadeUp: React.FC<FadeUpProps> = ({
	initial,
	animate,
	transition,
	element,
	children,
	className,
	isInView = true,
}) => {
	if (!initial) initial = { opacity: 0, translateY: 50 }
	if (!animate) {
		animate = {
			opacity: 1,
			translateY: 0,
		}
	}
	if (!transition) transition = { duration: 1, delay: 3 }
	const MotionComponent = motion[element] || motion.div
	return (
		<MotionComponent
			initial={initial}
			animate={isInView ? animate : ''}
			transition={transition}
			className={className}
		>
			{children}
		</MotionComponent>
	)
}

export default FadeUp
