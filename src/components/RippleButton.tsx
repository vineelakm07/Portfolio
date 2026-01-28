import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

interface RippleButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  whileHover?: any
  whileTap?: any
}

const RippleButton = ({
  children,
  onClick,
  className = '',
  type = 'button',
  whileHover,
  whileTap,
}: RippleButtonProps) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])
  const buttonRef = useRef<HTMLButtonElement>(null)
  const rippleIdRef = useRef(0)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newRipple = {
      x,
      y,
      id: rippleIdRef.current++,
    }

    setRipples((prev) => [...prev, newRipple])

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
    }, 600)

    onClick?.()
  }

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      onClick={handleClick}
      className={`relative overflow-hidden ${className}`}
      whileHover={whileHover || { scale: 1.03, y: -2 }}
      whileTap={whileTap || { scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 20,
            height: 20,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 20, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      ))}
    </motion.button>
  )
}

export default RippleButton
