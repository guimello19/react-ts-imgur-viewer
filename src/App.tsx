import GalleriesList from './components/GalleriesList'
import { GalleriesProvider } from './hooks/useGalleries'
import './styles/global.scss'

export default function App() {
  return (
    <GalleriesProvider>
      <GalleriesList />
    </GalleriesProvider>
  )
}
