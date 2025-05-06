import React from 'react';
import Countdown from 'react-countdown';
import './VirtualMeetings.css';

const VirtualMeetings = () => {
  const meetingDate = new Date('2025-04-30T23:59:59').getTime(); // Cambio de fecha aqui

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>La reunión ha comenzado.</span>;
    } else {
      return <span>{days}d {hours}h {minutes}m {seconds}s</span>;
    }
  };

  return (
    <div className="virtual-meetings">
      <h2>Próxima Reunión Virtual</h2>
      <p>
        La próxima reunión virtual será en: <Countdown date={meetingDate} renderer={renderer} />
      </p>

      {/* Sección de resúmenes de conferencias pasadas */}
      <div className="past-conferences">
        <h3>Resúmenes de Conferencias Pasadas</h3>
        <div className="conference-summary">
          <h4>Conferencia: 31 de marzo de 2025</h4>
          <p>
            En nuestra última reunión, discutimos las últimas tendencias en tecnología para personas con discapacidad. Los oradores compartieron ideas innovadoras y estrategias para mejorar la accesibilidad en línea.
          </p>
        </div>
        {/* Aquí puedes añadir más resúmenes de conferencias pasadas */}
      </div>
    </div>
  );
};

export default VirtualMeetings;