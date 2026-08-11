import { Card } from 'models/database/card'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Articuno",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		144,
	],
	hp: 80,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Aurora Veil",
			},
			effect: {
				'en-us': "As long as Articuno is your Active Pokémon, you Benched Pokémon are not affected by attacks. This power cannot be used if Articuno is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ice Beam",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 30,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		'en-us': "A legendary bird Pokémon that is said to appear to doomed people who are lost in icy mountains.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83648
			},
		}
	]
}

export default card
