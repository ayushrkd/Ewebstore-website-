"use client"

import { useRef, useEffect, useState } from "react"

const numBalls = 50

export default function BallTrail() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const balls = []

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Update the ball creation loop
    for (let i = 0; i < numBalls; i++) {
      const ball = document.createElement("div")
      ball.classList.add("ball")
      const size = Math.random() * 10 + 5 // Random size between 5 and 15 pixels
      ball.style.width = `${size}px`
      ball.style.height = `${size}px`
      container.appendChild(ball)
      balls.push({ element: ball, x: 0, y: 0, scale: 1, size })
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX)
      setMouseY(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Update the animate function
    function animate() {
      let prevX = mouseX
      let prevY = mouseY

      balls.forEach((ball, index) => {
        const dx = prevX - ball.x
        const dy = prevY - ball.y

        ball.x += dx * (0.1 + index * 0.005)
        ball.y += dy * (0.1 + index * 0.005)

        const distance = Math.sqrt(dx * dx + dy * dy)
        ball.scale = Math.max(0.2, 1 - distance / 200)

        const hue = (index * 10) % 360 // Create a rainbow effect
        ball.element.style.transform = `translate(${ball.x}px, ${ball.y}px) scale(${ball.scale})`
        ball.element.style.backgroundColor = `hsla(${hue}, 100%, 50%, ${0.3 + ball.scale * 0.5})`

        prevX = ball.x
        prevY = ball.y
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Update the return statement
  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none">
      <style jsx global>{`
        .ball {
          position: fixed;
          background-color: white;
          border-radius: 50%;
          mix-blend-mode: screen;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </div>
  )
}

