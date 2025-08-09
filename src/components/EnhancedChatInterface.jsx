import { useState } from 'react'
import { Paperclip, Image, MessageSquare, Mic, ChevronDown, Send } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const EnhancedChatInterface = () => {
  const [inputValue, setInputValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        {/* Greeting Section */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-light text-foreground mb-3 animate-in fade-in duration-1000">
            Hello Veeresh Badiger
          </h1>
          <p className="text-xl text-muted-foreground animate-in fade-in duration-1000 delay-200">
            What can I do for you?
          </p>
        </div>
        
        {/* Main Input Area */}
        <div className="relative mb-6 animate-in fade-in duration-1000 delay-400">
          <div className={`bg-card border rounded-2xl p-4 shadow-lg transition-all duration-300 ${
            isFocused ? 'border-primary/50 shadow-xl' : 'border-border hover:border-border/60'
          }`}>
            <div className="flex items-center gap-3">
              {/* Attachment Icons */}
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="p-2 h-8 w-8 hover:bg-accent/50 transition-colors"
                >
                  <Paperclip size={16} className="text-muted-foreground hover:text-foreground transition-colors" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="p-2 h-8 w-8 hover:bg-accent/50 transition-colors"
                >
                  <Image size={16} className="text-muted-foreground hover:text-foreground transition-colors" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="p-2 h-8 w-8 hover:bg-accent/50 transition-colors"
                >
                  <MessageSquare size={16} className="text-muted-foreground hover:text-foreground transition-colors" />
                </Button>
              </div>
              
              {/* Input Field */}
              <input
                type="text"
                placeholder="Assign a task or ask anything"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-lg transition-all duration-200"
              />
              
              {/* Right Side Controls */}
              <div className="flex items-center gap-3">
                {/* Speed Selector */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="gap-1 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all"
                >
                  Speed
                  <ChevronDown size={14} />
                </Button>
                
                {/* Voice Input */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="p-2 h-8 w-8 hover:bg-accent/50 transition-colors"
                >
                  <Mic size={16} className="text-muted-foreground hover:text-foreground transition-colors" />
                </Button>
                
                {/* Send Button (appears when typing) */}
                {inputValue && (
                  <Button 
                    size="sm" 
                    className="p-2 h-8 w-8 bg-primary hover:bg-primary/90 transition-all animate-in fade-in duration-200"
                  >
                    <Send size={14} />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnhancedChatInterface

