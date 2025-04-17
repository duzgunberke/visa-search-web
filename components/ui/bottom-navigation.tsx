"use client"

import { Search, Bell, MessageSquare, FolderClosed, Settings } from "lucide-react"
import { useTranslation } from "@/context/translation-provider"

interface BottomNavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  resetSearch: () => void
}

export default function BottomNavigation({ activeTab, setActiveTab, resetSearch }: BottomNavigationProps) {
  const { t } = useTranslation()

  return (
    <div className="flex justify-between items-center px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div
        className={`flex flex-col items-center ${
          activeTab === "appointments" ? "text-blue-500 dark:text-blue-400" : "text-gray-400 dark:text-gray-500"
        } cursor-pointer`}
        onClick={() => {
          setActiveTab("appointments")
          resetSearch()
        }}
      >
        <Search className="w-6 h-6" />
        <span className="text-xs mt-1">{t("search")}</span>
      </div>
      <div
        className={`flex flex-col items-center ${
          activeTab === "alarms" ? "text-blue-500 dark:text-blue-400" : "text-gray-400 dark:text-gray-500"
        } cursor-pointer`}
        onClick={() => setActiveTab("alarms")}
      >
        <Bell className="w-6 h-6" />
        <span className="text-xs mt-1">{t("alarms")}</span>
      </div>
      <div
        className={`flex flex-col items-center ${
          activeTab === "assistant" ? "text-blue-500 dark:text-blue-400" : "text-gray-400 dark:text-gray-500"
        } cursor-pointer`}
        onClick={() => setActiveTab("assistant")}
      >
        <MessageSquare className="w-6 h-6" />
        <span className="text-xs mt-1">{t("aiAssistant")}</span>
      </div>
      <div
        className={`flex flex-col items-center ${
          activeTab === "resources" ? "text-blue-500 dark:text-blue-400" : "text-gray-400 dark:text-gray-500"
        } cursor-pointer`}
        onClick={() => setActiveTab("resources")}
      >
        <FolderClosed className="w-6 h-6" />
        <span className="text-xs mt-1">{t("resources")}</span>
      </div>
      <div
        className={`flex flex-col items-center ${
          activeTab === "settings" ? "text-blue-500 dark:text-blue-400" : "text-gray-400 dark:text-gray-500"
        } cursor-pointer`}
        onClick={() => setActiveTab("settings")}
      >
        <Settings className="w-6 h-6" />
        <span className="text-xs mt-1">{t("settings")}</span>
      </div>
    </div>
  )
}
