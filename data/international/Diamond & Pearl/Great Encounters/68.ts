import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Glameow",
		'fr-fr': "Chaglam",
		'de-de': "Charmian"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		431,
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
				'en-us': "Captivate",
				'fr-fr': "Séduction",
				'de-de': "Liebreiz"
			},
			effect: {
				'en-us': "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon.",
				'fr-fr': "Échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs.",
				'de-de': "Tausche 1 Verteidigendes Pokémon gegen 1 Pokémon auf der Bank deines Gegners aus."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Schlitzer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It claws if displeased and purrs when affectionate. Its fickleness is very popular among some.",
	},

	thirdParty: {
		cardmarket: 277970,
		tcgplayer: 85759
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
