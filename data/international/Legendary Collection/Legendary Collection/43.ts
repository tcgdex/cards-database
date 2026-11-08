import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Golduck"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [55],

	hp: 70,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Psyduck"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psyshock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Beam"
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
		'en-us': "Often seen swimming elegantly by lake shores. It is often mistaken for the Japanese monster, Kappa."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274808,
				tcgplayer: 85812
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85812,
				cardmarket: 274808
			}
		}
	],

}

export default card
