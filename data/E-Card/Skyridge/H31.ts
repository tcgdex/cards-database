import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Vaporeon",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		134,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Eevee",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Self Healing",
			},
			effect: {
				en: "Whenever you attach a Water Energy card from your hand to Vaporeon, remove all Special Conditions affecting Vaporeon.",
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
				en: "Hypnosplash",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Trick",
			},
			effect: {
				en: "If the Defending Pokémon has any Energy cards attached to it, flip a coin. If heads, choose 1 of those Energy cards and move it to 1 of your opponent's Benched Pokémon. If your opponent has no Benched Pokémon, ignore this effect.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
