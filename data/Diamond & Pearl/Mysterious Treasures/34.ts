import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Slaking",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		289,
	],
	hp: 140,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Vigoroth",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energetic Impulse",
			},
			effect: {
				en: "Once during your turn (before your attack), if Slaking is your Active Pokémon, you may flip a coin. If heads, Slaking's Lazy Blow attack's base damage is 130 during this turn. If tails, Slaking can't attack or retreat during this turn. (If Slaking is no longer your Active Pokémon, this effect ends.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lazy Blow",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+30"
		},
	],





}

export default card
