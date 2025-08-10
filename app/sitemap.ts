export default function sitemap() {
  const base = 'https://hookahplus.net'
  const now = new Date()
  return [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/thanks`, lastModified: now },
  ]
}
