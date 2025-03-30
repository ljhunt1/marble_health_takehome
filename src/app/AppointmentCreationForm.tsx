"use client";

import { createAppointment } from "@/actions/actions";
import { useRouter } from "next/navigation";

// I have no idea why this has to be a client component? wasn't working
// as a server component https://github.com/jquense/react-big-calendar/issues/2615#issuecomment-2227139212

export default function AppointmentCreationForm(props: { providerId: number }) {
  const router = useRouter();

  const onSubmit = async (formData: FormData) => {
    await createAppointment({
      providerId: props.providerId,
      patientId: Number(formData.get("patientId")),
      // hacky casts, we're not gonna do validation here
      title: formData.get("title") as string,
      start: new Date(formData.get("start") as string),
      end: new Date(formData.get("end") as string),
    });

    router.refresh();
  };

  return (
    <>
      <div>Create an appointment</div>
      <form
        action={onSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="title">Title</label>
        <input type="text" name="title" placeholder="Title" />
        <label htmlFor="start">patientId</label>
        <input type="text" name="patientId" placeholder="PatientId" />
        <label htmlFor="start">Start</label>
        <input type="datetime-local" name="start" />
        <label htmlFor="end">End</label>
        <input type="datetime-local" name="end" />
        <input type="submit" value="Create Appointment" />
      </form>
    </>
  );
}
