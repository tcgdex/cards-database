import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Latias)'

const card: Card = {
	dexId: [252],
	set: Set,

	name: {
		'en-us': "Treecko",
		'fr-fr': "Arcko",
		'es-es': "Treecko",
		'it-it': "Treecko",
		'pt-br': "Treecko",
		'de-de': "Geckarbor"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 98331
	}
}

export default card