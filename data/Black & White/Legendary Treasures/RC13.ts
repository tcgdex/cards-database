import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Purrloin",
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		509,
	],

	hp: 50,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Captivate",
			},
			effect: {
				en: "Flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with the Defending Pokémon.",
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,


	description: {
		en: "Their cute act is a ruse. They trick people and steal their valuables just to see the looks on their faces.",
	},

	thirdParty: {
		cardmarket: 281137
	}
}

export default card
