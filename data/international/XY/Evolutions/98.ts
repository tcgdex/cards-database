import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Metal Energy",
		'fr-fr': "Énergie Métal",
		'es-es': "Energía Metálica",
		'it-it': "Energia Metallo",
		'pt-br': "Energia de Metal",
		'de-de': "Metall-Energie"
	},

	rarity: "Common",
	category: "Energy",
	set: Set,
	energyType: "Normal",

	thirdParty: {
		cardmarket: 293460,
		tcgplayer: 124111
	}
}

export default card
