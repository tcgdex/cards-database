import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Cubone",
		'fr-fr': "Osselait",
		'de-de': "Tragosso"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [104],

	hp: 40,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Beat",
				'fr-fr': "Pichenette",
				'de-de': "Verprügler"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],

			name: {
				'en-us': "Bone Smash",
				'fr-fr': "Éclate-os",
				'de-de': "Knochenzertrümmerer"
			},

			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				'de-de': "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},

			damage: 30,
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84529,
				cardmarket: 274978
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84529,
				cardmarket: 274978
			},
		},
	],
}

export default card
