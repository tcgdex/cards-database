import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Gyarados GX",
		'fr-fr': "Léviator-GX",
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 230,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Rage",
				'fr-fr': "Draco-Rage",
			},

			damage: 130,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Beam GX",
				'fr-fr': "Ultralaser-GX",
			},
			effect: {
				'en-us': "(You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "(Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 240,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 396602,
		tcgplayer: 197660
	}
}

export default card
