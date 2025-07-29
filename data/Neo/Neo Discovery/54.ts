import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Dunsparce",
		fr: "Insolourdo",
		de: "Dummisel"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		206,
	],

	hp: 30,

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
				en: "Glare",
				fr: "Intimidation",
				de: "Giftblick"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est Paralysé.",
				de: "Wird eine Münze. Bei \"Kopf\" ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "Quand il se fait remarquer, ce Pokémon fuit à reculons en plantant furieusement sa queue dans le sol."
	},

	thirdParty: {
		cardmarket: 274565
	}
}

export default card
