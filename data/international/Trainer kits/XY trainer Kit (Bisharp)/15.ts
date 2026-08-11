import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Bisharp)'

const card: Card = {
	dexId: [287],
	set: Set,

	name: {
		'en-us': "Slakoth",
		'fr-fr': "Parecool",
		'es-es': "Slakoth",
		'it-it': "Slakoth",
		'pt-br': "Slakoth",
		'de-de': "Bummelz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 3,

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 98164
	}
}

export default card