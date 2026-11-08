import { Card } from 'models/database/card'
import Set from '../POP Series 6'

const card: Card = {
	name: {
		'en-us': "Riolu",
		'fr-fr': "Riolu"
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
				'en-us': "Wild Kick",
				'fr-fr': "Coup déchaîné"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet."
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
		'en-us': "The aura that emanates from its body intensifies to alert others if it is afraid or sad."
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
