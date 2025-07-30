import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Clefable",
		fr: "Mélodelfe",
		de: "Pixi"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		36,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Clefairy",
		fr: "Mélofée",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fairy Power",
				fr: "Pouvoir de fée",
				de: "Feenmacht"
			},
			effect: {
				en: "Return 1 of your Pokémon and all cards attached to it to your hand.",
				fr: "Reprenez un de vos Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
				de: "Nimm 1 deiner Pokémon und alle an es angelegten Karten auf deine Hand zurück."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Moon Impact",
				fr: "Impact lunaire",
				de: "Mondeinschlag"
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
		en: "With its acute hearing, it can pick up sounds from far away. It usually hides in quiet places."
	},

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278975
	}
}

export default card
