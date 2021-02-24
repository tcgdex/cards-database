import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Escavalier",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		589,
	],
	hp: 90,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Karrablast",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Joust",
			},
			effect: {
				en: "Before doing damage, discard a Pokémon Tool card attached to the Defending Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Cavalry Lance",
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon has no Weakness.",
			},
			damage: 70,

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
			type: "Psychic",
			value: "-20"
		},
	],




}

export default card
