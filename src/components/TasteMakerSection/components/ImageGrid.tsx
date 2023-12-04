import { useInView } from 'framer-motion'
import ImageGridData, { ImageGridDataInterface } from '../helper/ImageGridData'
import styles from './styles/ImageGrid.module.css'
import { useRef } from 'react'
import { FadeUp } from '@/components/FadeUp'

export type ImageGridProps = {
	// types...
}

const ImageGrid: React.FC<ImageGridProps> = ({}) => {
	const ImageData = ImageGridData()
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	return (
		<div ref={ref}>
			<FadeUp
				className={styles.container}
				element='div'
				isInView={isInView}
				transition={{ duration: 1, delay: 0.5 }}
			>
				{ImageData.map((data, index) => (
					<ImageContainer {...data} key={index} />
				))}
			</FadeUp>
		</div>
	)
}

export default ImageGrid

const ImageContainer = (props: ImageGridDataInterface) => {
	return (
		<div className={styles.containerImage}>
			<picture>
				<source srcSet={props.srcset} media='(min-width: 990px)' />
				<img src={props.src} alt={props.alt} className={styles.image} />
			</picture>
			<p className={styles.description}>{props.text}</p>
		</div>
	)
}
