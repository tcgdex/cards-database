import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Wigglytuff)'

const card: Card = {
	dexId: [161],
	set: Set,

	name: {
		'en-us': "Sentret",
		'fr-fr': "Fouinette",
		'es-es': "Sentret",
		'it-it': "Sentret",
		'pt-br': "Sentret",
		'de-de': "Wiesor"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 98190
	}
}

export default card