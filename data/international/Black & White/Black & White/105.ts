import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Grass Energy",
		'fr-fr': "Énergie Plante",
		'es-es': "Energía Planta",
		'it-it': "Energia Erba",
		'pt-br': "Energia de Grama",
		'de-de': "Pflanze-Energie"
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
		cardmarket: 279843,
		tcgplayer: 85881
	}
}

export default card
