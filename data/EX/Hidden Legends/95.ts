import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Metagross ex",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		376,
	],
	hp: 150,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Metang",
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Reversal",
			},
			effect: {
				en: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. If you do, this attack does 40 damage to the new Defending Pokémon.",
			},
			damage: 40,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Extra Comet Punch",
			},
			effect: {
				en: "During your next turn, Extra Comet Punch does 50 damage plus 50 more damage.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
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
