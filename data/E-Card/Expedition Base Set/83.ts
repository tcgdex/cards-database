import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Hoppip",
		fr: "Lippoutou",
		de: "Rossana"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [187],

	hp: 40,

	types: [
		"Grass"
	],

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Lightweight",
			},
			effect: {
				en: "You pay Colorless less to retreat Hoppip for each Grass Energy attached to it.",
			},
		},
	],,
	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Careless Tackle",
				fr: "Poinglace",
				de: "Ice Punch"
			},
			effect: {
				en: "Hoppip does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Powder Snow",
				fr: "Poudreuse",
				de: "Powder Snow"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "The Defending Pokémon is now Asleep."
			},
			damage: 20,

		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],,
	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86374,
				cardmarket: 274958
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
