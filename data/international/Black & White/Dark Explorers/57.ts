import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Excadrill",
		'fr-fr': "Minotaupe",
		'es-es': "Excadrill",
		'it-it': "Excadrill",
		'pt-br': "Excadrill",
		'de-de': "Stalobor"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		530,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Drilbur",
		'fr-fr': "Rototaupe"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Reinforced Drill",
				'fr-fr': "Perceuse Renforcée"
			},
			effect: {
				'en-us': "If this Pokémon has a Pokémon Tool card attached to it, this attack does 30 more damage.",
				'fr-fr': "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires."
			},
			damage: 50,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mach Claw",
				'fr-fr': "Instagriffe"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It can help in tunnel construction. Its drill has evolved into steel strong enough to bore through iron plates.",
	},

	thirdParty: {
		cardmarket: 280384,
		tcgplayer: 85339
	}
}

export default card
