import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Chandelure-EX",
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		609,
	],

	hp: 170,

	types: [
		"Psychic",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Cursed Drop",
			},
			effect: {
				'en-us': "Put 4 damage counters on your opponent's Pokémon in any way you like.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Eerie Glow",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned and Confused.",
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281228
	}
}

export default card
