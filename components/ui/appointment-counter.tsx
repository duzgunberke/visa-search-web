"use client"
import { useState } from "react"
import { ChevronDown, Calendar, ArrowRight } from "lucide-react"
import { useTranslation } from "@/context/translation-provider"
import { motion, AnimatePresence } from "framer-motion"

interface AppointmentCounterProps {
  count: number
}

export default function AppointmentCounter({ count }: AppointmentCounterProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  const appointments = [
    { country: "Hollanda", count: 8, flag: "🇳🇱" },
    { country: "Amerika Birleşik Devletleri", count: 5, flag: "🇺🇸" },
    { country: "Birleşik Krallık", count: 4, flag: "🇬🇧" },
    { country: "Kanada", count: 3, flag: "🇨🇦" },
    { country: "Avustralya", count: 3, flag: "🇦🇺" },
  ]

  return (
    <div className="mx-4 my-3">
      <motion.div
        className="bg-white dark:bg-gray-800 shadow-md overflow-hidden rounded-lg"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="p-4 flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
            <span className="font-medium dark:text-white">
              {t("todaysOpenAppointments")}: {count}
            </span>
          </div>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="text-gray-400 dark:text-gray-500 w-5 h-5" />
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="bg-gray-50 dark:bg-gray-750 mx-3 mb-3 rounded-lg overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <Calendar className="text-blue-500 dark:text-blue-400 w-5 h-5 mr-2" />
                  <span className="font-medium dark:text-white">{t("appointmentsByCountry")}</span>
                </div>

                <div className="space-y-2">
                  {appointments.map((appointment, index) => (
                    <motion.div
                      key={index}
                      className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded-md shadow-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="flex items-center">
                        <span className="text-lg mr-2">{appointment.flag}</span>
                        <span className="text-gray-700 dark:text-gray-300">{appointment.country}</span>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 text-sm font-medium rounded-full">
                        {appointment.count} {t("appointment", { count: appointment.count })}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                  <motion.button
                    className="w-full flex items-center justify-center text-blue-500 dark:text-blue-400 font-medium py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {t("viewAllAppointments")}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}