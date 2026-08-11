import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Jynx",
		'fr-fr': "Lippoutou",
		'de-de': "Rossana"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [124],

	hp: 60,

	types: [
		"Water"
	],

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Lightweight",
			},
			effect: {
				'en-us': "You pay Colorless less to retreat Hoppip for each Grass Energy attached to it.",
			},
		},
	],
	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Ice Punch",
				'fr-fr': "Poinglace",
				'de-de': "Ice Punch"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Powder Snow",
				'fr-fr': "Poudreuse",
				'de-de': "Powder Snow"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "The Defending Pokémon is now Asleep."
			},
			damage: 20,

		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],
	weaknesses: [
		{
			type: "Metal",
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
			thirdParty: {
				tcgplayer: 86374,
				cardmarket: 274958
			},
		},
	],
}

export default card
