import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Rayquaza ex",
	},
	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		384,
	],
	hp: 100,
	types: [
		"Colorless",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dragon Boost",
			},
			effect: {
				en: "Once during your turn, when you put Rayquaza ex from your hand onto your Bench, you may move any number of basic Energy cards attached to your Pokémon to Rayquaza ex.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Lightning",
			],
			name: {
				en: "Spiral Blast",
			},
			effect: {
				en: "Does 20 damage for each basic Energy card attached to Rayquaza ex.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
