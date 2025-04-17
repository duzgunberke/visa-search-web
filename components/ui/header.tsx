import { Search, Info, Bell, FolderClosed, Settings, Plus, MessageSquare } from "lucide-react"
import { useTranslation } from "@/context/translation-provider"

interface HeaderProps {
  activeTab: string
}

export default function Header({ activeTab }: HeaderProps) {
  const { t } = useTranslation()

  const renderIcon = () => {
    switch (activeTab) {
      case "appointments":
        return <Search className="text-white w-5 h-5" />
      case "alarms":
        return <Bell className="text-white w-5 h-5" />
      case "assistant":
        return <MessageSquare className="text-white w-5 h-5" />
      case "resources":
        return <FolderClosed className="text-white w-5 h-5" />
      case "settings":
        return <Settings className="text-white w-5 h-5" />
      default:
        return <Search className="text-white w-5 h-5" />
    }
  }

  const renderTitle = () => {
    switch (activeTab) {
      case "appointments":
        return t("appointmentSearch")
      case "alarms":
        return t("myAlarms")
      case "assistant":
        return t("aiAssistant")
      case "resources":
        return t("resources")
      case "settings":
        return t("settings")
      default:
        return t("appointmentSearch")
    }
  }

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 shadow-sm">
      <div className="flex items-center">
        <div className="bg-blue-500 dark:bg-blue-600 rounded-full p-3 mr-3">{renderIcon()}</div>
        <div className="text-2xl font-semibold text-gray-700 dark:text-gray-200 flex items-center">
          {renderTitle()}
          {activeTab !== "settings" && <Plus className="text-blue-500 dark:text-blue-400 ml-1 w-6 h-6" />}
        </div>
      </div>
      {activeTab === "appointments" && (
        <div className="bg-blue-500 dark:bg-blue-600 rounded-full p-1.5">
          <Info className="text-white w-5 h-5" />
        </div>
      )}
    </div>
  )
}
