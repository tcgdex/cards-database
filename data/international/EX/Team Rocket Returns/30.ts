import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Dark Ariados",
		'de-de': "Dunkles Ariados"
	},

	illustrator: "Kyoko Koizumi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		168,
	],

	hp: 70,

	types: [
		"Grass",
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Spinarak",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Super Poison Breath",
				'de-de': "Super Poison Breath"
			},
			effect: {
				'en-us': "Each Defending Pokémon is now Poisoned.",
				'de-de': "Each Defending Pokémon is now Poisoned."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Breaking Impact",
				'de-de': "Breaking Impact"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 20 damage for each Colorless Energy in that Pokémon's Retreat Cost (after applying effects to the Retreat Cost). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'de-de': "Choose 1 of your opponent's Pokémon. This attack does 20 damage for each  Energy in that Pokémon's Retreat Cost (after applying effects to the Retreat Cost). (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276322,
				tcgplayer: 84567
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276322,
				tcgplayer: 84567
			},
		},
	],

}

export default card

