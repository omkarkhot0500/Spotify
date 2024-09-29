import React, { createContext, useEffect, useRef, useState } from 'react'
import { songsData } from '../assets/assets';

export const PlayerContex = createContext();

const PlayerContexProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlyStatus] = useState(false);
    const [time, setTime] =useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    })

    const play = () => {
        audioRef.current.play();
        setPlyStatus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlyStatus(false);
    }

    const playWithId = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlyStatus(true);
    }

    const previous = async () => {
        if(track.id>0) {
            await setTrack(songsData[track.id-1]);
            await audioRef.current.play();
            setPlyStatus(true);
        }
    }

    const next = async () => {
        if(track.id<songsData.length-1) {
            await setTrack(songsData[track.id+1]);
            await audioRef.current.play();
            setPlyStatus(true);
        }
    }

    const seekSong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX/ seekBg.current.offsetWidth)*audioRef.current.duration)
    }

    useEffect(()=>{
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100)+"%")
                setTime({
                    currentTime:{
                        second:Math.floor(audioRef.current.currentTime%60),
                        minute:Math.floor(audioRef.current.currentTime/60)
                    },
                    totalTime:{
                        second:Math.floor(audioRef.current.duration%60),
                        minute:Math.floor(audioRef.current.duration/60)
                    }
            })
            }
        }, 1000);
    },[audioRef])

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track,
        setTrack,
        playStatus,
        setPlyStatus,
        time,
        setTime,
        play,
        pause,
        playWithId,
        previous,
        next,
        seekSong
    }

    return (
        <PlayerContex.Provider value={contextValue}>
            {props.children}
        </PlayerContex.Provider>
    );
}

export default PlayerContexProvider;
