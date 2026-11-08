import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Sylveon)'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Fairy Energy",
		'fr-fr': "Énergie Fée",
		'es-es': "Energía Hada",
		'it-it': "Energia Folletto",
		'pt-br': "Energia de Fada",
		'de-de': "Feen-Energie"
	},

	types: ["Fairy"],
	rarity: "Common",
	category: "Energy",
	energyType: "Normal",

	thirdParty: {
		tcgplayer: 97973
	}
}

export default card