import { Gallery } from '../@types/galleries'
import styles from '../styles/GalleryItem.module.scss'

function GalleryItem(props: { gallery: Gallery }) {
  const { gallery } = props
  function imageTypeHandler() {
    const file = gallery.images[0]
    if (file.type.includes('video')) {
      return (
        <iframe
          src={gallery.images[0].mp4}
          referrerPolicy="no-referrer"
          title={gallery.images[0].description}
          scrolling="no"
          className={styles['gallery-item__image']}
        />
      )
    }

    return (
      <img
        className={styles['gallery-item__image']}
        src={file.link}
        alt={file.description}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = 'no-image.jpg'
        }}
        referrerPolicy="no-referrer"
      />
    )
  }

  return (
    <li className={styles['gallery-item']} data-testid={gallery.id}>
      {gallery.images ? (
        imageTypeHandler()
      ) : (
        <img className={styles['gallery-item__image']} src="no-image.jpg" alt={gallery.title} />
      )}
      <div className={styles['gallery-item__description']}>
        <div className={styles['gallery-item__details']}>
          <h4>{gallery.title}</h4>
        </div>
        <a href={gallery.link} target="_blank" rel="noreferrer" className={styles['gallery-item__btn']}>
          See the original link
        </a>
        <div className={styles['gallery-item__infos']}>
          <div className={styles['gallery-item__icon-group']}>
            <img className={styles['gallery-item__icon']} src="like.png" alt="up votes in this gallery" />
            {gallery.ups}
          </div>
          <div className={styles['gallery-item__icon-group']}>
            <img className={styles['gallery-item__icon']} src="chat.png" alt="up votes in this gallery" />
            {gallery.comment_count}
          </div>
          <div className={styles['gallery-item__icon-group']}>
            <img className={styles['gallery-item__icon']} src="view.png" alt="up votes in this gallery" />
            {gallery.views}
          </div>
        </div>
      </div>
    </li>
  )
}

export default GalleryItem
