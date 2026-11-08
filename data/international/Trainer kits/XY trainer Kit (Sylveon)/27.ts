import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Sylveon)'

const card: Card = {
	dexId: [209],
	set: Set,

	name: {
		'en-us': "Snubbull",
		'fr-fr': "Snubbull",
		'es-es': "Snubbull",
		'it-it': "Snubbull",
		'pt-br': "Snubbull",
		'de-de': "Snubbull"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fairy"],
	stage: "Basic",
	retreat: 2,

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	resistances: [{
		type: "Darkness",
		value: "-20"
	}],

	thirdParty: {
		tcgplayer: 97992
	}
}

export default card