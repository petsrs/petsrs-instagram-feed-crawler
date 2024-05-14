// import { prismaClient } from 'prisma-client';
import { PetMetadata as PetMetaDataInput, PrismaClient } from '@prisma/client';
import { PetMetadata } from '../types';

export const prismaClient = new PrismaClient()

export const createPetMetadata = async (data: PetMetadata) => {
  return prismaClient.petMetadata.create({ data: data as unknown as PetMetaDataInput });
};

export const getPetMetadata = async (id: string) => {
  return prismaClient.petMetadata.findUnique({ where: { id } });
};