import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Mankey",
		fr: "Férosinge"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		56,
	],

	hp: 40,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mischief",
				fr: "Éspièglerie"
			},
			effect: {
				en: "Shuffle your opponent's deck.",
				fr: "Mélangez le deck de votre adversaire."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Anger",
				fr: "Colère"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage; if tails, this attack does 20 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires ; si c'est pile, cette attaque inflige 20 dégâts."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "De nature amicale, il se met très vite en colère s'il n'obtient pas ce qu'il veut."
	}
}

export default card
