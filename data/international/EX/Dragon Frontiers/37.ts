import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Seadra δ",
		'fr-fr': "Hypocéan δ",
		'de-de': "Seemon"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		117,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Horsea",
		'fr-fr': "Hypotrempe"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'de-de': "Ramme"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Extra Ball",
				'fr-fr': "Boule supplémentaire",
				'de-de': "Extra-Ball"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Pokémon-ex, this attack does 30 damage plus 30 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon-ex, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wenn das Verteidigende Pokémon ein Pokémon-ex ist, fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277227
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
