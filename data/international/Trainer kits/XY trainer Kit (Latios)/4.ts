import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Latios)'

const card: Card = {
	dexId: [112],
	set: Set,

	name: {
		'en-us': "Rhydon",
		'fr-fr': "Rhinoféros",
		'es-es': "Rhydon",
		'it-it': "Rhydon",
		'pt-br': "Rhydon",
		'de-de': "Rizeros"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Rhyhorn",
		'fr-fr': "Rhinocorne",
		'es-es': "Rhyhorn",
		'it-it': "Rhyhorn",
		'pt-br': "Rhyhorn",
		'de-de': "Rihorn"
	},

	stage: "Stage1",
	retreat: 4,

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 98349
	}
}

export default card