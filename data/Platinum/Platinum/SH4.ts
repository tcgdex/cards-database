import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Lotad",
		fr: "Nénupiot",
		de: "Loturzel"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		270,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Swift Swim",
				fr: "Glissade",
				de: "Wassertempo"
			},
			effect: {
				en: "If Lotad has any Water Energy attached to it, Lotad's Retreat Cost is 0.",
				fr: "Si Nénupiot possède de l'Énergie Water, son coût de retraite est de 0.",
				de: "Wenn an Loturzel mindestens 1 {W}-Energie angelegt ist, hat Loturzel Rückzugskosten 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Blot",
				fr: "Pâté",
				de: "Klecks"
			},
			effect: {
				en: "Remove 1 damage counter from Lotad.",
				fr: "Retirez à Nénupiot 1 marqueur de dégât.",
				de: "Entferne 1 Schadensmarke von Loturzel."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Jump On",
				fr: "Sauter",
				de: "Draufspringen"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278419,
				tcgplayer: 86838
			},
		}
	]
}

export default card
