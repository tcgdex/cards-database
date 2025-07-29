import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Voltorb",
		fr: "Voltorbe",
		de: "Voltobal"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		100,
	],

	hp: 40,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Magnetic Bomb",
				fr: "Bombe magnétique",
				de: "Magnetische Bombe"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage. If tails, Voltorb does 10 damage to itself.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires. Si c’est pile, Voltorbe s’inflige 10 dégâts.",
				de: "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 20 Schadenspunkte plus 10 weiteren Schadenspunkte zu. Bei \"Zahl\" fügt Voltobal sich selbst 10 Schadenspunkte zu."
			},
			damage: "20+",

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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "It rolls to move. If the ground is uneven, a sudden jolt from hitting a bump can cause it to explode."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279613
	}
}

export default card
