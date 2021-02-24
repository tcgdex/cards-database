import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Swampert",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		260,
	],
	hp: 110,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Marshtomp",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Water Call",
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Water Energy card from your hand to your Active Pokémon. This power can't be used if Swampert is affected by a Special Condition.",
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
				en: "Hypno Splash",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
			},
			damage: 50,

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
