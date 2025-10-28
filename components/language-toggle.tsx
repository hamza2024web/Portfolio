"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
      aria-label="Toggle language"
      className="font-medium"
    >
      <span className="mr-1">{language === "fr" ? "🇫🇷" : "🇬🇧"}</span>
      {language === "fr" ? "FR" : "EN"}
    </Button>
  )
}
