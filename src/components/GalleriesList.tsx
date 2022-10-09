import { useGalleries } from '../hooks/useGalleries'
import DropdownMenu from './DropdownMenu'
import styles from '../styles/GalleriesList.module.scss'

function GalleriesList() {
  const { galleries } = useGalleries()

  function scrollToTop() {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <div className={styles.menu}>
        <DropdownMenu />
      </div>
      <section className={styles['galleries-list']}>
        {galleries.length ? (
          <ul>
            {galleries.map((gallery, key) => (
              <div key={gallery.id}>
                {gallery.title} {key}
              </div>
            ))}
          </ul>
        ) : (
          <div>
            <p> Results not found</p>
          </div>
        )}
      </section>
      <button type="button" className={styles['scroll-top']} onClick={() => scrollToTop()}>
        <img src="arrow-top.png" className={styles['scroll-top__image']} alt="scroll to top" />
      </button>
    </>
  )
}

export default GalleriesList
