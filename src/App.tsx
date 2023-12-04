import './App.css'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { TasteMakerSection } from './components/TasteMakerSection'

function App() {
	return (
		<div className='container'>
			<Navbar />
			<Hero />
			<TasteMakerSection />
			<Footer />
		</div>
	)
}

export default App
