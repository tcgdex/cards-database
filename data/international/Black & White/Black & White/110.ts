import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Fighting Energy",
		'fr-fr': "Énergie Combat",
		'es-es': "Energía Lucha",
		'it-it': "Energia Combattimento",
		'pt-br': "Energia de Luta",
		'de-de': "Kampf-Energie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	effect: {
		'en-us': "",
		'fr-fr': "",
		'es-es': "",
		'it-it': "",
		'pt-br': "",
		'de-de': ""
	},

	thirdParty: {
		cardmarket: 279848,
		tcgplayer: 85446
	}
}

export default card
