import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Fire Energy",
		'fr-fr': "Énergie Feu",
		'es-es': "Energía Fuego",
		'it-it': "Energia Fuoco",
		'pt-br': "Energia de Fogo",
		'de-de': "Feuer-Energie"
	},

	rarity: "Common",
	category: "Energy",
	set: Set,
	energyType: "Normal",

	thirdParty: {
		cardmarket: 293454,
		tcgplayer: 124105
	}
}

export default card
