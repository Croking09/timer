import Timer from './Timer'

const fechaActual = new Date();

const fechaLimite1 = new Date();
const fechaLimite2 = new Date();
fechaLimite1.setDate(fechaActual.getDate() + 30);
fechaLimite2.setDate(fechaActual.getDate() + 150);

function App() {
  return (
    <div className='flex bg-gray-100 min-h-screen items-center justify-center gap-20'>
      <Timer limitDate={fechaLimite1}/>
      <Timer limitDate={fechaLimite2}/>
    </div>
  )
}

export default App
