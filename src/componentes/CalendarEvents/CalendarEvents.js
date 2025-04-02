import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './CalendarEvents.css';

const localizer = momentLocalizer(moment);

const CalendarEvents = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const events = [
    {
      title: 'Reunión del equipo',
      start: new Date(2024, 6, 10, 10, 0),
      end: new Date(2024, 6, 10, 12, 0),
    },
    {
      title: 'Presentación del proyecto',
      start: new Date(2024, 6, 15, 14, 0),
      end: new Date(2024, 6, 15, 16, 0),
    },
  ];

  const handleSelectSlot = ({ start }) => {
    setSelectedDate(start);
  };

  return (
    <div className="calendar-events">
      <h2>Calendario de Eventos</h2>
      <div style={{ height: 500 }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleSelectSlot}
        />
      </div>

      {selectedDate && (
        <div className="date-info">
          <h3>Información del día {selectedDate.toLocaleDateString()}</h3>
          <p>Aquí puedes mostrar información detallada sobre los eventos de este día.</p>
        </div>
      )}
    </div>
  );
};

export default CalendarEvents;