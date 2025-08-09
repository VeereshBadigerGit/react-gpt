import { Image, Presentation, Globe, FileSpreadsheet, BarChart3, MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const TaskButtons = () => {
  const taskTypes = [
    { icon: Image, label: 'Image', color: 'text-blue-400' },
    { icon: Presentation, label: 'Slides', color: 'text-green-400' },
    { icon: Globe, label: 'Webpage', color: 'text-purple-400' },
    { icon: FileSpreadsheet, label: 'Spreadsheet', badge: 'New', color: 'text-orange-400' },
    { icon: BarChart3, label: 'Visualization', color: 'text-pink-400' },
    { icon: MoreHorizontal, label: 'More', color: 'text-gray-400' }
  ]

  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      {taskTypes.map((task, index) => {
        const IconComponent = task.icon
        return (
          <Button
            key={index}
            variant="ghost"
            className="flex flex-col items-center gap-2 p-4 h-auto hover:bg-accent/50 relative"
          >
            <div className={`p-3 rounded-xl bg-card border border-border ${task.color}`}>
              <IconComponent size={20} />
            </div>
            <span className="text-sm text-foreground">{task.label}</span>
            {task.badge && (
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {task.badge}
              </span>
            )}
          </Button>
        )
      })}
    </div>
  )
}

export default TaskButtons

