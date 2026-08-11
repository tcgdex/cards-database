import { Set } from 'models/database/set'
import serie from '../Base'

const basep: Set = {
	id: "basep",

	name: {
		'en-us': "Wizards Black Star Promos",
		'fr-fr': "Wizards Black Star Promos",
		'it-it': "Wizards Black Star Promos",
		'es-es': "Wizards Black Star Promos",
		'de-de': "Wizards Black Star Promos",
	},

	serie: serie,
	tcgOnline: "PR",

	cardCount: {
		official: 53
	},

	releaseDate: "1999-07-01",

	thirdParty: {
		cardmarket: 1607
	}
}

export default basep
