import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Clefable",
		'fr-fr': "Mélodelfe",
		'de-de': "Pixi"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [36],

	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Clefairy",
		'fr-fr': "Mélofée"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fairy Power",
				'fr-fr': "Pouvoir de fée",
				'de-de': "Feenmacht"
			},
			effect: {
				'en-us': "Return 1 of your Pokémon and all cards attached to it to your hand.",
				'fr-fr': "Reprenez un de vos Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
				'de-de': "Nimm 1 deiner Pokémon und alle an es angelegten Karten auf deine Hand zurück."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Moon Impact",
				'fr-fr': "Impact lunaire",
				'de-de': "Mondeinschlag"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "With its acute hearing, it can pick up sounds from far away. It usually hides in quiet places."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84346,
				cardmarket: 278975
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84346,
				cardmarket: 278975
			}
		},
	],

}

export default card
