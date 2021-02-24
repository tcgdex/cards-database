import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Serperior",
	},
	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		497,
	],
	hp: 130,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Servine",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Royal Heal",
			},
			effect: {
				en: "At any time between turns, heal 10 damage from each of your Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leaf Tornado",
			},
			effect: {
				en: "Move as many Grass Energy attached to your Pokémon to your other Pokémon in any way you like.",
			},
			damage: 60,

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
			type: "Water",
			value: "-20"
		},
	],




}

export default card
