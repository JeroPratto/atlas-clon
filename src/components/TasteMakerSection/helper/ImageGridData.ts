export interface ImageGridDataInterface {
	srcset: string
	src: string
	alt: string
	text: string
}
const ImageGridData = (): ImageGridDataInterface[] => {
	const data: ImageGridDataInterface[] = [
		{
			srcset: '/ig-1-desk.jpg',
			src: '/ig-1-mobile.jpg',
			alt: 'Horses Restaurant Table',
			text: 'HORSES, LA, ON ATLAS SUPPER CLUB.',
		},
		{
			srcset: '/ig-2-desk.jpg',
			src: '/ig-2-mobile.jpg',
			alt: 'Felix Trattoria dining room view',
			text: 'FELIX TRATTORIA, LA, ON ATLAS SUPPER CLUB.',
		},
		{
			srcset: '/ig-3-desk.jpg',
			src: '/ig-3-desk.jpg',
			alt: 'Cucina Alba restaurant view',
			text: 'CUCINA ALBA, NYC, ON ATLAS SUPPER CLUB.',
		},
	]
	return data
}
export default ImageGridData
