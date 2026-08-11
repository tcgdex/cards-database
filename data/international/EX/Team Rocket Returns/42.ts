import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Dark Weezing",
		'de-de': "Dunkles Smogmog"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		110,
	],

	hp: 80,

	types: [
		"Grass",
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Koffing",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Methane Leak",
				'de-de': "Methane Leak"
			},
			effect: {
				'en-us': "As long as Dark Weezing is your Active Pokémon, put 1 damage counter on each Pokémon that remains Poisoned between turns.",
				'de-de': "As long as Dark Weezing is your Active Pokémon, put 1 damage counter on each Pokémon that remains Poisoned between turns."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Smog",
				'de-de': "Smog"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'de-de': "The Defending Pokémon is now Poisoned."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Darkness Charge",
				'de-de': "Darkness Charge"
			},
			effect: {
				'en-us': "Put 2 damage counters on Dark Weezing.",
				'de-de': "Put 2 damage counters on Dark Weezing."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 2,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276334,
				tcgplayer: 84673
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276334,
				tcgplayer: 84673
			},
		},
	],

}

export default card

