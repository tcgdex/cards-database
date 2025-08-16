import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Riolu",
		fr: "Riolu",
		de: "Riolu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		447,
	],

	hp: 60,

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
				en: "Wild Kick",
				fr: "Coup déchaîné",
				de: "Stürmischer Kick"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Wirf 1 Münze. Bei 'Zahl' hat dieser Angriff keine Auswirkungen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "Son aura s'intensifie pour prévenir son entourage quand il a peur ou qu'il est triste."
	},

	thirdParty: {
		cardmarket: 277560,
		tcgplayer: 88751
	}
}

export default card
