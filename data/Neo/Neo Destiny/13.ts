import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Azumarill",
	},
	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		184,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Marill",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Bubble",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
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
				en: "Bubble Jump",
			},
			effect: {
				en: "If you have any Benched Pokémon, flip a coin. If heads, take 2 Energy cards attached to Light Azumarill and attach them to 1 of your Benched Pokémon. Then return Light Azumarill and all cards attached to it to your hand.",
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





}

export default card
