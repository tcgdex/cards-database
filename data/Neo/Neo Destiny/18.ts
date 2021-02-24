import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Magcargo",
	},
	illustrator: "Toshinao Aoki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		219,
	],
	hp: 60,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Slugma",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Hot Plate",
			},
			effect: {
				en: "As long as Dark Magcargo is your Active Pokémon, whenever a player puts a Baby Pokémon or Basic Pokémon onto his or her Bench from his or her hand, this power does 10 damage to that Pokémon. (Don't apply Weakness and Resistance.) This power stops working if Dark Magcargo is Asleep, Confused, or Paralyzed.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Ball of Flame",
			},
			effect: {
				en: "You may discard a Energy card attached to Dark Magcargo when you use this attack. If you do and if your opponent has any Benched Pokémon, choose 1 of them and this attack does 20 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
