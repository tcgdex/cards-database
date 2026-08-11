import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Bisharp)'

const card: Card = {
	dexId: [288],
	set: Set,

	name: {
		'en-us': "Vigoroth",
		'fr-fr': "Vigoroth",
		'es-es': "Vigoroth",
		'it-it': "Vigoroth",
		'pt-br': "Vigoroth",
		'de-de': "Muntier"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Slakoth",
		'fr-fr': "Parecool",
		'es-es': "Slakoth",
		'it-it': "Slakoth",
		'pt-br': "Slakoth",
		'de-de': "Bummelz"
	},

	stage: "Stage1",
	retreat: 2,

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 98175
	}
}

export default card