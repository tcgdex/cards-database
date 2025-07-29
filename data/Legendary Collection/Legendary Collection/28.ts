import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Magneton",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		82,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Magnemite",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Sonicboom",
			},
			effect: {
				en: "Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Selfdestruct",
			},
			effect: {
				en: "Does 20 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Magneton does 100 damage to itself.",
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274793
	}
}

export default card
