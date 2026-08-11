import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Omastar"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [139],

	hp: 70,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Omanyte"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Water Gun"
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each Water Energy attached to Omastar but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way."
			},
			damage: "20+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spike Cannon"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads."
			},
			damage: "30×",

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
		'en-us': "A prehistoric Pokémon that died out when its heavy shell made it impossible for it to catch prey."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274823,
				tcgplayer: 87867
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87867,
				cardmarket: 274823
			}
		}
	],

}

export default card
