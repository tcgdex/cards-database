import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Gloom",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		44,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Oddish",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Poisonpowder",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
