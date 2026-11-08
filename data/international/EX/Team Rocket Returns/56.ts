import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Grimer",
		'de-de': "Sleima"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		88,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Taunt",
				'de-de': "Taunt"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch.",
				'de-de': "Choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spit Poison",
				'de-de': "Spit Poison"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'de-de': "The Defending Pokémo is now Poisoned."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276348,
				tcgplayer: 85909
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276348,
				tcgplayer: 85909
			},
		},
	],

}

export default card

