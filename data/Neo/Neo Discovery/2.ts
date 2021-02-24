import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Forretress",
	},
	illustrator: "CR CG gangs",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		205,
	],
	hp: 80,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Pineco",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Spikes",
			},
			effect: {
				en: "During your opponent's turn, whenever 1 of your opponent's Benched Pokémon becomes his or her Active Pokémon, Forretress does 10 damage to it. (Don't apply Weakness and Resistance.) This power stops working if Forretress is Asleep, Confused, or Paralyzed.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rapid Spin",
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with their Active Pokémon; then, if you have any Benched Pokémon, you switch 1 of them with your Active Pokémon. (Do the damage before switching the Pokémon.)",
			},
			damage: 30,

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
