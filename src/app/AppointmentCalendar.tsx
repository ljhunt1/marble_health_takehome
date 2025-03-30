"use client";
// I have no idea why this has to be a client component? wasn't working
// as a server component https://github.com/jquense/react-big-calendar/issues/2615#issuecomment-2227139212

import moment from "moment";
import { Calendar, Event, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function AppointmentCalendar(props: { events: Event[] }) {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={props.events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}
