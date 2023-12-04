import { NavLinkList } from '../Navbar/Types/NavLinkListInterface'
export default function getNavLinks(): NavLinkList[] {
	const NavLinks: NavLinkList[] = [
		{
			title: 'ATLAS',
			list: [
				{ text: 'DINING', URL: '#dining' },
				{ text: 'TRAVEL', URL: '#' },
				{ text: 'CARD', URL: '#' },
				{ text: 'APP', URL: '#' },
				{ text: 'CONCIERGE', URL: '#' },
			],
		},
		{
			title: 'BENEFITS',
			list: [
				{ text: 'ATLAS BENEFITS', URL: '#' },
				{ text: 'VISA INFINITE', URL: '#' },
			],
		},
		{
			title: 'CONTACT',
			list: [
				{ text: 'EMAIL', URL: '#' },
				{ text: 'TWITTER', URL: '#' },
				{ text: 'INSTAGRAM', URL: '#' },
			],
		},
	]
	return NavLinks
}

export function getCompleteNavLinks(): NavLinkList[] {
	const NavLinks: NavLinkList[] = [
		{
			title: 'ATLAS',
			list: [
				{ text: 'DINING', URL: '#' },
				{ text: 'TRAVEL', URL: '#' },
				{ text: 'CARD', URL: '#' },
				{ text: 'APP', URL: '#' },
				{ text: 'CONCIERGE', URL: '#' },
			],
		},
		{
			title: 'BENEFITS',
			list: [
				{ text: 'ATLAS BENEFITS', URL: '#' },
				{ text: 'VISA INFINITE', URL: '#' },
			],
		},
		{
			title: 'CONTACT',
			list: [
				{ text: 'EMAIL', URL: '#' },
				{ text: 'TWITTER', URL: '#' },
				{ text: 'INSTAGRAM', URL: '#' },
			],
		},
		{
			title: 'LEGAL',
			list: [
				{ text: 'PRIVACY POLICY', URL: '#' },
				{ text: 'TERMS OF USE', URL: '#' },
				{ text: 'STATMENT DISCLOSURE', URL: '#' },
			],
		},
		{
			title: 'ABOUT',
			list: [{ text: 'MEDIA KIT', URL: '#' }],
		},
	]
	return NavLinks
}
