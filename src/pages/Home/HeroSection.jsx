import React, { useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const HeroSection = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [events, setEvents] = useState([
    {
      start: new Date(),
      end: new Date(new Date().getTime() + 1000 * 60 * 60),
      title: 'Today',
    },
  ]);

  const handleClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleSelect = ({ start, end }) => {
    const title = prompt('What is your Appointment?');
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Flawless has a new definition.</span>{' '}
          </h1>
          <p className="hero--section-description">with
            <br /> DHEL MORALES
          </p>
        </div>
        <button className="btn btn-primary" onClick={handleClick}>
          BOOK NOW
        </button>
      </div>
      {showCalendar && (
        <div className="calendar--box">
          <Calendar
            localizer={momentLocalizer(moment)}
            events={events}
            startAccessor="start"
            endAccessor="end"
            views={['month', 'week', 'day']}
            defaultView={Views.MONTH}
            selectable={true}
            onSelectSlot={handleSelect}
            eventPropGetter={(event, start, end, isSelected) => ({
              style: {
                backgroundColor: isSelected ? 'goldenrod' : event.backgroundColor,
                color: isSelected ? 'black' : 'white',
              },
              className: isSelected ? 'selected' : '',
            })}
          />
        </div>
      )}
    </section>
  );
};

export default HeroSection;