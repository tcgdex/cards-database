import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Psychic Energy",
		'fr-fr': "Énergie Psy",
		'es-es': "Energía Psíquica",
		'it-it': "Energia Psico",
		'pt-br': "Energia Psíquica",
		'de-de': "Psycho-Energie"
	},

	rarity: "Common",
	category: "Energy",
	set: Set,
	energyType: "Normal",

	thirdParty: {
		cardmarket: 293457,
		tcgplayer: 124108
	}
}

export default card
