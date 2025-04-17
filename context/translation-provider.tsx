"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { translations } from "@/lib/translations"

type Language = "tr" | "en" | "de" | "es"

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, options?: { count?: number }) => string
  getLanguageName: (code: Language) => string
  availableLanguages: { code: Language; name: string }[]
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr")

  useEffect(() => {
    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["tr", "en", "de", "es"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    // Save language preference
    localStorage.setItem("language", language)
    // Update HTML lang attribute
    document.documentElement.lang = language
  }, [language])

  const t = (key: string, options?: { count?: number }): string => {
    const translation = translations[language]?.[key]

    if (!translation) return key

    if (typeof translation === "object" && options?.count !== undefined) {
      // Handle plural forms
      if (options.count === 1) {
        return translation.one
      } else {
        return translation.other.replace("{{count}}", options.count.toString())
      }
    }

    return translation
  }

  const getLanguageName = (code: Language): string => {
    const names = {
      tr: "Türkçe",
      en: "English",
      de: "Deutsch",
      es: "Español",
    }
    return names[code]
  }

  const availableLanguages = [
    { code: "tr" as Language, name: "Türkçe" },
    { code: "en" as Language, name: "English" },
    { code: "de" as Language, name: "Deutsch" },
    { code: "es" as Language, name: "Español" },
  ]

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t, getLanguageName, availableLanguages }}>
      {children}
    </TranslationContext.Provider>
  )
}

export const useTranslation = () => {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider")
  }
  return context
}
