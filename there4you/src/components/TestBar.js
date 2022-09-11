import React, { useEffect, useState, useCallback } from 'react'
import "../App.css";
import ProgressBar from '@ramonak/react-progress-bar';

var timer = null;
var intervalID = null;
const instructions = ['inhale', 'hold', 'exhale', 'hold'];
var index = 1;
var temp = 1;

function TestBar() {
  const [counter, setCounter] = useState(0);
  const [isplayin, setIsPlaying] = useState(false);

  const pause = () => {
    temp = counter;
    setIsPlaying(false);
    clearInterval(timer);
    clearInterval(intervalID);
  };

  const reset = () => {
    setIsPlaying(false);
    setCounter(0);
    index = 1;
    setInstruc(instructions[0]);
    clearInterval(timer);
    clearInterval(intervalID);
  };

  const play = () => {
    setIsPlaying(true);
    setCounter(temp);
    intervalID = setInterval(shuffle, 4000);
    timer = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
    
  };

  // const bar2progress = () => {
  //   if(counter > 4 && counter < 9){
  //     return counter - 4;
  //   }
  //   else
  //     return 0;
  // }
  
  // if(counter > 4 && counter < 9){
  //   bar2progress = counter - 4;
  // }
  // else if(counter >= 9){
  //   bar2progress = 4;
  // }
  // else{
  //   bar2progress = 0;
  // }

  // function otherBarsProgress (counter, bar_num, result_progress){
  //   if(counter > (bar_num-1)*4 && counter < (bar_num-1)*4*2+1){
  //     result_progress = counter - (bar_num-1)*4;
  //   }
  //   else if(counter >= (bar_num-1)*4*2+1){
  //     result_progress = 4;
  //   }
  //   else{
  //     result_progress = 0
  //   }
  // }
  var barsprogress = [0, 0, 0];
  //otherBarsProgress (counter, 2, barsprogress[0]);
  console.log(barsprogress[0])

  if(counter > (2-1)*4 && counter < (2-1)*4*2+1){
    barsprogress[0] = counter - (2-1)*4;
  }
  else if(counter >= (2-1)*4*2+1){
    barsprogress[0] = 4;
  }
  else{
    barsprogress[0] = 0
  }
  //
  if(counter > (3-1)*4 && counter < (3-1)*4*2+1){
    barsprogress[1] = counter - (3-1)*4;
  }
  else if(counter >= (3-1)*4*2+1){
    barsprogress[1] = 4;
  }
  else{
    barsprogress[1] = 0
  }
  //
  if(counter > (4-1)*4 && counter < (4-1)*4*2+1){
    barsprogress[2] = counter - (4-1)*4;
  }
  else if(counter >= (4-1)*4*2+1){
    barsprogress[2] = 4;
  }
  else{
    barsprogress[2] = 0
  }

  if(counter == 17){
    setCounter(1);
  }

  //setting text content inside of the square
  const [instruc, setInstruc] = useState(instructions[0]);

  const shuffle = useCallback( () => {
      setInstruc(instructions[index]);
      if(index < instructions.length-1)
          index++;
      else
          index = 0;
      }, []);

  // useEffect( () => {
  //     const intervalID = setInterval(shuffle, 4000);
  //     return () => clearInterval(intervalID);
  // }, [shuffle]) 

  return (
    <>
    <div className='bar-wrapper' onDoubleClick={() => reset()} onClick={() => isplayin? pause() : play()}>
      <ProgressBar height='2.2vh' bgColor='#b0dae6' baseBgColor='transparent' completed={counter} maxCompleted={4} customLabel=' ' className='p-bar'/>
      <ProgressBar height='2.2vh' dir='rtl' bgColor='#b0dae6' baseBgColor='transparent' completed={barsprogress[0]} maxCompleted={4} customLabel=' ' className='p-bar2'/>
      <ProgressBar height='2.2vh' dir='rtl' bgColor='#b0dae6' baseBgColor='transparent' completed={barsprogress[1]} maxCompleted={4} customLabel=' ' className='p-bar3'/>
      <ProgressBar height='2.2vh' dir='rtl' bgColor='#b0dae6' baseBgColor='transparent' completed={barsprogress[2]} maxCompleted={4} customLabel=' ' className='p-bar4'/>
      
      {isplayin ? (
        <>
          <div className='text-instruc'>{instruc}</div>
          {/* <br></br> */}
          {/* <button onClick={() => pause()}>pause</button> */}
          {/* <button onClick={() => reset()}>reset</button> */}
        </>
      ) : (
        <>
          {counter > 0 ? (
            <>
              <div className='text-instruc'>{instruc}</div>
              {/* <br></br> */}
              {/* <button onClick={() => play()}>resume</button> */}
              
            </>
          ) : (
            <>
            <div className='text-instruc'>press me</div>
            {/* <button onClick={() => play()}>start</button> */}
            </>
          )}
        </>
      )}
    </div>
    </>
    
  )
}

export default TestBar