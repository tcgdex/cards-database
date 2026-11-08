import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Lightning Energy",
		'fr-fr': "Énergie Electrik",
		'es-es': "Energía Rayo",
		'it-it': "Energia Lampo",
		'pt-br': "Energia de Raios",
		'de-de': "Elektro-Energie"
	},

	rarity: "Common",
	category: "Energy",
	set: Set,
	energyType: "Normal",

	thirdParty: {
		cardmarket: 293456,
		tcgplayer: 124107
	}
}

export default card
