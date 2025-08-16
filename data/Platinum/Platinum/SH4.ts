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
				de: "Swift Swim"
			},
			effect: {
				en: "If Lotad has any Water Energy attached to it, Lotad's Retreat Cost is 0.",
				fr: "Si Nénupiot possède de l'Énergie Water, son coût de retraite est de 0.",
				de: "If Lotad has any  Energy attached to it, Lotad's Retreat Cost is 0."
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
				de: "Blot"
			},
			effect: {
				en: "Remove 1 damage counter from Lotad.",
				fr: "Retirez à Nénupiot 1 marqueur de dégât.",
				de: "Remove 1 damage counter from Lotad."
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
				de: "Jump On"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
				de: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage."
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

	thirdParty: {
		cardmarket: 278419
	}
}

export default card
