import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Dark Magneton",
		'de-de': "Dunkles Magneton"
	},

	illustrator: "Emi Miwa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		82,
	],

	hp: 70,

	types: [
		"Lightning",
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Magnemite",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Magnetic Lines",
				'de-de': "Magnetic Lines"
			},
			effect: {
				'en-us': "If your opponent has at least 2 Pokémon in play, move a basic Energy card from the Defending Pokémon to another of your opponent's Pokémon.",
				'de-de': "If your opponent has at least 2 Pokémon in play, move a basic Energy card from the Defending Pokémon to another of your opponent's Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Pulse",
				'de-de': "Poison Pulse"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'de-de': "The Defending Pokémon is now Poisoned."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276331,
				tcgplayer: 84626
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276331,
				tcgplayer: 84626
			},
		},
	],

}

export default card

