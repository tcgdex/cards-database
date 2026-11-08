import { Card } from 'models/database/card'
import Set from '../DP trainer Kit (Lucario)'

const card: Card = {
	dexId: [447],
	set: Set,

	name: {
		'en-us': "Riolu",
		'fr-fr': "Riolu"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	hp: 60,

	types: [
		"Fighting"
	],

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
			damage: "30"
		}
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
				cardmarket: 278020,
				tcgplayer: 88753
			}
		},
	],

}

export default card
