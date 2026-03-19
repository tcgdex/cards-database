import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Clefable",
		fr: "Mélodelfe",
		de: "Pixi"
	},

	illustrator: "sui",
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
		fr: "Mélofée"
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

	thirdParty: {
		cardmarket: 279644,
		tcgplayer: 84348
	}
}

export default card
