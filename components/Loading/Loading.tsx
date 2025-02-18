import React, { useEffect, useState, useRef } from 'react'
import { useLanguage, type SupportedLang } from '../hooks/useLanguage'
import gsap from 'gsap'

const Loading = () => {
  const [loadingText, setLoadingText] = useState('Want Best Quality Steel?')
  const language = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

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

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;
  
    const tl = gsap.timeline({ delay: 2 });
  
    tl.set(container, { transformOrigin: "center", left: "50%", top: "50%", x: "-50%", y: "-50%" });
  
    tl.to(text, {
      opacity: 0,
      duration: 0.3,
    })
      .to(container, {
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        duration: 0.8,
        ease: "power2.inOut",
      })
      .to(container, {
        y: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });
  
    return () => {
      tl.kill();
    };
  }, []);
  
  
  return (
    <div 
      ref={containerRef}
      className='fixed h-screen w-screen bg-black text-white flex justify-center items-center z-[100]'
    >
      <p 
        ref={textRef}
        className='text-4xl font-montserrat'
      >
        {loadingText}
      </p>
    </div>
  )
}

export default Loading
