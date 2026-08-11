import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Fighting Energy",
		'fr-fr': "Énergie Combat",
		'es-es': "Energía Lucha",
		'it-it': "Energia Lotta",
		'pt-br': "Energia de Luta",
		'de-de': "Kampf-Energie"
	},

	rarity: "Common",
	category: "Energy",
	set: Set,
	energyType: "Normal",

	thirdParty: {
		cardmarket: 293458,
		tcgplayer: 124109
	}
}

export default card
