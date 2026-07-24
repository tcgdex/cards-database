import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Erika's Oddish"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [43],

	hp: 40,

	types: [
		"Grass"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Photosynthesis"
			},
			effect: {
				en: "All Energy cards attached to Erika's Oddish provide Grass Energy instead of their usual type. This power works even while Erika's Oddish is Asleep, Confused, or Paralyzed."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Poisonpowder"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 85301,
				cardmarket: 274183
			}
		}
	]
}

export default card

