import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Slowbro",
	},
	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		80,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Slowpoke",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dense Body",
			},
			effect: {
				en: "Any damage done to Slowbro by attacks from Basic Pokémon (excluding Baby Pokémon) is reduced by 20.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Energy Cannon",
			},
			effect: {
				en: "This attack does 30 damage plus 10 more damage for each Energy attached to Slowbro but not used to pay for this attack's Energy cost. You can't add more than 20 damage this way. y.",
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





}

export default card
