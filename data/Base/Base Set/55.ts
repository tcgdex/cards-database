import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Nidoran♂",
		fr: "Nidoran ♂",
		de: "Nidoran M"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		32,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Horn Hazard",
				fr: "Chanc' Korne",
				de: "Gefährliches Horn"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Wirf eine Münze. Bei 'Zahl' zeigt dieser Angriff keine Wirkung."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Son ouïe très fine l'avertit du danger. Plus ses cornes sont grandes, plus son poison est mortel."
	}
}

export default card
