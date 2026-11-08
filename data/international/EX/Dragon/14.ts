import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Dragonair",
		'fr-fr': "Draco",
		'de-de': "Dragonir"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [148],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Dratini",
		'fr-fr': "Minidraco"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Dazzle Blast",
				'fr-fr': "Explosion de lumière",
				'de-de': "Dazzle Blast"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Confused."
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
				'en-us': "Healing Wave",
				'fr-fr': "Vague guérisseuse",
				'de-de': "Healing Wave"
			},
			effect: {
				'en-us': "Remove 1 damage counter from each of your Active Pokémon.",
				'fr-fr': "Retirez un marqueur de dégât à chacun de vos Pokémon Actifs.",
				'de-de': "Remove 1 damage counter from each of your Active Pokémon."
			},
			damage: 30,

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
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84899,
				cardmarket: 275891
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84899,
				cardmarket: 275891
			},
		},
	],

}

export default card
