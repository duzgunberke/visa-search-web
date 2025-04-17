"use client"
import { useState, useEffect } from "react"
import { User, Globe, Bell, Moon, HelpCircle, LogOut } from "lucide-react"
import { useTheme } from "next-themes"
import { useTranslation } from "@/context/translation-provider"
import { ChevronDown } from "lucide-react"

export default function SettingsTab() {
  const { theme, setTheme } = useTheme()
  const { t, language, setLanguage, availableLanguages } = useTranslation()
  const [mounted, setMounted] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true)
    if (theme === "dark") {
      setDarkMode(true)
    }
  }, [theme])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    setTheme(darkMode ? "light" : "dark")
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">{t("settings")}</h2>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm mb-5">
        <div className="flex items-center mb-5">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
            <User className="text-blue-500 dark:text-blue-400 w-6 h-6" />
          </div>
          <div>
            <div className="font-medium text-lg dark:text-white">Ahmet Yılmaz</div>
            <div className="text-gray-500 dark:text-gray-400">ahmet.yilmaz@email.com</div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 relative">
            <div className="flex items-center">
              <Globe className="text-gray-500 dark:text-gray-400 w-5 h-5 mr-3" />
              <span className="dark:text-white">{t("language")}</span>
            </div>
            <div
              className="text-gray-700 dark:text-gray-300 cursor-pointer flex items-center"
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            >
              {availableLanguages.find((lang) => lang.code === language)?.name}
              <ChevronDown className="ml-1 w-4 h-4" />
            </div>

            {showLanguageDropdown && (
              <div className="absolute right-0 top-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10 w-40">
                {availableLanguages.map((lang) => (
                  <div
                    key={lang.code}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
                      language === lang.code ? "bg-blue-50 dark:bg-blue-900/30 text-blue-500 dark:text-blue-400" : ""
                    }`}
                    onClick={() => {
                      setLanguage(lang.code)
                      setShowLanguageDropdown(false)
                    }}
                  >
                    {lang.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center">
              <Bell className="text-gray-500 dark:text-gray-400 w-5 h-5 mr-3" />
              <span className="dark:text-white">{t("notifications")}</span>
            </div>
            <div className="relative" onClick={() => setNotifications(!notifications)}>
              <input type="checkbox" className="sr-only" id="notifications" checked={notifications} readOnly />
              <div
                className={`block w-12 h-6 rounded-full transition ${notifications ? "bg-blue-500 dark:bg-blue-600" : "bg-gray-300 dark:bg-gray-600"}`}
              ></div>
              <div
                className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform ${notifications ? "translate-x-6" : ""}`}
              ></div>
            </div>
          </div>

          <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center">
              <Moon className="text-gray-500 dark:text-gray-400 w-5 h-5 mr-3" />
              <span className="dark:text-white">{t("darkMode")}</span>
            </div>
            <div className="relative" onClick={toggleDarkMode}>
              <input type="checkbox" className="sr-only" id="darkmode" checked={darkMode} readOnly />
              <div
                className={`block w-12 h-6 rounded-full transition ${darkMode ? "bg-blue-500 dark:bg-blue-600" : "bg-gray-300 dark:bg-gray-600"}`}
              ></div>
              <div
                className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform ${darkMode ? "translate-x-6" : ""}`}
              ></div>
            </div>
          </div>

          <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center">
              <HelpCircle className="text-gray-500 dark:text-gray-400 w-5 h-5 mr-3" />
              <span className="dark:text-white">{t("helpAndSupport")}</span>
            </div>
            <div className="text-gray-400 dark:text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <button className="flex items-center justify-center w-full bg-red-50 dark:bg-red-900/30 text-red-500 dark:text-red-400 py-3 rounded-xl font-medium">
        <LogOut className="w-5 h-5 mr-2" />
        {t("logout")}
      </button>
    </div>
  )
}
