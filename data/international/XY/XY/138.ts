import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Darkness Energy",
		'fr-fr': "Énergie Obscurité",
		'es-es': "Energía Oscura",
		'it-it': "Energia Oscurità",
		'pt-br': "Energia de Escuridão",
		'de-de': "Finsternis-Energie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	energyType: "Normal",

	thirdParty: {
		cardmarket: 281475,
		tcgplayer: 84681
	}
}

export default card
