import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Roselia",
		'fr-fr': "Roselia",
		'de-de': "Roselia"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		315,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sleep Powder",
				'fr-fr': "Poudre dodo",
				'de-de': "Schlafpuder"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch'herbe",
				'de-de': "Rasierblatt"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "ROSELIA raised on clean drinking water are known to grow vividly colored flowers.",
	},

	thirdParty: {
		cardmarket: 277815,
		tcgplayer: 88820
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
