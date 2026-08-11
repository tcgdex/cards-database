import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Metal Energy",
		'fr-fr': "Énergie Métal",
		'es-es': "Energía Metálica",
		'it-it': "Energia Metallo",
		'pt-br': "Energia de Metal",
		'de-de': "Metall-Energie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	energyType: "Normal",

	thirdParty: {
		cardmarket: 281476,
		tcgplayer: 87354
	}
}

export default card
