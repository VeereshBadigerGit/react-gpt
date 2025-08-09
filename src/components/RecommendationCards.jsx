import { Video, BarChart3, MapPin } from 'lucide-react'

const RecommendationCards = () => {
  const recommendations = [
    {
      title: "Chemistry Experiment Demonstration Video",
      type: "Video",
      icon: Video,
      gradient: "from-red-500/20 to-orange-500/20",
      iconColor: "text-red-400"
    },
    {
      title: "High-Resolution Line Chart of Monthly Sales Trends",
      type: "PDF",
      icon: BarChart3,
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400"
    },
    {
      title: "Incentives for Relocating to Texas",
      type: "Code",
      icon: MapPin,
      gradient: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {recommendations.map((rec, index) => {
        const IconComponent = rec.icon
        
        return (
          <div
            key={index}
            className={`bg-gradient-to-br ${rec.gradient} border border-border rounded-xl p-6 hover:border-border/60 transition-all cursor-pointer group`}
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg bg-card/50 ${rec.iconColor} group-hover:scale-110 transition-transform`}>
                <IconComponent size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-foreground font-medium text-sm leading-relaxed mb-2">
                  {rec.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                    {rec.type}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default RecommendationCards

