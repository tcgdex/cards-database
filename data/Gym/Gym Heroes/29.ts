import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Misty's Cloyster"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [91],

	hp: 70,

	types: [
		"Water"
	],

	evolveFrom: {
		en: "Shellder"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Shell Armor"
			},
			effect: {
				en: "You may reduce all damage done by attacks to Misty's Cloyster by 10 (after applying Weakness and Resistance). (Any other effects of attacks still happen). This power can't be used if Misty's Cloyster is Asleep, Confused, or Paralyzed."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Triple Cannon"
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87525,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 87525,
				cardmarket: 274165
			}
		}
	],
}

export default card

