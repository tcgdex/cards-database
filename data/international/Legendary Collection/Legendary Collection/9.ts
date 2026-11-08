import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Dark Vaporeon"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [134],

	hp: 60,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Eevee"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bite"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Whirlpool"
			},
			effect: {
				'en-us': "If the Defending Pokémon has any Energy cards attached to it, choose 1 of them and discard it."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "A Pokémon capable of controlling water, so it is capable of creating giant whirlpools."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274774,
				tcgplayer: 84664
			}
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84664,
				cardmarket: 274774
			}
		}
	],

}

export default card
