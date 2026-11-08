import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Bayleef",
		'fr-fr': "Macronium",
		'de-de': "Lorblatt"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [153],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Chikorita",
		'fr-fr': "Germignon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Mysterious Powder",
				'fr-fr': "Poudre mystérieuse",
				'de-de': "Mysteriöses Puder"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch'herbe",
				'de-de': "Rasierblatt"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83745,
				cardmarket: 274946
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 83745,
				cardmarket: 274946
			},
		},
	],
}

export default card
