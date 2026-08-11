import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Noivern)'

const card: Card = {
	dexId: [711],
	set: Set,

	name: {
		'en-us': "Gourgeist",
		'fr-fr': "Banshitrouye",
		'es-es': "Gourgeist",
		'it-it': "Gourgeist",
		'pt-br': "Gourgeist",
		'de-de': "Pumpdjinn"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Pumpkaboo",
		'fr-fr': "Pitrouille",
		'es-es': "Pumpkaboo",
		'it-it': "Pumpkaboo",
		'pt-br': "Pumpkaboo",
		'de-de': "Irrbis"
	},

	stage: "Stage1",
	retreat: 2,

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	thirdParty: {
		tcgplayer: 97997
	}
}

export default card