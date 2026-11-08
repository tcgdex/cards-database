import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Fraxure",
		'fr-fr': "Incisache",
		'es-es': "Fraxure",
		'it-it': "Fraxure",
		'pt-br': "Fraxure",
		'de-de': "Sharfax"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		611,
	],

	hp: 80,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Axew",
		'fr-fr': "Coupenotte",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Paralyzing Gaze",
				'fr-fr': "Regard Paralysant",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},

		},
		{
			cost: [
				"Fighting",
				"Metal",
			],
			name: {
				'en-us': "Dragon Claw",
				'fr-fr': "Dracogriffe",
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "A broken tusk will not grow back, so it diligently sharpens its tusks on river rocks after the end of a battle.",
	},

	thirdParty: {
		cardmarket: 281089,
		tcgplayer: 85561
	}
}

export default card
