export const fetchAPI = async (url) => {
  const response = await fetch(url)
  const payload = await response.json()
  return payload
}