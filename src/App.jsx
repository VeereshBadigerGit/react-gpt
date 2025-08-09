import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import {
  Search,
  Plus,
  Bell,
  Smartphone,
  Sparkles,
  MoreHorizontal,
  Paperclip,
  Image,
  Mic,
  MessageSquare,
  BarChart3,
  FileText,
  Globe,
  Table,
  PieChart,
  Home,
  HelpCircle,
  Settings,
  User,
  Send,
  ChevronDown
} from 'lucide-react'
import './App.css'

function App() {
  const [selectedTask, setSelectedTask] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [isRecording, setIsRecording] = useState(false)

  const tasks = [
    {
      id: 1,
      title: "Manus UI Clone Using React",
      subtitle: "I will do the following: 1. Research Manus UI design and interface 2. Set up React project structure...",
      time: "00:02",
      active: true
    }
  ]

  const categories = [
    { name: "Recommend", active: true },
    { name: "Featured", active: false },
    { name: "Research", active: false },
    { name: "Data", active: false },
    { name: "Edu", active: false },
    { name: "Productivity", active: false },
    { name: "Programming", active: false }
  ]

  const suggestions = [
    {
      title: "Chemistry Experiment Demonstration Video",
      type: "Video",
      icon: FileText
    },
    {
      title: "High-Resolution Line Chart of Monthly Sales Trends",
      type: "PDF",
      icon: FileText
    },
    {
      title: "Incentives for Relocating to Texas",
      type: "Code",
      icon: FileText
    }
  ]

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      console.log('Sending message:', inputValue)
      setInputValue('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="dark min-h-screen bg-background text-foreground flex">
      {/* Sidebar */}
      <div className="w-80 bg-sidebar border-r border-sidebar-border flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>
              <span className="text-lg font-semibold">manus</span>
            </div>
          </div>

          <Button className="w-full justify-start gap-2 bg-sidebar-accent hover:bg-sidebar-accent/80 transition-colors">
            <span className="text-sm text-muted-foreground"><Plus className="w-4 h-4" /></span>
            <span className="text-sm text-muted-foreground">New task</span>
            <span className="ml-auto text-xs text-muted-foreground">⌘ K</span>
          </Button>
        </div>

        {/* Task Filters */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" className="bg-white text-black hover:bg-gray-100 transition-colors">
              All
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground transition-colors">
              Favorites
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground transition-colors">
              Scheduled
            </Button>
          </div>
        </div>

        {/* Tasks List */}
        <div className="flex-1 overflow-y-auto">
          {tasks.map((task, index) => (
            <div
              key={task.id}
              className={`p-4 border-b border-sidebar-border cursor-pointer hover:bg-sidebar-accent/50 transition-colors ${task.active ? 'bg-sidebar-accent' : ''
                }`}
              onClick={() => setSelectedTask(index)}
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mt-1">
                  <div className="w-6 h-6 bg-black rounded-full"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm mb-1 truncate">{task.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{task.subtitle}</p>
                  <span className="text-xs text-muted-foreground">{task.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="p-4 border-t border-sidebar-border">
          <div className="bg-sidebar-accent rounded-lg p-3 hover:bg-sidebar-accent/80 transition-colors cursor-pointer">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>
              <span className="text-sm font-medium">Share Manus with a friend</span>
            </div>
            <p className="text-xs text-muted-foreground mb-2">Get 500 credits each</p>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="p-4 border-t border-sidebar-border">
          <div className="flex justify-between">
            <Button variant="ghost" size="sm" className="p-2">
              <Home className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <HelpCircle className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Settings className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <FileText className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <User className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="p-4 border-b border-border flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-5 h-5 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
            <Input
              placeholder="Search..."
              className="pl-10 bg-muted/50 border-0 focus-visible:ring-1"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="p-1">
              <Bell className="w-4 h-4 text-muted-foreground" />
            </Button>
            <Button variant="ghost" size="sm" className="p-1">
              <Smartphone className="w-4 h-4 text-muted-foreground" />
            </Button>
            <span className="text-sm text-muted-foreground">App</span>
            <div className="flex items-center gap-1 text-sm">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              <span>1,782</span>
              <Button variant="outline" size="sm" className="text-xs px-2 py-1 bg-blue-600 text-white border-blue-600 hover:bg-blue-700">
                Upgrade
              </Button>
            </div>
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
              V
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <div className="max-w-2xl w-full text-center">
            <h1 className="text-4xl font-bold mb-2">Hello Veeresh Badiger</h1>
            <p className="text-xl text-muted-foreground mb-8">What can I do for you?</p>

            {/* Input Area */}
            <div className="relative mb-8">
              <div className="bg-card border border-border rounded-xl p-4 hover:border-border/80 transition-colors">
                <Input
                  placeholder="Assign a task or ask anything"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="border-0 bg-transparent text-lg placeholder:text-muted-foreground focus-visible:ring-0"
                />
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="hover:bg-accent transition-colors">
                      <Paperclip className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-accent transition-colors">
                      <Image className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-accent transition-colors">
                      <MessageSquare className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-accent transition-colors">
                      <BarChart3 className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <span>Speed</span>
                      <ChevronDown className="w-3 h-3" />
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`hover:bg-accent transition-colors ${isRecording ? 'text-red-500' : ''}`}
                      onClick={() => setIsRecording(!isRecording)}
                    >
                      <Mic className="w-4 h-4" />
                    </Button>
                    {inputValue.trim() && (
                      <Button
                        size="sm"
                        onClick={handleSendMessage}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              <Button variant="outline" className="gap-2 hover:bg-accent transition-colors">
                <Image className="w-4 h-4" />
                Image
              </Button>
              <Button variant="outline" className="gap-2 hover:bg-accent transition-colors">
                <FileText className="w-4 h-4" />
                Slides
              </Button>
              <Button variant="outline" className="gap-2 hover:bg-accent transition-colors">
                <Globe className="w-4 h-4" />
                Webpage
              </Button>
              <Button variant="outline" className="gap-2 hover:bg-accent transition-colors">
                <Table className="w-4 h-4" />
                Spreadsheet
                <span className="bg-green-500 text-white text-xs px-1 rounded ml-1">New</span>
              </Button>
              <Button variant="outline" className="gap-2 hover:bg-accent transition-colors">
                <PieChart className="w-4 h-4" />
                Visualization
              </Button>
              <Button variant="outline" className="gap-2 hover:bg-accent transition-colors">
                More
              </Button>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={category.active ? "default" : "outline"}
                  size="sm"
                  className={`transition-colors ${category.active
                      ? "bg-white text-black hover:bg-gray-100"
                      : "hover:bg-accent"
                    }`}
                >
                  {category.name}
                </Button>
              ))}
              <Button variant="outline" size="sm" className="hover:bg-accent transition-colors">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>

            {/* Suggestions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 hover:bg-accent/50 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  <h3 className="font-medium text-sm mb-2 text-left">{suggestion.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <suggestion.icon className="w-3 h-3" />
                    <span>{suggestion.type}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <p className="text-xs text-muted-foreground mt-8">
              All community content is voluntarily shared by users and will not be displayed without consent.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

