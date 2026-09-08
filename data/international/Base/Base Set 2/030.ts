import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Snorlax",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		143,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Munchlax",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Thick Skinned",
			},
			effect: {
				'en-us': "Snorlax can't become Asleep, Confused, Paralyzed, or Poisoned. This power can't be used if Snorlax is already Asleep, Confused, or Paralyzed.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Body Slam",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 30,

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
			value: "-30"
		},
	],
	retreat: 4,


	description: {
		'en-us': "Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273953,
				tcgplayer: 42502
			}
		}
	]
}

export default card
