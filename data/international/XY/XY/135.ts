import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Lightning Energy",
		'fr-fr': "Énergie Electrik",
		'es-es': "Energía Rayo",
		'it-it': "Energia Lampo",
		'pt-br': "Energia de Raios",
		'de-de': "Elektro-Energie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	energyType: "Normal",

	thirdParty: {
		cardmarket: 281472,
		tcgplayer: 86784
	}
}

export default card
