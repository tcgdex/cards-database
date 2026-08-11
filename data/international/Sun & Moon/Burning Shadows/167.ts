import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Fire Energy",
		'fr-fr': "Énergie Feu",
		'es-es': "Energía Fuego",
		'it-it': "Energia Fuoco",
		'pt-br': "Energia de Fogo",
		'de-de': "Feuer-Energie"
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
		cardmarket: 299565,
		tcgplayer: 138635
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
