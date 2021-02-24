import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Vileplume",
	},
	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		45,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Gloom",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Heal",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, remove 1 damage counter from 1 of your Pokémon. This power can't be used if Vileplume is Asleep, Confused, or Paralyzed.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Petal Dance",
			},
			effect: {
				en: "Flip 3 coins. This attack does 40 damage times the number of heads. Vileplume is now Confused (after doing damage).",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
