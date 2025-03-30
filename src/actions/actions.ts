"use server";

import { PrismaClient } from "@/(generated)/prismaClient";

export const createAppointment = async (args: {
  providerId: number;
  patientId: number;
  title: string;
  start: Date;
  end: Date;
}) => {
  const prisma = new PrismaClient();
  await prisma.appointment.create({
    data: {
      providerId: args.providerId,
      patientId: args.patientId,
      title: args.title,
      start: args.start,
      end: args.end,
    },
  });
};
