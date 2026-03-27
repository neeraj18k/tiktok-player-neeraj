export default function SkeletonCard() {
  return (
    <div className="video-card bg-black flex items-end pb-20 px-4">
      <div className="w-full">
        <div className="flex items-center gap-3 mb-3">
          <div className="skeleton w-10 h-10 rounded-full" />
          <div className="space-y-2">
            <div className="skeleton w-28 h-3 rounded-full" />
            <div className="skeleton w-20 h-3 rounded-full" />
          </div>
        </div>
        <div className="space-y-2 mb-4">
          <div className="skeleton w-full h-3 rounded-full" />
          <div className="skeleton w-3/4 h-3 rounded-full" />
        </div>
        <div className="skeleton w-full h-1 rounded-full" />
      </div>
    </div>
  )
}