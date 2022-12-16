import prisma from '../libs/prisma/prisma.js';
import ExampleSeeder from './seeds/ExampleSeeder.js';

async function main() {
  const seeders = [
    ExampleSeeder,
  ];

  await prisma.$transaction(async (tx) => {
    for (const seeder of seeders) {
      const instance = new seeder(tx);
      await instance.run();
    }
  });
}

main().then();
