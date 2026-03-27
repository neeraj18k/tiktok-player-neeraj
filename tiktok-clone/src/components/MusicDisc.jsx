export default function MusicDisc({ isPlaying, music }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`relative w-8 h-8 flex-shrink-0 ${isPlaying ? 'animate-spin-disc' : ''}`}>
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-700 via-zinc-900 to-zinc-700 border-2 border-zinc-600 shadow-lg" />
        <div className="absolute inset-[5px] rounded-full bg-gradient-to-br from-pink-500 via-rose-600 to-red-700" />
        <div className="absolute inset-[13px] rounded-full bg-white/90" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
      </div>
      <p className="text-white/80 text-xs font-medium truncate max-w-[120px] drop-shadow">
        ♪ {music}
      </p>
    </div>
  )
}