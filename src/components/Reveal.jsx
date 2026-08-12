import { useReveal } from '../hooks/useReveal.js'

export default function Reveal({ children, as: Tag = 'div', className = '', delay = 0 }) {
  const [ref, visible] = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'reveal--visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
