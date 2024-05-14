import { prismaClient, PetMetadata as PetMetaDataInput } from 'prisma-client';
import { PetMetadata } from '../types';

export const createPetMetadata = async (data: PetMetadata) => {
  return prismaClient.petMetadata.create({ data: data as unknown as PetMetaDataInput });
};

export const getPetMetadata = async (id: string) => {
  return prismaClient.petMetadata.findUnique({ where: { id } });
};