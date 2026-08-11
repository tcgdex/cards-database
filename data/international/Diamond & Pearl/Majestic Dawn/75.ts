import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Starly",
		'fr-fr': "Étourmi",
		'de-de': "Staralili"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		396,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Whirlwind",
				'fr-fr': "Cyclone",
				'de-de': "Wirbelwind"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
				'de-de': "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flap",
				'fr-fr': "Battement",
				'de-de': "Flattern"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Usually with a large flock, it is barely noticeable when alone. Its cries are very strident.",
	},

	thirdParty: {
		cardmarket: 278124,
		tcgplayer: 89523
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
