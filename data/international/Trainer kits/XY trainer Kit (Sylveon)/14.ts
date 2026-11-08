import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Sylveon)'

const card: Card = {
	dexId: [210],
	set: Set,

	name: {
		'en-us': "Granbull",
		'fr-fr': "Granbull",
		'es-es': "Granbull",
		'it-it': "Granbull",
		'pt-br': "Granbull",
		'de-de': "Granbull"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fairy"],

	evolveFrom: {
		'en-us': "Snubbull",
		'fr-fr': "Snubbull",
		'es-es': "Snubbull",
		'it-it': "Snubbull",
		'pt-br': "Snubbull",
		'de-de': "Snubbull"
	},

	stage: "Stage1",
	retreat: 3,

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	resistances: [{
		type: "Darkness",
		value: "-20"
	}],

	thirdParty: {
		tcgplayer: 97979
	}
}

export default card