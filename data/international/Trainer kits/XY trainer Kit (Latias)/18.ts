import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Latias)'

const card: Card = {
	dexId: [253],
	set: Set,

	name: {
		'en-us': "Grovyle",
		'fr-fr': "Massko",
		'es-es': "Grovyle",
		'it-it': "Grovyle",
		'pt-br': "Grovyle",
		'de-de': "Reptain"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Treecko",
		'fr-fr': "Arcko",
		'es-es': "Treecko",
		'it-it': "Treecko",
		'pt-br': "Treecko",
		'de-de': "Geckarbor"
	},

	stage: "Stage1",
	retreat: 1,

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 98337
	}
}

export default card