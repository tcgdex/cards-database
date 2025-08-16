import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Sunkern",
		de: "Sonnkern"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		191,
	],

	hp: 40,

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
				en: "Rollout",
				de: "Walzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Blot",
				de: "Klecks"
			},
			effect: {
				en: "If there are any damage counters on Sunkern, remove 1 of them.",
				de: "Wenn Schadensmarken auf Sonnkern liegen, entferne 1 von ihnen."
			},
			damage: 10,

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
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 275364,
		tcgplayer: 89619
	}
}

export default card
