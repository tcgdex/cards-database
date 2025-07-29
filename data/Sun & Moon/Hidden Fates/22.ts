import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Electrode",
		fr: "Électrode",
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		101,
	],

	hp: 100,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Lightning Ball",
				fr: "Boule Éclair",
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electroblast",
				fr: "Électro-Explosion",
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			},
			damage: "60+",

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

	thirdParty: {
		cardmarket: 394782
	}
}

export default card
