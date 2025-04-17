"use client"

import { Send } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslation } from "@/context/translation-provider"
import { useState } from "react"

export default function AIAssistantTab() {
  const { t } = useTranslation()
  const [message, setMessage] = useState("")

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

  const messages = [
    {
      type: "bot",
      text: "Merhaba! Size nasıl yardımcı olabilirim?",
    },
    {
      type: "bot",
      text: "Vize başvurusu için gerekli belgeler hakkında bilgi verebilirim veya randevu almanıza yardımcı olabilirim.",
    },
    {
      type: "user",
      text: "Hollanda vizesi için gerekli belgeler nelerdir?",
    },
    {
      type: "bot",
      text: "Hollanda vizesi için gerekli temel belgeler şunlardır:",
      list: [
        "Pasaport (en az 6 ay geçerli)",
        "Vize başvuru formu",
        "Biyometrik fotoğraf",
        "Seyahat sağlık sigortası",
        "Uçuş ve konaklama rezervasyonları",
        "Maddi durum belgeleri (banka hesap özeti)",
        "Çalışma belgesi veya öğrenci belgesi",
      ],
    },
  ]

  return (
    <motion.div className="flex flex-col h-full" variants={containerVariants} initial="hidden" animate="visible">
      <motion.div className="p-5" variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 dark:text-white">{t("aiAssistant")}</h2>
      </motion.div>

      <motion.div
        className="flex-1 overflow-auto px-5 pb-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            className={`${
              msg.type === "bot"
                ? "bg-blue-100 dark:bg-blue-900/30 rounded-tl-xl rounded-tr-xl rounded-br-xl"
                : "bg-gray-200 dark:bg-gray-700 rounded-tl-xl rounded-tr-xl rounded-bl-xl ml-auto"
            } p-4 mb-4 max-w-[80%]`}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <p className="text-gray-800 dark:text-gray-200">{msg.text}</p>
            {msg.list && (
              <ul className="list-disc pl-5 mt-2">
                {msg.list.map((item, i) => (
                  <motion.li
                    key={i}
                    className="text-gray-800 dark:text-gray-200"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
        variants={itemVariants}
      >
        <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Mesajınızı yazın..."
            className="flex-1 bg-transparent outline-none dark:text-white"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <motion.button
            className="ml-2 bg-blue-500 text-white p-2 rounded-full"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            disabled={!message.trim()}
          >
            <Send className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}
