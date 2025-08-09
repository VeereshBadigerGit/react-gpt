import Layout from './components/Layout'
import Header from './components/Header'
import EnhancedChatInterface from './components/EnhancedChatInterface'
import TaskButtons from './components/TaskButtons'
import RecommendationFilters from './components/RecommendationFilters'
import RecommendationCards from './components/RecommendationCards'
import './App.css'

function App() {
  return (
    <div className="dark min-h-screen">
      <Layout>
        <Header />
        <EnhancedChatInterface />
        <div className="px-4 sm:px-8 pb-8">
          <div className="max-w-6xl mx-auto">
            <TaskButtons />
            
            {/* Recommendation Section */}
            <div className="space-y-6">
              <RecommendationFilters />
              <RecommendationCards />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default App

