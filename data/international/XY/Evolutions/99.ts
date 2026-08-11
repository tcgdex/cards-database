import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Fairy Energy",
		'fr-fr': "Énergie Fée",
		'es-es': "Energía Hada",
		'it-it': "Energia Folletto",
		'pt-br': "Energia de Fada",
		'de-de': "Feen-Energie"
	},
	types: ["Fairy"],

	rarity: "Common",
	category: "Energy",
	set: Set,
	energyType: "Normal",

	thirdParty: {
		cardmarket: 293461,
		tcgplayer: 124112
	}
}

export default card
