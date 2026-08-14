import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Machop",
		fr: "Machoc",
		de: "Machollo"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		66,
	],

	hp: 40,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Chop",
				fr: "Coup tranchant",
				de: "Spaltschlag"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Punch",
				fr: "Koud'poing",
				de: "Boxhieb"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "When bored, this super-strong Pokémon trains by lifting rocks.",
		fr: "Quand il s'ennuie, ce Pokémon super fort s'entraîne en soulevant des rochers.",
		de: "Wenn ihm langweilig ist, hebt dieses superstarke Pokémon Felsbrocken als Training."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274725,
				tcgplayer: 86988
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274725,
				tcgplayer: 86988
			}
		}
	]
}

export default card
