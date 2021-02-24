import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Shining Gyarados",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		130,
	],
	hp: 100,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
				"Water",
			],
			name: {
				en: "Outrage",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage for each damage counter on Shining Gyarados. If tails, this attack does nothing.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Fire",
				"Fire",
			],
			name: {
				en: "Devastate",
			},
			effect: {
				en: "Discard 2 Energy cards attached to Shining Gyarados or this attack does nothing. This attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Then, flip a coin. If heads, choose 1 Energy card attached to each of your opponent's Pokémon that has any Energy cards attached to it and discard those Energy cards.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
