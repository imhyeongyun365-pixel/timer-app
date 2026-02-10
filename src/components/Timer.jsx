import React, {useState,useRef} from 'react'
import TimerDisplay from './TimerDisplay'
import Button from './Button'
import "./Timer.css"
const Timer = () => {

    const [time, setTime]=useState(0)
    const [status, setStatus]=useState('초기화')
    const intervelRef =useRef(null)

    const formatTime=(time)=> {
        const minutes =Math.floor(time/60)
        const seconds = time % 60

        return `${minutes.toString().padStart(2,'0')}: ${seconds.toString().padStart(2,'0')}`

    }

    const startTimer=()=> {
        if(status !=='실행중') {
            setStatus('실행중')

            intervelRef.current=setInterval(()=>{
                setTime(prevTime =>prevTime+1)
            },1000)
        }
 }


 const pauseTimer=()=> {
    if(status==='실행중') {
        clearInterval(intervelRef.current)
        setStatus('일시정지')
    }
}

const resetTimer=()=> {
     clearInterval(intervelRef.current)
     setTime(0)
     setStatus('초기화')
 }
    const buttons =[
        {className:'start', value:'시작', onClick:startTimer},
        {className:'pause', value:'일시정지',onClick:pauseTimer},
        {className:'reset', value:'초기화',onClick:resetTimer}
    ]
  return (
    <div className='timer-container'>
        
        <TimerDisplay time={formatTime(time)}/>
        {buttons.map((button,i)=>(
            <Button key={i} {...button}/>

        ))}
    </div>
  )
}

export default Timer