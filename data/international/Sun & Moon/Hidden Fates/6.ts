import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Pinsir GX",
		'fr-fr': "Scarabrute-GX",
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		127,
	],

	hp: 180,

	types: [
		"Grass",
	],

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Superpowered Horns",
				'fr-fr': "Cornes Surpuissantes",
			},

			damage: 110,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Guillotine GX",
				'fr-fr': "Guillotine-GX",
			},
			effect: {
				'en-us': "(You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "(Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 394787,
		tcgplayer: 197648
	}
}

export default card
