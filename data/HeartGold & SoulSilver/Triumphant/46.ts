import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Nidorino",
		fr: "Nidorino",
		de: "Nidorino"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		33,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Nidoran♂",
		fr: "Nidoran♂",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Horn Attack",
				fr: "Koud’korne",
				de: "Hornattacke"
			},

			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lunge",
				fr: "Coup rapide",
				de: "Ausfall"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				de: "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 80,

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
		en: "Quick to anger, it stabs enemies with its horn to inject a powerful poison when it becomes agitated."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279576
	}
}

export default card
