import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ background: '#fff', borderRadius: 16, padding: 40, maxWidth: 480, width: '100%', boxShadow: '0 4px 24px rgba(15,23,42,0.08)', display: 'flex', flexDirection: 'column', gap: 16, textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: 32 }}>My Web</h1>
        <p style={{ margin: 0, color: '#475569' }}>A basic Vite + React app. Edit <code>src/App.jsx</code> to get started.</p>
        <button
          onClick={() => setCount((c) => c + 1)}
          style={{ alignSelf: 'center', padding: '10px 20px', fontSize: 16, border: 'none', borderRadius: 8, background: '#2563eb', color: '#fff', cursor: 'pointer' }}
        >
          Count is {count}
        </button>
      </div>
    </main>
  )
}
