import React, {useEffect, useState} from 'react'
import './Clock.css'


const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        })
    }, [time])

    return (
        <div>
            {time}
        </div>
    );
}

export default Clock;
