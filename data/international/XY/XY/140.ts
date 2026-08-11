import { Card } from 'models/database/card'
import Set from '../XY'

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
	rarity: "Common",
	category: "Energy",
	types: ["Fairy"],

	set: Set,
	energyType: "Normal",

	thirdParty: {
		cardmarket: 281477,
		tcgplayer: 85377
	}
}

export default card
