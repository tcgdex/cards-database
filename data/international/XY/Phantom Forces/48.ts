import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Roggenrola",
		'fr-fr': "Nodulithe",
		'es-es': "Roggenrola",
		'it-it': "Roggenrola",
		'pt-br': "Roggenrola",
		'de-de': "Kiesling"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		524,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its ear is hexagonal in shape. Compressed underground, its body is as hard as steel.",
	},

	thirdParty: {
		cardmarket: 281854,
		tcgplayer: 94506
	}
}

export default card
