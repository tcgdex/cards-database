import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Latias)'

const card: Card = {
	dexId: [271],
	set: Set,

	name: {
		'en-us': "Lombre",
		'fr-fr': "Lombre",
		'es-es': "Lombre",
		'it-it': "Lombre",
		'pt-br': "Lombre",
		'de-de': "Lombrero"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Lotad",
		'fr-fr': "Nénupiot",
		'es-es': "Lotad",
		'it-it': "Lotad",
		'pt-br': "Lotad",
		'de-de': "Loturzel"
	},

	stage: "Stage1",
	retreat: 2,

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 98339
	}
}

export default card