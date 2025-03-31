import { PrismaClient } from "@/(generated)/prismaClient";
import AppointmentCalendar from "@/app/AppointmentCalendar";
import AppointmentCreationForm from "@/app/AppointmentCreationForm";
import { Event } from "react-big-calendar";

// the is the id of the "application user", the provider looking
// at their calendar. Expected to match staged data in the postgres db
const PROVIDER_ID = 1;
const prisma = new PrismaClient();

// don't cache this page
export const dynamic = "force-dynamic";

export default async function Home() {
  // would probably rather do this fetch in AppointmentCalendar.tsx
  // but that has to be a client component for some reason?
  const logged_in_provider = await prisma.provider.findFirst({
    where: {
      id: PROVIDER_ID,
    },
  });
  const appointments = await prisma.appointment.findMany({
    where: {
      providerId: PROVIDER_ID,
    },
  });
  const allPatients = await prisma.patient.findMany();

  // would rather map Appointment -> Event inside AppointmentCalendar.tsx
  // but not sure how to get a good Appointment type from Prisma
  const events: Event[] = appointments.map((apt) => {
    return {
      title: apt.title,
      start: apt.start,
      end: apt.end,
    };
  });

  if (!logged_in_provider) {
    return (
      <div>{`PROVIDER_ID ${PROVIDER_ID} not logged in. Please initialize and seed your db, then set PROVIDER_ID in page.tsx.`}</div>
    );
  }

  return (
    <>
      <div>
        {`Hello, ${logged_in_provider.firstName} ${logged_in_provider.lastName}`}
      </div>

      <AppointmentCalendar events={events} />
      <AppointmentCreationForm
        providerId={PROVIDER_ID}
        patients={allPatients}
      />
    </>
  );
}
