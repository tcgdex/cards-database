import { Set } from '../../interfaces'
import serie from '../Base'

const base1: Set = {
	id: "base1",

	name: {
		en: "Base Set",
		fr: "Set de Base"
	},

	serie: serie,
	tcgOnline: "BS",

	cardCount: {
		official: 102
	},

	releaseDate: "1999-01-09",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: true
	}
}

export default base1
