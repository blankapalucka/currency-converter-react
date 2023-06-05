import React, { useState, useEffect } from 'react';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState('');
  
    useEffect(() => {
      const date = new Date();
      setCurrentDate(date.toLocaleDateString(undefined,
        { month: "long", weekday: "long", day: "numeric", year: "numeric"
        },));
    }, []);
  
    return (
      <div>
        <p> Dzsiaj jest  {currentDate}</p>
      </div>
    );
  };
export default Calendar;