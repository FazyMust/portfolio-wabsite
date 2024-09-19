import { useState, useEffect, useCallback, memo } from 'react'

const Typewriter = memo(({ text, speed = 100, onComplete }) => {
  const displayText = useTypewriter(text, speed, onComplete)
  return <span>{displayText}</span>
})

const useTypewriter = (text, speed = 100, onComplete) => {
  const [displayText, setDisplayText] = useState('')

  const typeNextChar = useCallback(() => {
    setDisplayText(prevText => {
      if (prevText.length < text.length) {
        return prevText + text.charAt(prevText.length)
      }
      return prevText
    })
  }, [text])

  useEffect(() => {
    setDisplayText('')
    let typingInterval

    if (text) {
      typingInterval = setInterval(() => {
        typeNextChar()
      }, speed)
    }

    return () => {
      clearInterval(typingInterval)
    }
  }, [text, speed, typeNextChar])

  useEffect(() => {
    if (displayText === text && onComplete) {
      onComplete()
    }
  }, [displayText, text, onComplete])

  return displayText
}

export default Typewriter
