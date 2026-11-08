import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Venomoth",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		49,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Venonat",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Shift",
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may change the type of Venomoth to the type of any other Pokémon in play other than Colorless. This power can't be used if Venomoth is Asleep, Confused, or Paralyzed.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Venom Powder",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused and Poisoned.",
			},

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
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		'en-us': "The dust-like scales covering its wings are color coded to indicate the kinds of poison it has.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273954,
				tcgplayer: 42503
			}
		}
	]
}

export default card
