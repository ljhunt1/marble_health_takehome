"use server";

import { PrismaClient } from "@/(generated)/prismaClient";

export const createAppointment = async (args: {
  providerId: number;
  patientIds: number[];
  title: string;
  start: Date;
  end: Date;
}) => {
  const prisma = new PrismaClient();
  await prisma.appointment.create({
    data: {
      providerId: args.providerId,
      patients: {
        create: args.patientIds.map((id) => {
          return {
            patient: {
              connect: {
                id: id,
              },
            },
          };
        }),
      },
      title: args.title,
      start: args.start,
      end: args.end,
    },
  });
};
