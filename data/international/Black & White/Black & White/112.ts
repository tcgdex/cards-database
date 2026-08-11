import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Metal Energy",
		'fr-fr': "Énergie Métal",
		'es-es': "Energía Metálica",
		'it-it': "Energia Metallo",
		'pt-br': "Energia de Metal",
		'de-de': "Metall-Energie"
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
		cardmarket: 279850,
		tcgplayer: 87352
	}
}

export default card
