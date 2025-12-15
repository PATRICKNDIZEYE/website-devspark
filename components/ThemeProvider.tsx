'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [animatingTo, setAnimatingTo] = useState<Theme | null>(null)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    }
  }, [theme, mounted])

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setAnimatingTo(newTheme)
    setIsAnimating(true)
    
    // Change theme at peak of animation
    setTimeout(() => {
      setTheme(newTheme)
    }, 200)

    // End animation
    setTimeout(() => {
      setIsAnimating(false)
      setAnimatingTo(null)
    }, 600)
  }, [theme])

  if (!mounted) {
    return null
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Clean, Professional Animation Overlay */}
      {isAnimating && (
        <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
          {animatingTo === 'light' ? (
            // Light Mode: Clean circular wipe from toggle button
            <>
              <div 
                className="absolute rounded-full"
                style={{
                  top: '16px',
                  right: '180px',
                  width: '40px',
                  height: '40px',
                  background: 'radial-gradient(circle, #ffffff 0%, #f5f5f5 50%, #e0e0e0 100%)',
                  animation: 'circleExpand 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                  transformOrigin: 'center center',
                }}
              />
              {/* Soft white overlay */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'rgba(255, 255, 255, 0.3)',
                  animation: 'fadeThrough 0.6s ease-out forwards',
                }}
              />
            </>
          ) : (
            // Dark Mode: Clean fade with subtle vignette
            <>
              <div 
                className="absolute rounded-full"
                style={{
                  top: '16px',
                  right: '180px',
                  width: '40px',
                  height: '40px',
                  background: 'radial-gradient(circle, #1a1a1a 0%, #0f0f0f 50%, #000000 100%)',
                  animation: 'circleExpand 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                  transformOrigin: 'center center',
                }}
              />
              {/* Dark overlay */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'rgba(0, 0, 0, 0.2)',
                  animation: 'fadeThrough 0.6s ease-out forwards',
                }}
              />
            </>
          )}
        </div>
      )}
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
