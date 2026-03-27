// src/data/videoData.js

export const videos = [
  {
    id: 1,
    url: '/videos/video1.mp4',
    user: { name: 'nature_vibes', avatar: 'https://i.pravatar.cc/150?img=1', verified: true },
    description: 'Golden blooms swaying in the breeze 🌼✨ Nature at its most magical — pure therapy for the soul #nature #flowers #peaceful #aesthetic',
    likes: 284700, comments: 4821, shares: 9300, bookmarks: 12400,
    music: 'Original Sound — nature_vibes',
    following: false, liked: false, bookmarked: false,
  },
  {
    id: 2,
    url: '/videos/video2.mp4',
    user: { name: 'ocean_dreams', avatar: 'https://i.pravatar.cc/150?img=2', verified: true },
    description: 'Ocean waves that heal the soul 🌊💙 Turn the sound on and just breathe #ocean #waves #chill #vibes #peace',
    likes: 193200, comments: 3140, shares: 7650, bookmarks: 8900,
    music: 'Ocean Breeze — ocean_dreams',
    following: false, liked: false, bookmarked: false,
  },
  {
    id: 3,
    url: '/videos/video3.mp4',
    user: { name: 'city_pulse', avatar: 'https://i.pravatar.cc/150?img=3', verified: false },
    description: 'City never sleeps 🌆🚗 Aerial night traffic looks like liquid gold flowing through the streets #city #night #urban #cinematic',
    likes: 421500, comments: 8762, shares: 23400, bookmarks: 19800,
    music: 'Night Drive — city_pulse',
    following: false, liked: false, bookmarked: false,
  },
  {
    id: 4,
    url: '/videos/video4.mp4',
    user: { name: 'wanderlust_forever', avatar: 'https://i.pravatar.cc/150?img=4', verified: true },
    description: 'Getting away from it all 🌿 This is what peace looks like. Save this for when you need a reset #travel #nature #escape #mindfulness',
    likes: 89300, comments: 1560, shares: 4200, bookmarks: 6700,
    music: 'Escape Route — wanderlust_forever',
    following: false, liked: false, bookmarked: false,
  },
  {
    id: 5,
    url: '/videos/video5.mp4',
    user: { name: 'lifestyle_log', avatar: 'https://i.pravatar.cc/150?img=5', verified: false },
    description: 'Living life one frame at a time 📸✨ Every moment is worth capturing #lifestyle #aesthetic #daily #mood #viral',
    likes: 156800, comments: 2890, shares: 11200, bookmarks: 9400,
    music: 'Chill Lofi — lifestyle_log',
    following: false, liked: false, bookmarked: false,
  },
  {
    id: 6,
    url: '/videos/video6.mp4',
    user: { name: 'creative_hub', avatar: 'https://i.pravatar.cc/150?img=6', verified: true },
    description: 'Creativity has no limits 🎨🔥 This took 30 days to make. Drop a ❤️ if you appreciate the effort! #creative #art #design #viral',
    likes: 312000, comments: 6430, shares: 18700, bookmarks: 22100,
    music: 'Creative Vibes — creative_hub',
    following: false, liked: false, bookmarked: false,
  },
]

export const formatCount = (n) => {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M'
  if (n >= 1_000) return (n / 1_000).toFixed(1) + 'K'
  return n.toString()
}
