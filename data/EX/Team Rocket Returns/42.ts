import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Dark Weezing",
		de: "Dunkles Smogmog"
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
		en: "Koffing",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Methane Leak",
				de: "Methane Leak"
			},
			effect: {
				en: "As long as Dark Weezing is your Active Pokémon, put 1 damage counter on each Pokémon that remains Poisoned between turns.",
				de: "As long as Dark Weezing is your Active Pokémon, put 1 damage counter on each Pokémon that remains Poisoned between turns."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Smog",
				de: "Smog"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				de: "The Defending Pokémon is now Poisoned."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Darkness Charge",
				de: "Darkness Charge"
			},
			effect: {
				en: "Put 2 damage counters on Dark Weezing.",
				de: "Put 2 damage counters on Dark Weezing."
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

	thirdParty: {
		cardmarket: 276334,
		tcgplayer: 84673
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
		}
	]
}

export default card

