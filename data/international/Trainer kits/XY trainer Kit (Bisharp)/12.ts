import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Bisharp)'

const card: Card = {
	dexId: [399],
	set: Set,

	name: {
		'en-us': "Bidoof",
		'fr-fr': "Keunotor",
		'es-es': "Bidoof",
		'it-it': "Bidoof",
		'pt-br': "Bidoof",
		'de-de': "Bidiza"
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
		tcgplayer: 98161
	}
}

export default card