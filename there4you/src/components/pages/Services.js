import React, { useState, useEffect, useCallback, useRef} from 'react';
import '../../App.css';
import { Path } from 'progressbar.js';

const instructions = ['inhale', 'hold', 'exhale', 'hold'];
var index = 1;

export default function Services() {
    const [pause, setPause] = useState(0);
    function clicked() {
        setPause(pause+1);
        console.log(pause)
    }

   //setting the attribute of the square progress bar
    useEffect( () => {
            const bar = new Path('#heart-path', { duration: 16000,
                from: {color: '#d59ea9'},
                to: {color: '#b0dae6'},
                step: (state, bar) => {
                    bar.path.setAttribute('stroke', state.color);                 
                }
            });
            bar.animate(1);
    }, [])


    //setting text content inside of the square
    const [instruc, setInstruc] = useState(instructions[0]);

    const shuffle = useCallback( () => {
        setInstruc(instructions[index]);
        if(index < instructions.length-1)
            index++;
        else
            index = 0;
        }, []);

    useEffect( () => {
        const intervalID = setInterval(shuffle, 4000);
        return () => clearInterval(intervalID);
    }, [shuffle])    

    return (
        <>
            <div className='services'>
                <div id='container'>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100">
                        <path id='heart-path' d="M 0,2 L 98,2 L 98,98 L 2,98 L 2,4" strokeWidth='4' fillOpacity='0' />
                        <text fill='#cfccc8' fontSize={'17'} x={'50%'} y={'51%'} textAnchor='middle' dominantBaseline='middle'>{instruc}</text>
                    </svg>
                </div>
            </div>  
        </>
        
    )
}