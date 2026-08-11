import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Lightning Energy",
		'fr-fr': "Énergie Électrique",
		'es-es': "Energía Rayo",
		'it-it': "Energia Lampo",
		'pt-br': "Energia de Raios",
		'de-de': "Elektro-Energie"
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
		cardmarket: 297615,
		tcgplayer: 131064
	}
}

export default card
