import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Aipom",
		fr: "Capumain",
		de: "Griffel"
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
				en: "Grab",
				fr: "Vivacité",
				de: "Grabschen"
			},
			effect: {
				en: "Choose a Trainer card attached to 1 of your opponent's Pokémon. Your opponent shuffles that card into his or her deck.",
				fr: "Choisissez une carte Dresseur attachée à l'un des Pokémon de votre adversaire. Votre adversaire doit mélanger cette carte à son deck.",
				de: "Wähle eine Trainerkarte, die an ein Pokémon deines Gegners angelegt ist. Dein Gegner mischt diese Karte in sein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Punch",
				fr: "Coud'keu",
				de: "Schwanzhieb"
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
		fr: "Il vit à la cime des arbres. Quand il saute de branche en branche, il utilise habilement sa queue pour assurer son équilibre."
	},

	thirdParty: {
		cardmarket: 274627,
		tcgplayer: 83486
	}
}

export default card
