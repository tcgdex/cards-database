import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Metagross",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		376,
	],
	hp: 100,
	types: [
		"Psychic",
		"Metal",
	],
	evolveFrom: {
		en: "Metang",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Metal Juncture",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a Metal Energy card attached to 1 of your Benched Pokémon to your Active Pokémon. This power can't be used if Metagross is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Squared Attack",
			},
			effect: {
				en: "Flip 4 coins. This attack does 30 damage times the number of heads.",
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
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
