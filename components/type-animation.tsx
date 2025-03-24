"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypeAnimationProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

export default function TypeAnimation({ text, className = "", speed = 40, delay = 0 }: TypeAnimationProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [startTyping, setStartTyping] = useState(false)

  useEffect(() => {
    // Reset when text changes
    setDisplayedText("")
    setCurrentIndex(0)

    // Delay before starting to type
    const startTimer = setTimeout(() => {
      setStartTyping(true)
    }, delay * 1000)

    return () => clearTimeout(startTimer)
  }, [text, delay])

  useEffect(() => {
    if (!startTyping) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed, startTyping])

  return (
    <motion.p className={className} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
        className="inline-block w-0.5 h-5 bg-current ml-0.5"
      />
    </motion.p>
  )
}

