import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Dark Magcargo",
		de: "Dunkles Magcargo"
	},

	illustrator: "Nakaoka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		219,
	],

	hp: 80,

	types: [
		"Fire",
		"Darkness",
	],

	evolveFrom: {
		en: "Slugma",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Press",
				de: "Energy Press"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each basic Energy card attached to all of your Active Pokémon.",
				de: "Does 10 damage plus 10 more damage for each basic Energy Card attached to all of your Active Pokémon."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Linear Attack",
				de: "Linear Attack"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				de: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. (Don't apply Weakness an Resistance for Benched Pokémon.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276330,
		tcgplayer: 84623
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

