import React, { useState, useEffect } from 'react';
import "./style.css";

const Calendar = () => {
    const [currentDateTime, setCurrentDateTime] = useState('');

    useEffect(() => {
        const updateDateTime = () => {
            const date = new Date();
            const formattedDate = date.toLocaleDateString(undefined, {
                month: 'long',
                weekday: 'long',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
            });
            setCurrentDateTime(formattedDate);
        };

        updateDateTime();

        const timer = setInterval(updateDateTime, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        
        <div>
            <p className="DateTime"> Dzisiaj jest {currentDateTime}</p>
        </div>
    );
};
export default Calendar;





