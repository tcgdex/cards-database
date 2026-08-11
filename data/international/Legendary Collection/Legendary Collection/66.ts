import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Tentacruel"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [73],

	hp: 60,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Tentacool"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Supersonic"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused."
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Jellyfish Sting"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		'en-us': "The tentacles are normally kept short. On hunts, the are extended to ensnare and immobilize prey."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274831,
				tcgplayer: 89874
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89874,
				cardmarket: 274831
			}
		}
	],

	retreat: 0
}

export default card
