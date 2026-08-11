import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Latios)'

const card: Card = {
	dexId: [67],
	set: Set,

	name: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur",
		'es-es': "Machoke",
		'it-it': "Machoke",
		'pt-br': "Machoke",
		'de-de': "Maschock"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Machop",
		'fr-fr': "Machoc",
		'es-es': "Machop",
		'it-it': "Machop",
		'pt-br': "Machop",
		'de-de': "Machollo"
	},

	stage: "Stage1",
	retreat: 2,

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 98370
	}
}

export default card