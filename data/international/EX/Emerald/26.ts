import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Dodrio",
		'fr-fr': "Dodrio",
		'de-de': "Dodri"
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
		'en-us': "Doduo",
		'fr-fr': "Doduo"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Smash Kick",
				'fr-fr': "Coud'pattes",
				'de-de': "Smash Kick"
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
				'en-us': "Smash Turn",
				'fr-fr': "Tour fracassant",
				'de-de': "Smash Turn"
			},
			effect: {
				'en-us': "After your attack, you may switch Dodrio with 1 of your Benched Pokémon.",
				'fr-fr': "Après votre attaque, vous pouvez échanger Dodrio avec 1 des Pokémon de votre Banc.",
				'de-de': "After your attack, you may switch Dodrio with 1 of your benched Pokémon."
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
			thirdParty: {
				tcgplayer: 84851,
				cardmarket: 276537
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 84851,
				cardmarket: 276537
			},
		}
	],
}

export default card
