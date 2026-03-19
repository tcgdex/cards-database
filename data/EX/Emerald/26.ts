import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Dodrio",
		fr: "Dodrio",
		de: "Dodri"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		85,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Doduo",
		fr: "Doduo"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Smash Kick",
				fr: "Coud'pattes",
				de: "Smash Kick"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Smash Turn",
				fr: "Tour fracassant",
				de: "Smash Turn"
			},
			effect: {
				en: "After your attack, you may switch Dodrio with 1 of your Benched Pokémon.",
				fr: "Après votre attaque, vous pouvez échanger Dodrio avec 1 des Pokémon de votre Banc.",
				de: "After your attack, you may switch Dodrio with 1 of your benched Pokémon."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 84851,
		cardmarket: 276537
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
