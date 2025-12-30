import { SupportedLanguages } from '../../../interfaces'
import { FileFunction } from '../compilerInterfaces'
import { getAllSpecies, speciesToPokedexSpecies } from '../utils/pokedexUtil'

const fn: FileFunction = async (lang: SupportedLanguages) => {
	const species = await getAllSpecies()
	return species
		.map((s) => speciesToPokedexSpecies(s, lang))
		.filter((s): s is NonNullable<typeof s> => s !== undefined)
}

export default fn

