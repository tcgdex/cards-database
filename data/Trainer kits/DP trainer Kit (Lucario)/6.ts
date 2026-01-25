import { Card } from '../../../interfaces'
import Set from '../DP trainer Kit (Lucario)'

const card: Card = {
	dexId: [447],
	set: Set,

	name: {
		en: "Riolu",
		fr: "Riolu"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	hp: 60,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Wild Kick",
				fr: "Coup déchaîné"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet."
			},
			damage: "30"
		}
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "10+"
		}
	],

	description: {
		en: "The aura that emanates from its body intensifies to alert others if it is afraid or sad."
	},

	retreat: 1
}

export default card
