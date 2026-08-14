import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Chansey",
		fr: "Leveinard",
		de: "Chaneira"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		113,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Slap",
				fr: "Torgnoles",
				de: "Duplexhieb"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf zwei Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "20x",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Egg Toss",
				fr: "Lance Œuf",
				de: "Eierwurf"
			},

			effect: {
				en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Si vous obtenez un pile, cette attaque ne fait rien.",
				de: "Wirf zwei Münzen. Wenn mindestens eine von beiden „Zahl“ zeigt, hat dieser Angriff keine Auswirkungen."
			},

			damage: 80
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
	retreat: 2,


	description: {
		en: "It holds its egg carefully when moving so as not to break it. Still, it is fast enough to disappear in the blink of an eye.",
		fr: "Il serre précautionneusement son œuf pour ne pas le casser quand il bouge. Cependant, il reste assez rapide pour disparaître en un clin d'œil.",
		de: "Es hält sein Ei beim Herumlaufen sehr vorsichtig fest, damit es nicht zerbricht. Trotzdem ist es noch schnell genug, um blitzschnell zu verschwinden."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274683,
				tcgplayer: 84170
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274683,
				tcgplayer: 84170
			}
		}
	]
}

export default card
