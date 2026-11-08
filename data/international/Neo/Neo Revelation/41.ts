import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Aipom",
		'fr-fr': "Capumain",
		'de-de': "Griffel"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		190,
	],

	hp: 40,

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
				'en-us': "Grab",
				'fr-fr': "Vivacité",
				'de-de': "Grabschen"
			},
			effect: {
				'en-us': "Choose a Trainer card attached to 1 of your opponent's Pokémon. Your opponent shuffles that card into his or her deck.",
				'fr-fr': "Choisissez une carte Dresseur attachée à l'un des Pokémon de votre adversaire. Votre adversaire doit mélanger cette carte à son deck.",
				'de-de': "Wähle eine Trainerkarte, die an ein Pokémon deines Gegners angelegt ist. Dein Gegner mischt diese Karte in sein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tail Punch",
				'fr-fr': "Coud'keu",
				'de-de': "Schwanzhieb"
			},

			damage: 20,

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
		'en-us': "It lives atop tall trees. When leaping from branch to branch, it deftly uses its tail for balance.",
		'fr-fr': "Il vit à la cime des arbres. Quand il saute de branche en branche, il utilise habilement sa queue pour assurer son équilibre."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274627,
				tcgplayer: 83486
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274627,
				tcgplayer: 83486
			}
		}
	]
}

export default card

