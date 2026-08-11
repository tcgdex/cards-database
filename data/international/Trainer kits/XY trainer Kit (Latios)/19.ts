import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Latios)'

const card: Card = {
	dexId: [301],
	set: Set,

	name: {
		'en-us': "Delcatty",
		'fr-fr': "Delcatty",
		'es-es': "Delcatty",
		'it-it': "Delcatty",
		'pt-br': "Delcatty",
		'de-de': "Enekoro"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Skitty",
		'fr-fr': "Skitty",
		'es-es': "Skitty",
		'it-it': "Skitty",
		'pt-br': "Skitty",
		'de-de': "Eneco"
	},

	stage: "Stage1",
	retreat: 1,

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 98373
	}
}

export default card