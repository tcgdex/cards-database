import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Dark Golbat",
		'de-de': "Dunkles Golbat"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		42,
	],

	hp: 70,

	types: [
		"Grass",
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Zubat",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Night Ambush",
				'de-de': "Night Ambush"
			},
			effect: {
				'en-us': "Does 30 damage to 1 of your opponent's Pokémon. Dark Golbat can't attack during your next turn. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'de-de': "Does 30 damage to 1 of your opponent's Pokémon. Dark Golbat can't attack during your next turn. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 0,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276326,
				tcgplayer: 84603
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276326,
				tcgplayer: 84603
			},
		},
	],

}

export default card

