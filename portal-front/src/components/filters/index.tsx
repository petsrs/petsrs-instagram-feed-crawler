'use client';
import { MultiSelect, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { filters } from '../../lib/utils/constants';
import MultiSelectFormField from '../ui/multi-select';

export default function Filters () {

  return (
    <form className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Tipo de Animal" />
        </SelectTrigger>
        <SelectContent>
          {filters?.species?.map(animalType => (
            <SelectItem key={animalType.key} value={animalType.key}>{animalType.value}</SelectItem>
          ))}
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
          {filters?.colors?.map(color => (
            <SelectItem key={color.key} value={color.key}>{color.value}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <MultiSelect
        options={filters.colors.map(item => item.value)}
        onChange={console.log}
        value={[]}
      />
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
  )
}