import { Plus, Command, Star, Calendar, Share2, Gift } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Sidebar = () => {
  return (
    <div className="w-80 bg-sidebar border-r border-sidebar-border flex flex-col h-screen">
      {/* Header with Logo */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <span className="text-sidebar-foreground font-semibold text-lg">React GPT</span>
        </div>
        
        {/* New Task Button */}
        <Button className="w-full justify-start gap-2 bg-sidebar-accent hover:bg-sidebar-accent/80 text-sidebar-accent-foreground">
          <Plus size={16} />
          New task
          <div className="ml-auto flex items-center gap-1 text-xs opacity-60">
            <Command size={12} />
            <span>K</span>
          </div>
        </Button>
      </div>

      {/* Navigation Tabs */}
      <div className="px-4 py-2 border-b border-sidebar-border">
        <div className="flex gap-1">
          <Button variant="ghost" size="sm" className="text-sidebar-foreground hover:bg-sidebar-accent">
            All
          </Button>
          <Button variant="ghost" size="sm" className="text-sidebar-foreground/60 hover:bg-sidebar-accent">
            <Star size={14} className="mr-1" />
            Favorites
          </Button>
          <Button variant="ghost" size="sm" className="text-sidebar-foreground/60 hover:bg-sidebar-accent">
            <Calendar size={14} className="mr-1" />
            Scheduled
          </Button>
        </div>
      </div>

      {/* Task List */}
      <div className="flex-1 p-4">
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-sidebar-accent/50 border border-sidebar-border">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="flex-1">
              <div className="text-sm text-sidebar-foreground font-medium">
                First Query
              </div>
              <div className="text-xs text-sidebar-foreground/60">
                I will do the following: 1. Researc...
              </div>
            </div>
            <div className="text-xs text-sidebar-foreground/60">00:02</div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
          <Share2 size={16} className="text-blue-400" />
          <div className="flex-1">
            <div className="text-sm text-sidebar-foreground font-medium">
              Share ReactGPT with a friend
            </div>
            <div className="text-xs text-sidebar-foreground/60">
              Get 500 credits each
            </div>
          </div>
          <Gift size={16} className="text-blue-400" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar

