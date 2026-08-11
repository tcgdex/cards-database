import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Croagunk",
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		453,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Poison Jab",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Inflating its poison sacs, it fills the area with an odd sound and hits flinching opponents with a poison jab.",
	},

	thirdParty: {
		cardmarket: 281213,
		tcgplayer: 84481
	}
}

export default card
