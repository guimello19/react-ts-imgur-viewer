import { useGalleries } from '../hooks/useGalleries'
import DropdownMenu from './DropdownMenu'
import GalleryItem from './GalleryItem'
import styles from '../styles/GalleriesList.module.scss'

function GalleriesList() {
  const { galleries, page, changePage } = useGalleries()

  function scrollToTop() {
    window.scrollTo(0, 0)
  }

  function updatePage(value: number) {
    changePage(value)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <div className={styles.menu}>
        <DropdownMenu />
      </div>
      <section data-testid="gallery-section">
        {galleries.length ? (
          <ul className={styles['galleries-list']}>
            {galleries.map((item) => (
              <GalleryItem key={item.id} gallery={item} />
            ))}
          </ul>
        ) : (
          <div>
            <p> Results not found</p>
          </div>
        )}
      </section>
      <div className={styles.pagination}>
        <button type="button" className={styles.pagination__btn} onClick={() => updatePage(page - 1)}>
          Previous
        </button>
        <button type="button" className={styles.pagination__btn} onClick={() => updatePage(page + 1)}>
          Next
        </button>
      </div>
      <button type="button" className={styles['scroll-top']} onClick={() => scrollToTop()}>
        <img src="arrow-top.png" className={styles['scroll-top__image']} alt="scroll to top" />
      </button>
    </>
  )
}

export default GalleriesList
