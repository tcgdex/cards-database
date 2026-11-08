import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Suicune)'

const card: Card = {
	dexId: [657],
	set: Set,

	name: {
		'en-us': "Frogadier",
		'fr-fr': "Croâporal",
		'es-es': "Frogadier",
		'it-it': "Frogadier",
		'pt-br': "Frogadier",
		'de-de': "Amphizel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Froakie",
		'fr-fr': "Grenousse",
		'es-es': "Froakie",
		'it-it': "Froakie",
		'pt-br': "Froakie",
		'de-de': "Froxy"
	},

	stage: "Stage1",
	retreat: 1,

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 118841
	}
}

export default card