import React, { useEffect, useState, useRef } from "react";
import { useLanguage, type SupportedLang } from "../hooks/useLanguage";
import gsap from "gsap";

const Loading = () => {
  const [loadingText, setLoadingText] = useState("Want Best Quality Steel?");
  const language = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const CACHE_KEY = "translatedLoadingText";

    const getTranslation = async () => {
      const cachedTranslation = localStorage.getItem(`${CACHE_KEY}_${language}`);
      if (cachedTranslation) {
        setLoadingText(cachedTranslation);
        return;
      }

      if (language !== "en") {
        try {
          const response = await fetch(
            `https://api.mymemory.translated.net/get?q=Want Best Quality Steel?&langpair=en|${language}`
          );
          const data = await response.json();
          if (data.responseStatus === 200) {
            const translatedText = data.responseData.translatedText;
            setLoadingText(translatedText);
            localStorage.setItem(`${CACHE_KEY}_${language}`, translatedText);
          }
        } catch {
          const fallbackTexts: Partial<Record<SupportedLang, string>> = {
            hi: "क्या आप सर्वोत्तम गुणवत्ता वाली स्टील चाहते हैं?",
            bn: "আপনি কি সেরা মানের স্টিল চান?",
            te: "మీరు ఉత్తమ నాణ్యత ఉక్కు కావాలా?",
            ta: "சிறந்த தரம் கொண்ட எஃகு வேண்டுமா?",
            mr: "तुम्हाला सर्वोत्तम दर्जाची स्टील हवी आहे का?",
            gu: "શું તમે શ્રેષ્ઠ ગુણવત્તાની સ્ટીલ ઇચ્છો છો?",
            kn: "ನೀವು ಅತ್ಯುತ್ತಮ ಗುಣಮಟ್ಟದ ಉಕ್ಕು ಬಯಸುತ್ತೀರಾ?",
            ml: "നിങ്ങൾക്ക് ഏറ്റവും നല്ല ഗുണനിലവാരമുള്ള സ്റ്റീൽ വേണോ?",
            pa: "ਕੀ ਤੁਸੀਂ ਵਧੀਆ ਕੁਆਲਟੀ ਸਟੀਲ ਚਾਹੁੰਦੇ ਹੋ?",
            or: "ଆପଣ ସର୍ବଶ୍ରେଷ୍ଠ ଗୁଣବତ୍ତା ଷ୍ଟିଲ୍ ଚାହୁଁଛନ୍ତି କି?",
            as: "আপুনি উচ্চ মানৰ ষ্টীল বিচাৰে নেকি?",
          };
          const fallbackText = fallbackTexts[language];
          if (fallbackText) {
            setLoadingText(fallbackText);
            localStorage.setItem(`${CACHE_KEY}_${language}`, fallbackText);
          }
        }
      }
    };

    getTranslation();
  }, [language]);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    const tl = gsap.timeline({ delay: 2 });

    tl.set(container, {
      transformOrigin: "center",
      left: "50%",
      top: "50%",
      x: "-50%",
      y: "-50%",
    });

    tl.to(text, {
      opacity: 0,
      duration: 0.3,
    })
      .to(container, {
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        duration: 0.8,
        ease: "power2.inOut",
      })
      .to(container, {
        scaleX: 1.2,
        scaleY: 0.8,
        duration: 0.3,
        ease: "power1.out",
      }) // Water droplet stretch effect
      .to(container, {
        scaleX: 0.8,
        scaleY: 1.2,
        duration: 0.2,
        ease: "power1.inOut",
      }) // Droplet squish effect
      .to(container, {
        y: -120,
        opacity: 0,
        scale: 0.5,
        duration: 0.6,
        ease: "power2.in",
      });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="fixed h-screen w-screen bg-black text-white flex justify-center items-center z-[100]"
        style={{ filter: "url(#gooey)" }} // Apply SVG filter
      >
        <p ref={textRef} className="text-4xl font-montserrat">
          {loadingText}
        </p>
      </div>

      {/* SVG Filter for Liquid Effect */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default Loading;
