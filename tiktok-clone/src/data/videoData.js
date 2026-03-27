// src/data/videoData.js

export const videos = [
  {
    id: 1,
    url: 'https://cdn.coverr.co/videos/coverr-mountain-sunrise-1606/1080p.mp4',
    user: { name: 'nature_vibes', avatar: 'https://i.pravatar.cc/150?img=11', verified: true },
    description: 'Peaceful mountain sunrise 🌄 #nature #calm #sunrise',
    likes: 284700, comments: 4821, shares: 9300, bookmarks: 12400,
    music: 'Original Sound — nature_vibes',
    following: false, liked: false, bookmarked: false,
  },
  {
    id: 2,
    url: 'https://cdn.coverr.co/videos/coverr-ocean-waves-1564/1080p.mp4',
    user: { name: 'ocean_dreams', avatar: 'https://i.pravatar.cc/150?img=12', verified: true },
    description: 'Relaxing ocean waves 🌊 #ocean #chill #peace',
    likes: 193200, comments: 3140, shares: 7650, bookmarks: 8900,
    music: 'Ocean Breeze — ocean_dreams',
    following: false, liked: false, bookmarked: false,
  },
  {
    id: 3,
    url: 'https://cdn.coverr.co/videos/coverr-city-traffic-1573/1080p.mp4',
    user: { name: 'city_pulse', avatar: 'https://i.pravatar.cc/150?img=13', verified: false },
    description: 'City vibes at night 🌆 #city #aesthetic #urban',
    likes: 421500, comments: 8762, shares: 23400, bookmarks: 19800,
    music: 'Night Drive — city_pulse',
    following: false, liked: false, bookmarked: false,
  },
  {
    id: 4,
    url: 'https://cdn.coverr.co/videos/coverr-forest-stream-1570/1080p.mp4',
    user: { name: 'wanderlust_forever', avatar: 'https://i.pravatar.cc/150?img=14', verified: true },
    description: 'Forest stream relaxation 🌿 #nature #escape #mindfulness',
    likes: 89300, comments: 1560, shares: 4200, bookmarks: 6700,
    music: 'Escape Route — wanderlust_forever',
    following: false, liked: false, bookmarked: false,
  },
  {
    id: 5,
    url: 'https://cdn.coverr.co/videos/coverr-coffee-pouring-1575/1080p.mp4',
    user: { name: 'lifestyle_log', avatar: 'https://i.pravatar.cc/150?img=15', verified: false },
    description: 'Coffee slow motion ☕ #lifestyle #aesthetic #daily',
    likes: 156800, comments: 2890, shares: 11200, bookmarks: 9400,
    music: 'Chill Lofi — lifestyle_log',
    following: false, liked: false, bookmarked: false,
  },
  {
    id: 6,
    url: 'https://cdn.coverr.co/videos/coverr-creative-workspace-1568/1080p.mp4',
    user: { name: 'creative_hub', avatar: 'https://i.pravatar.cc/150?img=16', verified: true },
    description: 'Creative desk setup 🎨 #creative #workspace #design',
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