import { Set } from '../../interfaces'
import serie from '../Base'

const base1: Set = {
	id: "base1",

	name: {
		en: "Base Set",
		fr: "Set de Base",
		es: "Edición Básica",
		it: "Set Base",
		de: "Grundset",
		pt: "Coleção Básica",
		nl: 'Basis Set'
	},

	serie: serie,
	tcgOnline: "BS",

	cardCount: {
		official: 102
	},

	releaseDate: "1999-01-09",

	abbreviations: {
		official: "BS",
		fr: "BAS"
	}
}

export default base1
