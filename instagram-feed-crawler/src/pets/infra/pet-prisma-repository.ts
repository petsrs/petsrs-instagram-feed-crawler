// import { prismaClient } from 'prisma-client';
import { PetMetadata as PetMetadataInput, PrismaClient } from '@prisma/client';
import { PetMetadata } from '../types';


export class PetsRepository {

    constructor(
        private readonly prismaClient: PrismaClient
    ) {}

    async create(data: PetMetadata) {
        return this.prismaClient.petMetadata.create({ data: data as unknown as PetMetadataInput});
    }

    async findByInstagramPostId(id: string) {
        return this.prismaClient.petMetadata.findFirst({
            where: {
                instagramPostId: id
            }
        });
    }
}
