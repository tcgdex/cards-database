import { Card } from '../../../interfaces'
import Set from '../POP Series 6'

const card: Card = {
	name: {
		en: "Riolu",
		fr: "Riolu",
		de: "Riolu"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [447],

	hp: 60,

	types: [
		"Fighting"
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
				de: "Wirf 1 Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
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
	description: {
		en: "The aura that emanates from its body intensifies to alert others if it is afraid or sad.",
		de: "Die Aura, die dieses PKMN umgibt, verstärkt sich, wenn es zeigen will, dass es ängstlich oder traurig ist."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88752,
				cardmarket: 277893
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88752,
				cardmarket: 277893
			},
		},
	],

}

export default card
