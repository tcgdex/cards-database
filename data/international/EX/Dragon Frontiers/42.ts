import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Vibrava δ",
		'fr-fr': "Vibraninf δ",
		'de-de': "Vibrava"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		329,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Trapinch",
		'fr-fr': "Kraknoix"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'de-de': "Biss"
			},

			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Sonic Noise",
				'fr-fr': "Bruit supersonique",
				'de-de': "Schallender Lärm"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Pokémon-ex, that Pokémon is now Confused.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon-ex, il est maintenant Confus.",
				'de-de': "Wenn das Verteidigende Pokémon ein Pokémon-ex ist, ist dieses Pokémon jetzt verwirrt."
			},
			damage: 30,

		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277229
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["jun-hasebe"]
		}
	]
}

export default card
