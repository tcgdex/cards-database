import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Bisharp",
		fr: "Scalproie",
		es: "Bisharp",
		it: "Bisharp",
		pt: "Bisharp",
		de: "Caesurio"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		625,
	],

	hp: 100,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Pawniard",
		fr: "Scalpion",
		de: "Gladiantri"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aerial Ace",
				fr: "Aéropique",
				de: "Aero-Ass"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Claw",
				fr: "Griffe Acier",
				de: "Metallklaue"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		en: "Bisharp pursues prey in the company of a large group of Pawniard. Then Bisharp finishes off the prey.",
		de: "Es rückt seinen Opfern mit einer Schar von Gladiantri im Gefolge auf den Pelz. Den letzten Hieb übernimmt es selbst."
	},

	thirdParty: {
		cardmarket: 280407,
		tcgplayer: 83845
	}
}

export default card
