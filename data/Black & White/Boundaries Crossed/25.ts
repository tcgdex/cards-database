import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Pignite",
		fr: "Grotichon",
		es: "Pignite",
		it: "Pignite",
		pt: "Pignite",
		de: "Ferkokel"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		499,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Tepig",
		fr: "Gruikui",
		de: "Floink"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
				de: "Walzer"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Firebreathing",
				fr: "Souffle-Feu",
				de: "Feuerhauch"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Whatever it eats becomes fuel for the flame in its stomach. When it is angered, the intensity of the flame increases.",
		de: "Nutzt Nahrung als Brennstoff, um das Feuer in seinem Magen zu schüren. Mit Wut im Bauch heizt es ungleich stärker."
	},

	thirdParty: {
		cardmarket: 280612,
		tcgplayer: 88062
	}
}

export default card
