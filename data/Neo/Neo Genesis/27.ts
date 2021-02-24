import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Ariados",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		168,
	],
	hp: 60,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Spinarak",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Spider Web",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't retreat. (Benching or evolving that Pokémon ends this effect.)",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Poison Bite",
			},
			effect: {
				en: "If this attack damages the Defending Pokémon, the Defending Pokémon is now Poisoned and you remove a number of damage counters from Ariados equal to half that damage (rounded up to the nearest 10). If Ariados has fewer damage counters than that, remove all of them.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
