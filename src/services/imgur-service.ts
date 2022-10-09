async function fetchImgur(currentSection: string, sort: string, page: number, window: string) {
  const data = await fetch(`https://api.imgur.com/3/gallery/${currentSection}/${sort}/${window}/${page}`, {
    method: 'GET',
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
    },
  })
  const response = await data.json()
  return response
}

export default { fetchImgur }
