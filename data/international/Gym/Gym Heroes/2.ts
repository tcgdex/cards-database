import { Card } from 'models/database/card'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		'en-us': "Brock's Rhydon"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [112],

	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Rhyhorn"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Bench Guard"
			},
			effect: {
				'en-us': "As long as Brock's Rhydon is Benched, whenever 1 of your Benched Pokémon is damaged, you may do 10 of that damage to Brock's Rhydon instead. (If more than 1 of your Benched Pokémon is damaged at the same time, you may use this power once for each of them.)"
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Lariat"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83978,
			},
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 83978,
				cardmarket: 274138
			}
		}
	],
}

export default card
