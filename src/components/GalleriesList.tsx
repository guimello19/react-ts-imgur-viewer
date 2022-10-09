import { useGalleries } from '../hooks/useGalleries'

function GalleriesList() {
  const { galleries } = useGalleries()
  return (
    <div>
      <ul>
        {galleries.map((gallery, key) => (
          <div key={gallery.id}>
            {gallery.title} {key}
          </div>
        ))}
      </ul>
    </div>
  )
}

export default GalleriesList
