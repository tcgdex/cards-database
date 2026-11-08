import { Card } from 'models/database/card'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		'en-us': "Luxio",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		404,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Shinx",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Fasten Claws",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 30 more damage.",
			},
			damage: "10+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Thunder Fang",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	description: {
		'en-us': "Its claws loose electricity with enough amperage to cause fainting. They live in small groups."
	},

	retreat: 0,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278409,
				tcgplayer: 86941
			}
		},
		{
			type: "holo",
			foil: "cracked-ice",
			thirdParty: {
				cardmarket: 278409,
				tcgplayer: 86941
			}
		},
	],
}

export default card
