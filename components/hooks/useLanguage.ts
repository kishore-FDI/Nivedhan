import { useState, useEffect } from 'react'

const SUPPORTED_LANGUAGES = {
  en: 'English',
  hi: 'Hindi',
  bn: 'Bengali',
  te: 'Telugu',
  ta: 'Tamil',
  mr: 'Marathi',
  gu: 'Gujarati',
  kn: 'Kannada',
  ml: 'Malayalam',
  pa: 'Punjabi',
  or: 'Odia',
  as: 'Assamese',
} as const

export type SupportedLang = keyof typeof SUPPORTED_LANGUAGES

export const useLanguage = () => {
  const [language, setLanguage] = useState<SupportedLang>(() => {
    // Try to get cached language on initial load
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('userLanguage') as SupportedLang) || 'en'
    }
    return 'en'
  })
  
  useEffect(() => {
    const cachedLang = localStorage.getItem('userLanguage')
    
    if (!cachedLang) {
      // No cached language, detect and save browser language
      const browserLang = navigator.language.split('-')[0] as SupportedLang
      const defaultLang = browserLang in SUPPORTED_LANGUAGES ? browserLang : 'en'
      
      localStorage.setItem('userLanguage', defaultLang)
      setLanguage(defaultLang)
    }
  }, [])

  return language
} 