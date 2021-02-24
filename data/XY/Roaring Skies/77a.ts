import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Shaymin-EX",
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		492,
	],
	hp: 110,
	types: [
		"Colorless",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Set Up",
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench, you may draw cards until you have 6 cards in your hand.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sky Return",
			},
			effect: {
				en: "Return this Pokémon and all cards attached to it to your hand.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
