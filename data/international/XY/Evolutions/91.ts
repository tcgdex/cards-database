import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Grass Energy",
		'fr-fr': "Énergie Plante",
		'es-es': "Energía Planta",
		'it-it': "Energia Erba",
		'pt-br': "Energia de Grama",
		'de-de': "Pflanze-Energie"
	},

	rarity: "Common",
	category: "Energy",
	set: Set,
	energyType: "Normal",

	thirdParty: {
		cardmarket: 293453,
		tcgplayer: 124104
	}
}

export default card
