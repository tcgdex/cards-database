import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Psyduck"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [54],

	hp: 50,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Dizziness"
			},
			effect: {
				en: "Draw a card."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Gun"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Water Energy attached to Psyduck but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "It is often seen holding its head in its paws, as if it were suffering from a headache."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274853,
				tcgplayer: 88434
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88434,
				cardmarket: 274853
			}
		}
	],

}

export default card
