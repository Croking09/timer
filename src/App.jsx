import Timer from './Timer'

function App() {
  return (
    <div className='flex bg-gray-100 min-h-screen items-center justify-center'>
      <Timer limitDate={new Date("2025-04-15T23:38:00")}/>
    </div>
  )
}

export default App
