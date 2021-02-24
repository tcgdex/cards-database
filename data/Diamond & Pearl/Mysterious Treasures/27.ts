import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Kricketune",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		402,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Kricketot",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sore Performance",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Concerto",
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each Kricketot and each Kricketune you have in play.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],





}

export default card
