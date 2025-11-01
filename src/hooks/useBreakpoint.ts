import { useState, useEffect } from 'react'

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl'

export function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('lg')

  useEffect(() => {
    const breakpoints = {
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1280,
    }

    const handleResize = () => {
      const width = window.innerWidth
      if (width < breakpoints.sm) setBreakpoint('sm')
      else if (width < breakpoints.md) setBreakpoint('md')
      else if (width < breakpoints.lg) setBreakpoint('lg')
      else setBreakpoint('xl')
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return breakpoint
}
