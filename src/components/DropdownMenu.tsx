import { useGalleries } from '../hooks/useGalleries'
import styles from '../styles/DropdownMenu.module.scss'

function DropdownMenu() {
  const { changeCurrentSection, changeSort, changeWindow } = useGalleries()

  return (
    <>
      <div className={styles.dropdown}>
        <button type="button" className={styles.dropdown__btn}>
          Section
        </button>
        <div className={styles.content}>
          <button
            type="button"
            className={styles.content__btn}
            onClick={() => changeCurrentSection('hot')}
            data-testid="section-hot"
          >
            Hot
          </button>
          <button type="button" className={styles.content__btn} onClick={() => changeCurrentSection('top')}>
            Top
          </button>
          <button type="button" className={styles.content__btn} onClick={() => changeCurrentSection('user')}>
            User
          </button>
        </div>
      </div>
      <div className={styles.dropdown}>
        <button type="button" className={styles.dropdown__btn}>
          Sort
        </button>
        <div className={styles.content}>
          <button
            type="button"
            className={styles.content__btn}
            onClick={() => changeSort('viral')}
            data-testid="sort-by-viral"
          >
            Hot
          </button>
          <button type="button" className={styles.content__btn} onClick={() => changeSort('top')}>
            Top
          </button>
          <button type="button" className={styles.content__btn} onClick={() => changeSort('time')}>
            Time
          </button>
        </div>
      </div>
      <div className={styles.dropdown}>
        <button type="button" className={styles.dropdown__btn}>
          Section
        </button>
        <div className={styles.content}>
          <button type="button" className={styles.content__btn} onClick={() => changeWindow('Day')}>
            Day
          </button>
          <button type="button" className={styles.content__btn} onClick={() => changeWindow('Week')}>
            Week
          </button>
          <button type="button" className={styles.content__btn} onClick={() => changeWindow('Month')}>
            Month
          </button>
          <button type="button" className={styles.content__btn} onClick={() => changeWindow('Year')}>
            Year
          </button>
          <button type="button" className={styles.content__btn} onClick={() => changeWindow('All')}>
            All
          </button>
        </div>
      </div>
    </>
  )
}

export default DropdownMenu
