import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Fairy Energy",
		'fr-fr': "Énergie Fée",
		'es-es': "Energía Hada",
		'it-it': "Energia Folletto",
		'pt-br': "Energia de Fada",
		'de-de': "Feen-Energie"
	},

	illustrator: undefined,
	rarity: "Secret Rare",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",
	types: ["Fairy"],

	effect: {
		'en-us': "",
		'fr-fr': "",
		'es-es': "",
		'it-it': "",
		'pt-br': "",
		'de-de': ""
	},

	thirdParty: {
		cardmarket: 299567,
		tcgplayer: 138637
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
