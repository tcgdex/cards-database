import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Manaphy",
		fr: "Manaphy",
		de: "Manaphy"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		490,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Deep Sea Swirl",
				fr: "Remous abyssal",
				de: "Tiefseewirbel"
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw 5 cards.",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez 5 cartes.",
				de: "Mische deine Handkarten in dein Deck. Ziehe danach 5 Karten."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse vague",
				de: "Wellenplatscher"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		en: "It starts its life with a wondrous power that permits it to bond with any kind of Pokémon."
	},

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279159
	}
}

export default card
