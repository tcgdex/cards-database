import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Tepig",
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		498,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
			},
			effect: {
				'en-us': "This Pokémon does 10 damage to itself.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It can deftly dodge its foe's attacks while shooting fireballs from its nose. It roasts berries before it eats them.",
	},

	thirdParty: {
		cardmarket: 281176,
		tcgplayer: 89885
	}
}

export default card
