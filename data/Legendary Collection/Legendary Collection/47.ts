import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Ivysaur"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [2],

	hp: 60,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Bulbasaur"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vine Whip"
			},

			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Poisonpowder"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "When the bulb on its back grows large, the Pokémon seems to lose the ability to stand on its hind legs."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274812,
				tcgplayer: 86295
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86295,
				cardmarket: 274812
			}
		}
	],

}

export default card
