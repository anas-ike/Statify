const fetchEndPoint = async (accessToken, endPoint) => {
  if (!accessToken) return null

  const response = await fetch(endPoint, {
    headers: {
      Authorization: 'Bearer ' + accessToken,
    },
  })

  if (!response.ok) {
    console.error("Spotify API Error:", response.status, endPoint)
    return null
  }

  return await response.json()
}

export default fetchEndPoint
