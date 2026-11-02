import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Koga's Arbok"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [24],

	hp: 90,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Ekans"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Buildup"
			},
			effect: {
				en: "Koga's Arbok is now Poisoned."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Poison Power"
			},
			effect: {
				en: "If Koga's Arbok is Poisoned, this attack's base damage is 40 instead of 20 and the Defending Pokémon is now Poisoned."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86504,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 86504,
				cardmarket: 274293
			}
		},
	],
}

export default card
