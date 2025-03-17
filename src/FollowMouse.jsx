import { useEffect, useState } from "react"

export const FollowMouse = () => {
    const [enable, setEnablaed] = useState(false)
    const [position, setPosition] = useState({x:0, y:0})
  
    useEffect(() => {
      console.log('efecto ', { enable })
  
      const handleMove = (event) => {
        const { clientX, clientY } = event
        console.log('handlemove', {clientX, clientY})
        setPosition({x: clientX, y:clientY})
      }
  
      if (enable)
        window.addEventListener('pointermove', handleMove)
  
      return () => {
        window.removeEventListener('pointermove', handleMove)
      }
    }, [enable])
  
    return(
      <>
        <div style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}>
        </div>
  
        <h3>hola</h3>
  
        <button onClick={() => setEnablaed(!enable)}>
          { enable ? 'Desactivar' : 'Activar' } seguir puntero
        </button>
      </>
    )
  }