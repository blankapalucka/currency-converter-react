import React, { useState, useEffect } from 'react';
import "./style.css";

const Calendar = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const formattedDate = currentDateTime.toLocaleDateString(undefined, {
        month: 'long',
        weekday: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    });

    useEffect(() => {
        const updateDateTime = () => {
            const date = new Date();
            setCurrentDateTime(date);
        };


        const timer = setInterval(updateDateTime, 1000);
        return () => {
            clearInterval(timer);
        };
    }, [currentDateTime]);
    return (

        <div>
            <p className="DateTime"> Dzisiaj jest {formattedDate}</p>
        </div>
    );
};
export default Calendar;




