import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Swellow",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		277,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Taillow",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Drive Off",
			},
			effect: {
				en: "Once during your turn (before your attack), if Swellow is your Active Pokémon, you may switch 1 of the Defending Pokémon with 1 of your opponent's Benched Pokémon. Your opponent picks the Benched Pokémon to switch. This power can't be used if Swellow is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
