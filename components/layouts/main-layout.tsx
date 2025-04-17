"use client"
import { useState, useRef } from "react"
import Header from "@/components/ui/header"
import BottomNavigation from "@/components/ui/bottom-navigation"
import AppointmentsTab from "@/components/tabs/appointments-tab"
import AlarmsTab from "@/components/tabs/alarms-tab"
import AIAssistantTab from "@/components/tabs/ai-assistant-tab"
import ResourcesTab from "@/components/tabs/resources-tab"
import SettingsTab from "@/components/tabs/settings-tab"
import SearchResults from "@/components/search/search-results"
import { AnimatePresence, motion } from "framer-motion"
import { Plane, Bell, MessageSquare, FolderClosed, Settings } from "lucide-react"

export default function MainLayout() {
  const [activeTab, setActiveTab] = useState("appointments")
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [previousTab, setPreviousTab] = useState("appointments")
  const animationRef = useRef(null)

  const handleSearch = () => {
    setShowSearchResults(true)
  }

  const handleTabChange = (tab: string) => {
    setPreviousTab(activeTab)
    setActiveTab(tab)
  }

  const getTabIcon = (tab: string) => {
    switch (tab) {
      case "appointments":
        return <Plane className="text-blue-500 w-10 h-10" />
      case "alarms":
        return <Bell className="text-blue-500 w-10 h-10" />
      case "assistant":
        return <MessageSquare className="text-blue-500 w-10 h-10" />
      case "resources":
        return <FolderClosed className="text-blue-500 w-10 h-10" />
      case "settings":
        return <Settings className="text-blue-500 w-10 h-10" />
      default:
        return <Plane className="text-blue-500 w-10 h-10" />
    }
  }

  const getAnimationPath = (from: string, to: string) => {
    // Define different animation paths based on tab transitions
    if (from === "appointments" && to === "alarms") {
      return [
        { x: 0, y: 0 },
        { x: 100, y: -100 },
        { x: 200, y: -50 },
        { x: 300, y: 0 },
      ]
    } else if (from === "alarms" && to === "appointments") {
      return [
        { x: 0, y: 0 },
        { x: -100, y: -100 },
        { x: -200, y: -50 },
        { x: -300, y: 0 },
      ]
    } else if (from === "appointments" && to === "assistant") {
      return [
        { x: 0, y: 0 },
        { x: 100, y: -150 },
        { x: 200, y: -100 },
        { x: 300, y: 0 },
      ]
    } else {
      // Default animation path
      return [
        { x: 0, y: 0 },
        { x: to === "appointments" ? -150 : 150, y: -100 },
        { x: to === "appointments" ? -300 : 300, y: 0 },
      ]
    }
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "appointments":
        return showSearchResults ? <SearchResults /> : <AppointmentsTab onSearch={handleSearch} />
      case "alarms":
        return <AlarmsTab />
      case "assistant":
        return <AIAssistantTab />
      case "resources":
        return <ResourcesTab />
      case "settings":
        return <SettingsTab />
      default:
        return <AppointmentsTab onSearch={handleSearch} />
    }
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 font-sans text-gray-800 dark:text-gray-200 overflow-hidden">
      <Header activeTab={activeTab} />

      <div className="flex-1 overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: activeTab === previousTab ? 0 : activeTab === "appointments" ? -300 : 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: activeTab === "appointments" ? 300 : -300 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full overflow-auto"
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>

        {/* Flying animation between tabs */}
        <AnimatePresence>
          {activeTab !== previousTab && (
            <motion.div
              key={`${previousTab}-to-${activeTab}`}
              initial={{ opacity: 1, x: 0, y: 0 }}
              animate={{
                opacity: [1, 1, 1, 0],
                x: getAnimationPath(previousTab, activeTab).map((point) => point.x),
                y: getAnimationPath(previousTab, activeTab).map((point) => point.y),
                rotate: previousTab === "appointments" || activeTab === "appointments" ? [0, 15, 30, 45] : [0, 0, 0, 0],
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
              ref={animationRef}
            >
              {getTabIcon(activeTab)}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <BottomNavigation
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        resetSearch={() => setShowSearchResults(false)}
      />

      {/* iPhone Home Indicator */}
      <div className="h-1 w-1/3 bg-black dark:bg-white mx-auto rounded-full mb-1 mt-2 opacity-20"></div>
    </div>
  )
}
