import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Dark Golbat",
		de: "Dunkles Golbat"
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
		en: "Zubat",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Night Ambush",
				de: "Night Ambush"
			},
			effect: {
				en: "Does 30 damage to 1 of your opponent's Pokémon. Dark Golbat can't attack during your next turn. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				de: "Does 30 damage to 1 of your opponent's Pokémon. Dark Golbat can't attack during your next turn. (Don't apply Weakness and Resistance for Benched Pokémon.)"
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

	thirdParty: {
		cardmarket: 276326,
		tcgplayer: 84603
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

