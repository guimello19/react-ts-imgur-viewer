import React, { createContext, useEffect, useState, useContext, useMemo, PropsWithChildren, useCallback } from 'react'
import { Gallery, GalleriesContextType } from '../@types/galleries'
import ImgurService from '../services/imgur-service'

const GalleryContext = createContext({})

const GalleriesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [currentSection, setCurrentSection] = useState<string>('hot')
  const [sort, setSort] = useState<string>('viral')
  const [page, setPage] = useState<number>(0)
  const [window, setWindow] = useState<string>('day')
  const [galleries, setGalleries] = useState<Gallery[]>([])

  useEffect(() => {
    try {
      ImgurService.fetchImgur(currentSection, sort, page, window).then((response: any) => {
        setGalleries(response.data)
      })
    } catch {
      throw new Error('Page Not Found 404')
    }
  }, [currentSection, sort, page, window])

  const changeCurrentSection = useCallback(
    (section: string) => {
      setCurrentSection(section)
      setPage(0)
    },
    [setCurrentSection]
  )

  const changeWindow = useCallback(
    (value: string) => {
      setWindow(value)
      setPage(0)
    },
    [setWindow]
  )

  const changePage = useCallback(
    (value: number) => {
      setPage(value)
    },
    [setPage]
  )

  const changeSort = useCallback(
    (value: string) => {
      setSort(value)
      setPage(0)
    },
    [setSort]
  )

  const providerValues = useMemo(
    () => ({
      changeCurrentSection,
      changeSort,
      changePage,
      changeWindow,
      galleries,
    }),
    [changeCurrentSection, changeSort, changePage, changeWindow, galleries]
  )

  return <GalleryContext.Provider value={providerValues}>{children}</GalleryContext.Provider>
}

const useGalleries = () => {
  const context = useContext(GalleryContext) as GalleriesContextType

  return context
}

export { GalleriesProvider, useGalleries }
