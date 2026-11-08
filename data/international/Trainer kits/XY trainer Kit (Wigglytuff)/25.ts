import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Wigglytuff)'

const card: Card = {
	dexId: [39],
	set: Set,

	name: {
		'en-us': "Jigglypuff",
		'fr-fr': "Rondoudou",
		'es-es': "Jigglypuff",
		'it-it': "Jigglypuff",
		'pt-br': "Jigglypuff",
		'de-de': "Pummeluff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fairy"],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	resistances: [{
		type: "Darkness",
		value: "-20"
	}],

	thirdParty: {
		tcgplayer: 98202
	}
}

export default card