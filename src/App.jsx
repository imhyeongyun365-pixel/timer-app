
import './App.css'
import TimerDisplay from './components/TimerDisplay'
import Button from './components/Button'
import Timer from './components/Timer'

function App() {
  

  return (
    <div className='app-container'>
        <h1>타이머 앱</h1>
        <Timer/>
        <TimerDisplay/>
        <Button/>
    </div>
  )
}

export default App
