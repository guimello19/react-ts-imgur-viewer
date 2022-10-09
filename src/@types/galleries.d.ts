export interface GalleriesContextType {
  changeCurrentSection: (string) => void
  changeSort: (string) => void
  changePage: (string) => void
  changeWindow: (string) => void
  galleries: Gallery[]
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
      description: string
      link: string
      gifv: string
      views: number
      type: string
    }
  ]
}
