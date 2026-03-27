// src/data/videoData.js

export const videos = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/dzwfultjf/video/upload/v1774639388/video3_xanqif.mp4',
    user: { name: 'nature_vibes', avatar: 'https://i.pravatar.cc/150?img=1', verified: true },
    description: 'Elevator rides hit different when the vibe is right. ✨',
    likes: 284700, comments: 4821, shares: 9300, bookmarks: 12400,
    music: 'Original Sound — nature_vibes',
    following: false, liked: false, bookmarked: false,
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/dzwfultjf/video/upload/v1774639365/video1_k314ur.mp4',
    user: { name: 'ocean_dreams', avatar: 'https://i.pravatar.cc/150?img=2', verified: true },
    description: 'Tonight we burn the past, tomorrow we celebrate colors 🎨🔥',
    likes: 193200, comments: 3140, shares: 7650, bookmarks: 8900,
    music: 'Ocean Breeze — ocean_dreams',
    following: false, liked: false, bookmarked: false,
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/dzwfultjf/video/upload/v1774639357/video6_khm6jt.mp4',
    user: { name: 'city_pulse', avatar: 'https://i.pravatar.cc/150?img=3', verified: false },
    description: 'Through the lens, every moment becomes timeless.” 🎥',
    likes: 421500, comments: 8762, shares: 23400, bookmarks: 19800,
    music: 'Night Drive — city_pulse',
    following: false, liked: false, bookmarked: false,
  },
  {
  id: 4,
  url: 'https://res.cloudinary.com/dzwfultjf/video/upload/v1774639330/video5_qykzin.mp4',
  user: { name: 'wanderlust_forever', avatar: 'https://i.pravatar.cc/150?img=4', verified: true },
  description: `Pressure makes diamonds, and he proves it every time. 💎
That’s why they call him King.`,
  likes: 89300, comments: 1560, shares: 4200, bookmarks: 6700,
  music: 'Escape Route — wanderlust_forever',
  following: false, liked: false, bookmarked: false,
},
  {
    id: 5,
    url: 'https://res.cloudinary.com/dzwfultjf/video/upload/v1774639323/video2_g9rnka.mp4',
    user: { name: 'lifestyle_log', avatar: 'https://i.pravatar.cc/150?img=5', verified: false },
    description: 'Like flowers, we rise and bloom in our own time. 💫🌼',
    likes: 156800, comments: 2890, shares: 11200, bookmarks: 9400,
    music: 'Chill Lofi — lifestyle_log',
    following: false, liked: false, bookmarked: false,
  },
  {
    id: 6,
    url: 'https://res.cloudinary.com/dzwfultjf/video/upload/v1774639345/video4_stop0w.mp4',
    user: { name: 'creative_hub', avatar: 'https://i.pravatar.cc/150?img=6', verified: true },
    description: 'The ocean speaks in waves, and I’m listening. 💙🌊',
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
