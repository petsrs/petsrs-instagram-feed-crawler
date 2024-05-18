'use client';
import Link from "next/link"
import { Button } from '../components/ui/button';
import {  SelectValue, SelectTrigger, SelectItem, SelectContent, Select  } from '../components/ui/select';

export default function Component() {
  return (
    <>
      <header className="flex items-center justify-between h-16 px-4 md:px-6 border-b">
        <Link className="flex items-center gap-2" href="#">
          <PiIcon className="w-6 h-6" />
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
            <MenuIcon className="w-6 h-6" />
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
                    <CalendarIcon className="w-4 h-4" />
                    <span>2 anos</span>
                    <ItalicIcon className="w-4 h-4" />
                    <span>Macho</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <LocateIcon className="w-4 h-4" />
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
                    <CalendarIcon className="w-4 h-4" />
                    <span>5 anos</span>
                    <ItalicIcon className="w-4 h-4" />
                    <span>Fêmea</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <LocateIcon className="w-4 h-4" />
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
                    <CalendarIcon className="w-4 h-4" />
                    <span>1 ano</span>
                    <ItalicIcon className="w-4 h-4" />
                    <span>Fêmea</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <LocateIcon className="w-4 h-4" />
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
                    <CalendarIcon className="w-4 h-4" />
                    <span>3 anos</span>
                    <ItalicIcon className="w-4 h-4" />
                    <span>Macho</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <LocateIcon className="w-4 h-4" />
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

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function ItalicIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" x2="10" y1="4" y2="4" />
      <line x1="14" x2="5" y1="20" y2="20" />
      <line x1="15" x2="9" y1="4" y2="20" />
    </svg>
  )
}


function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PiIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="9" x2="9" y1="4" y2="20" />
      <path d="M4 7c0-1.7 1.3-3 3-3h13" />
      <path d="M18 20c-1.7 0-3-1.3-3-3V4" />
    </svg>
  )
}