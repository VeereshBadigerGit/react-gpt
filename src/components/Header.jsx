import { Bell, Smartphone, CreditCard, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-border">
      <div className="flex-1"></div>
      
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <Button variant="ghost" size="sm" className="relative">
          <Bell size={18} />
        </Button>
        
        {/* App Button */}
        <Button variant="ghost" size="sm" className="gap-2">
          <Smartphone size={18} />
          App
        </Button>
        
        {/* Credits */}
        <Button variant="ghost" size="sm" className="gap-2">
          <CreditCard size={18} />
          1,782
          <span className="text-blue-400">Upgrade</span>
        </Button>
        
        {/* User Avatar */}
        <Button variant="ghost" size="sm" className="gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-medium text-sm">V</span>
          </div>
          <ChevronDown size={16} />
        </Button>
      </div>
    </header>
  )
}

export default Header

