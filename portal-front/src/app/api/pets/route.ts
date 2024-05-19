import { prismaClient } from '../../../lib/prisma';

export async function GET() {
  const pets = await prismaClient.petMetadata.findMany();
  console.log(pets)
  return Response.json(pets);
}
