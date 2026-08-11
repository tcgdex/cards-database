import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Slurpuff",
		'fr-fr': "Cupcanaille",
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		685,
	],

	hp: 90,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Swirlix",
		'fr-fr': "Sucroquin",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Lap Up",
				'fr-fr': "Gobeur",
			},
			effect: {
				'en-us': "Draw 3 cards.",
				'fr-fr': "Piochez 3 cartes.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fairy Wind",
				'fr-fr': "Vent Féérique",
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The cakes Slurpuff makes always look just like that one Pokémon it likes.",
	},

	thirdParty: {
		cardmarket: 288529
	}
}

export default card
