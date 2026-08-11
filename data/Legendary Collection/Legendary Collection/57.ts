import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Omanyte"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [138],

	hp: 40,

	types: [
		"Water"
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Clairvoyance"
			},
			effect: {
				en: "Your opponent plays with his or her hand face up. This power stops working while Omanyte is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Gun"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Water Energy attached to Omanyte but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "Although long extinct, in rare cases, it can be genetically resurrected from fossils."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274822,
				tcgplayer: 87855
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87855,
				cardmarket: 274822
			}
		}
	],

}

export default card
