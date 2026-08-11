import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Bagon",
		'fr-fr': "Draby",
		'de-de': "Kindwurm"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [371],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Paralyzing Gaze",
				'fr-fr': "Regard paralysant",
				'de-de': "Paralyzing Gaze"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Combustion",
				'fr-fr': "Fournaise",
				'de-de': "Combustion"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
		{
			type: "Fire",
			value: "-30"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83691,
				cardmarket: 275900
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 83691,
				cardmarket: 275900
			},
		},
	],

}

export default card
