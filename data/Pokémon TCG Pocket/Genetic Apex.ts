import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'
import { Mewtwo, Charizard, Pikachu } from './Genetic Apex/Boosters'

const set: Set = {
	id: "A1",

	name: {
		// de: "Unschlagbare Gene",
		en: "Genetic Apex",
		// es: "Genes Formidables",
		// fr: "Puissance Génétique",
		// it: "Geni Supremi",
		// pt: "Dominação Genética"
	},

	serie: serie,

	cardCount: {
		official: 226
	},

	releaseDate: "2024-10-30",

	boosters: [Mewtwo, Charizard, Pikachu]
}

export default set
