import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Noivern)'

const card: Card = {
	dexId: [710],
	set: Set,

	name: {
		'en-us': "Pumpkaboo",
		'fr-fr': "Pitrouille",
		'es-es': "Pumpkaboo",
		'it-it': "Pumpkaboo",
		'pt-br': "Pumpkaboo",
		'de-de': "Irrbis"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",
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
		tcgplayer: 98006
	}
}

export default card