import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Lotad",
		'fr-fr': "Nénupiot",
		'de-de': "Loturzel"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		270,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Swift Swim",
				'fr-fr': "Glissade",
				'de-de': "Swift Swim"
			},
			effect: {
				'en-us': "If Lotad has any Water Energy attached to it, Lotad's Retreat Cost is 0.",
				'fr-fr': "Si Nénupiot possède de l'Énergie Water, son coût de retraite est de 0.",
				'de-de': "If Lotad has any  Energy attached to it, Lotad's Retreat Cost is 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Blot",
				'fr-fr': "Pâté",
				'de-de': "Blot"
			},
			effect: {
				'en-us': "Remove 1 damage counter from Lotad.",
				'fr-fr': "Retirez à Nénupiot 1 marqueur de dégât.",
				'de-de': "Remove 1 damage counter from Lotad."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Jump On",
				'fr-fr': "Sauter",
				'de-de': "Jump On"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278419,
				tcgplayer: 86838
			},
		}
	]
}

export default card
