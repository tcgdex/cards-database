import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Gyarados",
		fr: "Léviator",
		es: "Gyarados",
		it: "Gyarados",
		pt: "Gyarados",
		de: "Garados"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe",
		de: "Karpador"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sharp Fang",
				fr: "Croc Aiguisé",
				de: "Scharfe Fänge"
			},

			damage: 60,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swing Around",
				fr: "Balançoire",
				de: "Gegenschwung"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 30 weitere Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "Once it begins to rampage, a Gyarados will burn everything down, even in a harsh storm.",
		de: "Wütet ein Garados, wird es alles niederbrennen. Dies geschieht selbst während eines Sturms."
	},

	thirdParty: {
		cardmarket: 280463,
		tcgplayer: 86000
	}
}

export default card
