import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Rocket's Scizor ex",
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		212,
	],
	hp: 120,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Rocket's Scyther ex",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dual Armor",
			},
			effect: {
				en: "As long as Rocket's Scizor ex has any Metal Energy attached to it, Rocket's Scizor ex is both Darkness and Metal type.\"",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rotating Claws",
			},
			effect: {
				en: "You may discard an Energy card attached to Rocket's Scizor ex. If you do, search your discard pile for an Energy card (excluding the one you discarded) and attach it to Rocket's Scizor ex.",
			},
			damage: 50,

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
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
