import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Chikorita",
		fr: "Germignon",
		de: "Endivie"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		152,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nap",
				fr: "Tit'sieste",
				de: "Nickerchen"
			},
			effect: {
				en: "Remove 1 damage counter from Chikorita.",
				fr: "Retirez 1 marqueur de dégât à Germignon.",
				de: "Entferne 1 Schadensmarke von Endivie."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Reckless Charge",
				fr: "Attaque imprudente",
				de: "Waghalsiger Sturmangriff"
			},
			effect: {
				en: "Chikorita does 10 damage to itself.",
				fr: "Germignon s’inflige 10 dégâts.",
				de: "Endivie fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 30,

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
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 279696
	}
}

export default card
