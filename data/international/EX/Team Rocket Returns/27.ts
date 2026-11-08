import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Qwilfish",
		'de-de': "Baldorfish"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		211,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Spiny",
				'de-de': "Spiny"
			},
			effect: {
				'en-us': "If Qwilfish is your Active Pokémon and is damaged by an opponent's attack (even if Qwilfish is Knocked Out), flip a coin until you get tails. For each heads, put 1 damage counter on the Attacking Pokémon.",
				'de-de': "If Quilfish is your Active Pokémon and is damaged by an opponent's attack (even if Quilfish is Knocked Out), flop a coin until you get tails. For each heads, put 1 damage counter on the Attacking Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Stun Poison",
				'de-de': "Stun Poison"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and Poisoned.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and Poisoned."
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

	
	retreat: 1,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276319,
				tcgplayer: 88493
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276319,
				tcgplayer: 88493
			},
		},
	],

}

export default card

