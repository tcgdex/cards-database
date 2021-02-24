import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Swampert ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		260,
	],
	hp: 150,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Marshtomp",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Recycle",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your discard pile for 3 Energy cards and attach them to your Pokémon in any way you like. If you do, your turn ends. This power can't be used if Swampert ex is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ultra Pump",
			},
			effect: {
				en: "You may discard 2 cards from your hand. If you do, this attack does 60 damage plus 20 more damage and does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
