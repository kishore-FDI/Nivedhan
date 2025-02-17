import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      // direction: 'vertical',
      // gestureDirection: 'vertical',
      // smooth: true,
      // smoothTouch: false,
      // touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <Component {...pageProps} />;
}
