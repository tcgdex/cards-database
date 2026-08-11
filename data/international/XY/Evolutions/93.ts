import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Water Energy",
		'fr-fr': "Énergie Eau",
		'es-es': "Energía Agua",
		'it-it': "Energia Acqua",
		'pt-br': "Energia de Água",
		'de-de': "Wasser-Energie"
	},

	rarity: "Common",
	category: "Energy",
	set: Set,
	energyType: "Normal",

	thirdParty: {
		cardmarket: 293455,
		tcgplayer: 124106
	}
}

export default card
