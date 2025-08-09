import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { RefreshCw } from 'lucide-react'

const RecommendationFilters = () => {
  const [activeFilter, setActiveFilter] = useState('Recommend')
  
  const filters = [
    { label: 'Recommend', icon: RefreshCw },
    { label: 'Featured' },
    { label: 'Research' },
    { label: 'Data' },
    { label: 'Edu' },
    { label: 'Productivity' },
    { label: 'Programming' }
  ]

  return (
    <div className="flex items-center gap-2 mb-6">
      {filters.map((filter, index) => {
        const IconComponent = filter.icon
        const isActive = activeFilter === filter.label
        
        return (
          <Button
            key={index}
            variant={isActive ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveFilter(filter.label)}
            className={`gap-2 ${
              isActive 
                ? 'bg-primary text-primary-foreground' 
                : 'text-muted-foreground hover:text-foreground hover:bg-accent'
            }`}
          >
            {IconComponent && <IconComponent size={14} />}
            {filter.label}
          </Button>
        )
      })}
    </div>
  )
}

export default RecommendationFilters

