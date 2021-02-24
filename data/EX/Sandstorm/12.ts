import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Shiftry",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		275,
	],
	hp: 120,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Nuzleaf",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Fan Away",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, return 1 Energy card attached to the Defending Pokémon to your opponent's hand. This power can't be used if Shiftry is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Light Touch Throw",
			},
			effect: {
				en: "Does 80 damage minus 10 damage for each Energy attached to the Defending Pokémon.",
			},
			damage: 80,

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
