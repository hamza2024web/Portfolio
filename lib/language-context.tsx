"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { Language, Translations } from "./translations"
import { translations } from "./translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if we're in the browser before accessing localStorage
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem("language") as Language
      if (stored && (stored === "fr" || stored === "en")) {
        setLanguageState(stored)
      }
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem("language", lang)
    }
  }

  // Always provide context, even before mounting
  // This prevents the "must be used within provider" error
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}