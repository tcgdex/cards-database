import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Water Energy",
		'fr-fr': "Énergie Eau",
		'es-es': "Energía Agua",
		'it-it': "Energia Acqua",
		'pt-br': "Energia de Água",
		'de-de': "Wasser-Energie"
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
		cardmarket: 311971,
		tcgplayer: 149149
	}
}

export default card
