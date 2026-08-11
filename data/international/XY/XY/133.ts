import { Card } from 'models/database/card'
import Set from '../XY'

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
	rarity: "Common",
	category: "Energy",
	set: Set,
	energyType: "Normal",

	thirdParty: {
		cardmarket: 281470,
		tcgplayer: 85468
	}
}

export default card
