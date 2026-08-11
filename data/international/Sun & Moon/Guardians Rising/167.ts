import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Grass Energy",
		'fr-fr': "Énergie Plante",
		'es-es': "Energía Planta",
		'it-it': "Energia Erba",
		'pt-br': "Energia de Planta",
		'de-de': "Pflanze-Energie"
	},

	illustrator: undefined,
	rarity: "Secret Rare",
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
		cardmarket: 297614,
		tcgplayer: 131063
	}
}

export default card
