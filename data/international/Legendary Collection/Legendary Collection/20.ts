import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Beedrill"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [15],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Kakuna"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Twineedle"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads."
			},
			damage: "30×",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Poison Sting"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		'en-us': "Flies at high speed and attacks using the large, venomous stingers on its forelegs and tail."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274785,
				tcgplayer: 83768
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83768,
				cardmarket: 274785
			}
		}
	],

	retreat: 0
}

export default card
