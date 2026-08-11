import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Latias)'

const card: Card = {
	dexId: [283],
	set: Set,

	name: {
		'en-us': "Surskit",
		'fr-fr': "Arakdo",
		'es-es': "Surskit",
		'it-it': "Surskit",
		'pt-br': "Surskit",
		'de-de': "Gehweiher"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 98336
	}
}

export default card