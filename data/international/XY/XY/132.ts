import { Card } from 'models/database/card'
import Set from '../XY'

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
	energyType: "Normal",

	thirdParty: {
		cardmarket: 281469,
		tcgplayer: 85883
	}
}

export default card
