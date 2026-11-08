import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Wigglytuff)'

const card: Card = {
	dexId: [16],
	set: Set,

	name: {
		'en-us': "Pidgey",
		'fr-fr': "Roucool",
		'es-es': "Pidgey",
		'it-it': "Pidgey",
		'pt-br': "Pidgey",
		'de-de': "Taubsi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	thirdParty: {
		tcgplayer: 98191
	}
}

export default card