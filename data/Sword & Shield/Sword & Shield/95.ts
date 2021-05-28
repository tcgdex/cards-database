import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Hitmonchan",
		fr: "Tygnon",
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Coordinated Beatdown",
				fr: "Dérouillée Coordonnée",
			},
			effect: {
				en: "If Hitmonlee is on your Bench, this attack does 20 more damage.",
				fr: "Si Kicklee est sur votre Banc, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Mach Cross",
				fr: "Passage Éclair",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
