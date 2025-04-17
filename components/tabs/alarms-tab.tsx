"use client"

import { Bell, Clock, Calendar, Search, ArrowRight, FileText, Trash2, Edit, Plus } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslation } from "@/context/translation-provider"

export default function AlarmsTab() {
  const { t } = useTranslation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div className="flex flex-col h-full" variants={containerVariants} initial="hidden" animate="visible">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <div className="bg-blue-500 rounded-full p-3 mr-3">
            <Bell className="text-white w-5 h-5" />
          </div>
          <div className="text-2xl font-semibold text-gray-700 dark:text-gray-200 flex items-center">
            {t("myAlarms")}
            <Plus className="text-blue-500 ml-1 w-6 h-6" />
          </div>
        </div>
      </div>

      <motion.div className="flex justify-between items-center px-5 py-3" variants={itemVariants}>
        <h2 className="text-xl font-bold dark:text-white">{t("activeAlarms")}</h2>
        <span className="text-gray-500 dark:text-gray-400">1/5</span>
      </motion.div>

      <motion.div className="px-5 mb-4" variants={itemVariants}>
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-start">
              <div className="w-10 h-7 flex flex-col mr-3 rounded-sm overflow-hidden">
                <div className="h-1/3 bg-blue-600 w-full"></div>
                <div className="h-1/3 bg-white dark:bg-gray-700 w-full"></div>
                <div className="h-1/3 bg-red-600 w-full"></div>
              </div>
              <div>
                <div className="font-bold text-xl dark:text-white">Hollanda</div>
                <div className="text-gray-500 dark:text-gray-400">16 dakika önce</div>
                <div className="text-gray-500 dark:text-gray-400">Netherlands Visa Application...</div>
              </div>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full flex items-center">
              <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-1"></div>
              {t("searching")}
            </div>
          </div>

          <div className="flex justify-end mb-4">
            <motion.div
              className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.2, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500 dark:text-gray-400"
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </motion.div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
            <div className="flex items-center mb-4">
              <Search className="text-blue-500 dark:text-blue-400 w-5 h-5 mr-2" />
              <span className="text-gray-700 dark:text-gray-300">Mevcut randevular için aktif olarak aranıyor</span>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-blue-500 dark:text-blue-400">
                <ArrowRight className="w-5 h-5 mr-2" />
                <span>From:</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-4 mr-2 flex items-center justify-center">
                  <span className="text-lg">🇹🇷</span>
                </div>
                <span className="font-medium dark:text-white">Türkiye</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-500 dark:text-gray-400">To:</div>
              <div className="flex items-center">
                <span className="font-medium mr-2 dark:text-white">Hollanda</span>
                <div className="w-6 h-4 flex flex-col">
                  <div className="h-1/3 bg-blue-600 w-full"></div>
                  <div className="h-1/3 bg-white dark:bg-gray-600 w-full"></div>
                  <div className="h-1/3 bg-red-600 w-full"></div>
                </div>
              </div>
            </div>

            <div className="flex items-center mb-2">
              <FileText className="text-blue-500 dark:text-blue-400 w-5 h-5 mr-2" />
              <span className="text-gray-500 dark:text-gray-400">Vize Kategorisi:</span>
            </div>
            <div className="mb-4 pl-7 font-medium dark:text-white">KISA DONEM VIZE</div>

            <div className="flex justify-between mb-4">
              <div className="text-gray-500 dark:text-gray-400">Alt Kategori:</div>
              <div className="font-medium dark:text-white">KAMYON ŞOFÖRÜ</div>
            </div>

            <div className="flex items-center mb-4">
              <Clock className="text-blue-500 dark:text-blue-400 w-5 h-5 mr-2" />
              <span className="text-gray-500 dark:text-gray-400">Kontrol Sıklığı:</span>
              <span className="font-medium ml-2 dark:text-white">Her 30 dakikada</span>
            </div>

            <div className="flex items-center mb-4">
              <Bell className="text-blue-500 dark:text-blue-400 w-5 h-5 mr-2" />
              <span className="text-gray-500 dark:text-gray-400">Bildirimler:</span>
              <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full ml-2 flex items-center">
                <Bell className="w-4 h-4 mr-1" />
                Push
              </div>
            </div>

            <div className="flex items-center mb-4">
              <Calendar className="text-blue-500 dark:text-blue-400 w-5 h-5 mr-2" />
              <span className="text-gray-500 dark:text-gray-400">Oluşturulma:</span>
              <span className="font-medium ml-2 dark:text-white">Nis 5, 2025</span>
            </div>

            <div className="flex justify-between">
              <motion.button
                className="flex items-center justify-center bg-blue-50 dark:bg-blue-900/30 text-blue-500 dark:text-blue-400 px-4 py-2 rounded-xl font-medium w-[48%]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Edit className="w-4 h-4 mr-2" />
                Alarmı Düzenle
              </motion.button>
              <motion.button
                className="flex items-center justify-center bg-red-50 dark:bg-red-900/30 text-red-500 dark:text-red-400 px-4 py-2 rounded-xl font-medium w-[48%]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Sil
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div className="px-5 mb-4" variants={itemVariants}>
        <h2 className="text-xl font-bold mb-4 dark:text-white">{t("appointmentNotifications")}</h2>
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="flex items-start">
            <div className="w-10 h-7 flex flex-col mr-3 rounded-sm overflow-hidden">
              <div className="h-1/3 bg-blue-600 w-full"></div>
              <div className="h-1/3 bg-white dark:bg-gray-700 w-full"></div>
              <div className="h-1/3 bg-red-600 w-full"></div>
            </div>
            <div>
              <div className="font-bold text-xl dark:text-white">Hollanda</div>
              <div className="text-gray-500 dark:text-gray-400">
                Netherlands Visa Application Centre - Ankara - Netherlands Visa Application Centre -
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-20 right-4 z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 400, damping: 10 }}
      >
        <motion.button
          className="bg-blue-500 text-white rounded-full px-5 py-3 flex items-center shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="bg-white rounded-full p-1 mr-2">
            <Bell className="text-blue-500 w-4 h-4" />
          </div>
          {t("createAlarm")}
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
