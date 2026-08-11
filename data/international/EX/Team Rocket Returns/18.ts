import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Dark Sandslash",
		'de-de': "Dunkles Sandamer"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		28,
	],

	hp: 70,

	types: [
		"Fighting",
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Sandshrew",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Poison Payback",
				'de-de': "Poison Payback"
			},
			effect: {
				'en-us': "If Dark Sandslash is your Active Pokémon and is damaged by an opponent's attack (even if Dark Sandslash is Knocked Out), the Attacking Pokémon is now Poisoned.",
				'de-de': "If Dark Sandslash is your Active Pokémon and is damaged by an opponent's attack (even if Dark Sandslash is Knocked Out), the Attacking Pokémon is now Poisoned."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Swift",
				'de-de': "Swift"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				'de-de': "This attack's damage isn't affected by Weakness, resistance, Poke-Pwers, Poke-Bodies, or any other effects on the Defending Pokémon."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 0,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276310,
				tcgplayer: 84651
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276310,
				tcgplayer: 84651
			},
		},
	],

}

export default card

