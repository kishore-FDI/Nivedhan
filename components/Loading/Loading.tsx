import React, { useEffect, useState } from 'react'
import { useLanguage, type SupportedLang } from '../hooks/useLanguage'

const Loading = () => {
  const [loadingText, setLoadingText] = useState('Want Best Quality Steel?')
  const language = useLanguage()

  useEffect(() => {
    const CACHE_KEY = 'translatedLoadingText'
    
    const getTranslation = async () => {
      const cachedTranslation = localStorage.getItem(`${CACHE_KEY}_${language}`)
      if (cachedTranslation) {
        setLoadingText(cachedTranslation)
        return
      }

      if (language !== 'en') {
        try {
          const response = await fetch(
            `https://api.mymemory.translated.net/get?q=Want Best Quality Steel?&langpair=en|${language}`
          )
          const data = await response.json()
          if (data.responseStatus === 200) {
            const translatedText = data.responseData.translatedText
            setLoadingText(translatedText)
            localStorage.setItem(`${CACHE_KEY}_${language}`, translatedText)
          }
        } catch {
          // Fallback translations for Indian languages
          const fallbackTexts: Partial<Record<SupportedLang, string>> = {
            hi: 'क्या आप सर्वोत्तम गुणवत्ता वाली स्टील चाहते हैं?',
            bn: 'আপনি কি সেরা মানের স্টিল চান?',
            te: 'మీరు ఉత్తమ నాణ్యత ఉక్కు కావాలా?',
            ta: 'சிறந்த தரம் கொண்ட எஃகு வேண்டுமா?',
            mr: 'तुम्हाला सर्वोत्तम दर्जाची स्टील हवी आहे का?',
            gu: 'શું તમે શ્રેષ્ઠ ગુણવત્તાની સ્ટીલ ઇચ્છો છો?',
            kn: 'ನೀವು ಅತ್ಯುತ್ತಮ ಗುಣಮಟ್ಟದ ಉಕ್ಕು ಬಯಸುತ್ತೀರಾ?',
            ml: 'നിങ്ങൾക്ക് ഏറ്റവും നല്ല ഗുണനിലവാരമുള്ള സ്റ്റീൽ വേണോ?',
            pa: 'ਕੀ ਤੁਸੀਂ ਵਧੀਆ ਕੁਆਲਟੀ ਸਟੀਲ ਚਾਹੁੰਦੇ ਹੋ?',
            or: 'ଆପଣ ସର୍ବଶ୍ରେଷ୍ଠ ଗୁଣବତ୍ତା ଷ୍ଟିଲ୍ ଚାହୁଁଛନ୍ତି କି?',
            as: 'আপুনি উচ্চ মানৰ ষ্টীল বিচাৰে নেকি?'
          }
          const fallbackText = fallbackTexts[language]
          if (fallbackText) {
            setLoadingText(fallbackText)
            localStorage.setItem(`${CACHE_KEY}_${language}`, fallbackText)
          }
        }
      }
    }

    getTranslation()
  }, [language])

  return (
    <div className='fixed h-screen w-screen bg-black text-white flex justify-center items-center z-[100]'>
      <p className='text-4xl font-montserrat'>
        {loadingText}
      </p>
    </div>
  )
}

export default Loading
