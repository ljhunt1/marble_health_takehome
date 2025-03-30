// seed data for the database. must run after prismaClient is generated
// Runs with ts-node, following https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding

// Absolute import otherwise ts-node gets confused. Apparently `tsconfig-paths`
// can fix this but that's too much work
import { PrismaClient } from "../src/(generated)/prismaClient";

const prisma = new PrismaClient();
async function main() {
  const providerIroh = await prisma.provider.upsert({
    where: { id: 1 },
    update: {},
    create: {
      firstName: "Uncle",
      lastName: "Iroh",
    },
  });
  const providerObiwan = await prisma.provider.upsert({
    where: { id: 2 },
    update: {},
    create: {
      firstName: "Obi",
      lastName: "Wan",
    },
  });
  const providerYoda = await prisma.provider.upsert({
    where: { id: 3 },
    update: {},
    create: {
      firstName: "Jedi",
      lastName: "Yoda",
    },
  });
  const patientZuko = await prisma.patient.upsert({
    where: { id: 1 },
    update: {},
    create: {
      firstName: "Prince",
      lastName: "Zuko",
    },
  });
  const patientToph = await prisma.patient.upsert({
    where: { id: 2 },
    update: {},
    create: {
      firstName: "Toph",
      lastName: "Beifong",
    },
  });
  const patientLuke = await prisma.patient.upsert({
    where: { id: 3 },
    update: {},
    create: {
      firstName: "Luke",
      lastName: "Skywalker",
    },
  });
  const appointment1 = await prisma.appointment.upsert({
    where: { id: 1 },
    update: {},
    create: {
      providerId: 1,
      patientId: 1,
      title: "Iroh <-> Zuko",
      start: new Date("2025-03-25T10:00:00Z"),
      end: new Date("2025-03-25T10:45:00Z"),
    },
  });
  const appointment2 = await prisma.appointment.upsert({
    where: { id: 2 },
    update: {},
    create: {
      providerId: 1,
      patientId: 1,
      title: "Iroh <-> Zuko",
      start: new Date("2025-04-01T10:00:00Z"),
      end: new Date("2025-04-01T10:45:00Z"),
    },
  });
  const appointment3 = await prisma.appointment.upsert({
    where: { id: 3 },
    update: {},
    create: {
      providerId: 1,
      patientId: 2,
      title: "Iroh <-> Toph Consult",
      start: new Date("2025-04-02T15:00:00Z"),
      end: new Date("2025-04-02T15:45:00Z"),
    },
  });
  const appointment4 = await prisma.appointment.upsert({
    where: { id: 4 },
    update: {},
    create: {
      providerId: 2,
      patientId: 2,
      title: "Obi Wan <-> Luke",
      start: new Date("2025-03-27T15:00:00Z"),
      end: new Date("2025-03-27T15:45:00Z"),
    },
  });
  console.log({
    providerIroh,
    providerObiwan,
    providerYoda,
    patientLuke,
    patientToph,
    patientZuko,
    appointment1,
    appointment2,
    appointment3,
    appointment4,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
