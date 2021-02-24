import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Vileplume",
	},
	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		45,
	],
	hp: 90,
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
				en: "Poison Pollen",
			},
			effect: {
				en: "Once during your turn (before you attack), you may flip a coin. If heads, the Defending Pokémon is now Poisoned. This power can't be used if Vileplume is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Petal Dance",
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads. Vileplume is now Confused.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
