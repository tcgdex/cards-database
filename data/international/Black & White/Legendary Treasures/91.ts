import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Cobalion",
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		638,
	],

	hp: 120,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Energy Press",
			},
			effect: {
				'en-us': "Does 20 more damage for each Energy attached to the Defending Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Iron Breaker",
			},
			effect: {
				'en-us': "The Defending Pokémon can't attack during your opponent's next turn.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It has a body and heart of steel. Its glare is sufficient to make even an unruly Pokémon obey it.",
	},

	thirdParty: {
		cardmarket: 281242,
		tcgplayer: 84380
	}
}

export default card
