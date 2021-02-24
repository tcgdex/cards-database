import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Torterra",
	},
	illustrator: "Shizurow",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		389,
	],
	hp: 160,
	types: [
		"Grass",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Forest Murmurs",
			},
			effect: {
				en: "Once during your turn (before your attack), if you have more Prize cards left than your opponent, you may choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. This power can't be used if Torterra is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Vigorous Dash",
			},
			effect: {
				en: "Does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Torterra does 30 damage to itself.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],





}

export default card
