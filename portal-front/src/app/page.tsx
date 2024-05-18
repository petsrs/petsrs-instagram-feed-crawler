'use client';
import Link from "next/link"
import { Button } from '../components/ui/button';
import {  SelectValue, SelectTrigger, SelectItem, SelectContent, Select  } from '../components/ui/select';

export default function Component() {
  return (
    <>
      <header className="flex items-center justify-between h-16 px-4 md:px-6 border-b">
        <Link className="flex items-center gap-2" href="#">
          <span className="text-lg font-bold">PetFinder</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
            Início
          </Link>
          <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
            Animais
          </Link>
          <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
            Sobre
          </Link>
          <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
            Contato
          </Link>
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
            <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Link className="block" href="#">
                <img
                  alt="Imagem do Animal"
                  className="w-full h-48 object-cover"
                  height={300}
                  src="placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Buddy</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>2 anos</span>
                    <span>Macho</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>Nova York, NY</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Link className="block" href="#">
                <img
                  alt="Imagem do Animal"
                  className="w-full h-48 object-cover"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Whiskers</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>5 anos</span>
                    <span>Fêmea</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>Los Angeles, CA</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Link className="block" href="#">
                <img
                  alt="Imagem do Animal"
                  className="w-full h-48 object-cover"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Daisy</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>1 ano</span>
                    <span>Fêmea</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>Chicago, IL</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Link className="block" href="#">
                <img
                  alt="Imagem do Animal"
                  className="w-full h-48 object-cover"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Max</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>3 anos</span>
                    <span>Macho</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>Miami, FL</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}