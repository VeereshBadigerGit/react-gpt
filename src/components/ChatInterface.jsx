import { useState } from 'react'
import { Paperclip, Image, MessageSquare, Mic, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const ChatInterface = () => {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        {/* Greeting Section */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-light text-foreground mb-3">
            Hello Veeresh Badiger
          </h1>
          <p className="text-xl text-muted-foreground">
            What can I do for you?
          </p>
        </div>
        
        {/* Main Input Area */}
        <div className="relative mb-6">
          <div className="bg-card border border-border rounded-2xl p-4 shadow-lg">
            <div className="flex items-center gap-3">
              {/* Attachment Icons */}
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
                  <Paperclip size={16} className="text-muted-foreground" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
                  <Image size={16} className="text-muted-foreground" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
                  <MessageSquare size={16} className="text-muted-foreground" />
                </Button>
              </div>
              
              {/* Input Field */}
              <input
                type="text"
                placeholder="Assign a task or ask anything"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-lg"
              />
              
              {/* Right Side Controls */}
              <div className="flex items-center gap-3">
                {/* Speed Selector */}
                <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground hover:text-foreground">
                  Speed
                  <ChevronDown size={14} />
                </Button>
                
                {/* Voice Input */}
                <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
                  <Mic size={16} className="text-muted-foreground" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatInterface

