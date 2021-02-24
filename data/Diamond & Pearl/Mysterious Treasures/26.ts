import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Gyarados",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		130,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Magikarp",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dragon DNA",
			},
			effect: {
				en: "Gyarados can use any attack from its Basic Pokémon. (You still have to pay for that attack's Energy cost.) If Gyarados uses any attack from its Basic Pokémon, that attack does 30 more damage to the Active Pokémon (before applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Enrage",
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, choose 1 card from your opponent's hand without looking and discard it. If the first coin is tails, Gyarados is now Confused.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
