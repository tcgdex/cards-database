import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Psychic Energy",
		'fr-fr': "Énergie Psy",
		'es-es': "Energía Psíquica",
		'it-it': "Energia Psico",
		'pt-br': "Energia Psíquica",
		'de-de': "Psycho-Energie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	energyType: "Normal",

	thirdParty: {
		cardmarket: 281473,
		tcgplayer: 88428
	}
}

export default card
