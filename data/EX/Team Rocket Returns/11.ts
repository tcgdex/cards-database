import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Jumpluff",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		189,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Skiploom",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Buffer",
			},
			effect: {
				en: "If Jumpluff would be Knocked Out by an opponent's attack, flip a coin. If heads, Jumpluff is not Knocked Out and its remaining HP becomes 10 instead.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Crush",
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy attached to all of your opponent's Pokémon.",
			},
			damage: 10,

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
			value: "-30"
		},
	],




}

export default card
