export interface GalleriesContextType {
  changeCurrentSection: (string) => void
  changeSort: (string) => void
  changePage: (string) => void
  changeWindow: (string) => void
  galleries: Gallery[]
  page: number
}

export interface Gallery {
  id: number
  comment_count: number
  link: string
  title: string
  ups: number
  views: number
  images: [
    {
      id: number
      description: string
      link: string
      type: string
      mp4: string
    }
  ]
}
