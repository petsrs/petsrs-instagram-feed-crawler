// import { prismaClient } from 'prisma-client';
import { PetMetadata as PetMetaDataInput, PrismaClient } from '@prisma/client';
import { PetMetadata } from '../types';

export const prismaClient = new PrismaClient()

export const createPetMetadata = async (data: PetMetadata) => {
  return prismaClient.petMetadata.create({ data: data as unknown as PetMetaDataInput });
};

export const getPetMetadataByInstagramPostId = async (id: string) => {
  return prismaClient.petMetadata.findFirst({
    where: {
      instagramPostId: id
    }
  });
};