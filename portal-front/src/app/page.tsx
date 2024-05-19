import Link from 'next/link';
import { Button } from '../components/ui/button';
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from '../components/ui/select';
import { PetBaseMetadata, PetInformation } from '@crawler/types';
import Image from 'next/image';

function translateSpecies(species: 'cat' | 'dog' | 'horse' | 'bird' | 'cow' | 'pig' | 'rat' | 'other' | undefined): string {
  if (!species) return ''

  const speciesMap: { [key in typeof species]: string } = {
    'cat': 'Gato',
    'dog': 'Cachorro',
    'horse': 'cavalo',
    'bird': 'pássaro',
    'cow': 'vaca',
    'pig': 'porco',
    'rat': 'rato',
    'other': 'outro',
  };
  return speciesMap[species];
}

function translateAgeGroup(ageGroup: 'young' | 'adult' | 'senior' | undefined): string {
  if (!ageGroup) return ''
  const ageGroupMap: { [key in typeof ageGroup]: string } = {
    'young': 'Jovem',
    'adult': 'Adulto',
    'senior': 'Idoso',
  };
  return ageGroupMap[ageGroup];
}

function translateSex(sex: 'male' | 'female' | undefined): string {
  if (!sex) return ''
  const sexMap: { [key in typeof sex]: string } = {
    'male': 'Macho',
    'female': 'Fêmea',
  };
  return sexMap[sex];
}

const getPetData = async () => {
  try {
    console.log('oiiiii');
    const response = await fetch('http://localhost:3000/api/pets/');
    return await response.json() as unknown as PetBaseMetadata[];
  } catch (err) {
    return [] as PetBaseMetadata[];
  }
};

export default async function Component() {
  const pets = await getPetData();
  console.log('pets', pets);
  return (
    <>
      <header className="flex items-center justify-between h-16 px-4 md:px-6 border-b">
        <Link className="flex items-center gap-2" href="#">
          <span className="text-lg font-bold">Reecontrar.Pet</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4">

        </nav>
        <div className="flex items-center gap-2">
          <Button className="md:hidden" size="icon" variant="secondary">
          </Button>
          <Button size="sm" variant="outline">
            Adicionar Animal
          </Button>
        </div>
      </header>
      <section className="bg-gray-100  py-8">
        <div className="container px-4 md:px-6">
          <form className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Tipo de Animal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dog">Cachorro</SelectItem>
                <SelectItem value="cat">Gato</SelectItem>
                <SelectItem value="bird">Pássaro</SelectItem>
                <SelectItem value="other">Outro</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Raça" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="labrador">Labrador</SelectItem>
                <SelectItem value="golden-retriever">Golden Retriever</SelectItem>
                <SelectItem value="persian">Persa</SelectItem>
                <SelectItem value="siamese">Siamês</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Tamanho" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Pequeno</SelectItem>
                <SelectItem value="medium">Médio</SelectItem>
                <SelectItem value="large">Grande</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Cor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="black">Preto</SelectItem>
                <SelectItem value="white">Branco</SelectItem>
                <SelectItem value="brown">Marrom</SelectItem>
                <SelectItem value="mixed">Misto</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Gênero" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Macho</SelectItem>
                <SelectItem value="female">Fêmea</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Idade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="baby">Filhote</SelectItem>
                <SelectItem value="young">Jovem</SelectItem>
                <SelectItem value="adult">Adulto</SelectItem>
                <SelectItem value="senior">Idoso</SelectItem>
              </SelectContent>
            </Select>
          </form>
        </div>
      </section>
      <section className="py-8">
        <div className="container px-4 md:px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pets?.map(item => {
                const information = item.crawledInformation as PetInformation;
                return (
                  <div key={item.id}
                       className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">

                    <Link className="block" href="#">
                      <div className="relative overflow-hidden">
                        <Image
                          alt="Imagem do Animal"
                          className="w-full h-48 object-cover"
                          height={300}
                          loading="lazy"
                          src={item?.pictureUrl || ''}
                          style={{
                            aspectRatio: '1920/1080',
                            objectFit: 'cover'
                          }}
                          width={400}
                        />

                        <div
                          className="absolute inset-0 w-full bg-gradient-to-t from-gray-900 to-transparent">
                          <div className="h-full w-full relative">

                            <h3
                              className="absolute z-50 bottom-2 left-2 font-semibold text-white">{information?.name}</h3>
                            <span
                              className="absolute top-2 right-2 bg-white rounded text-black text-xs p-2">{(item.crawledInformation as PetInformation)?.state?.toUpperCase() === 'SEARCHING_PET' ? 'Perdido' : 'Procurando dono'}</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex flex-col items-start gap-1 text-sm text-gray-500 dark:text-gray-400">
                          <span>{translateSpecies(information?.species)}</span>
                          <span>{translateAgeGroup(information?.ageGroup)}</span>
                          <span>{information?.colors?.join(', ')}</span>
                          <span>{translateSex(information?.sex)}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
    </>
  );
}