import { Card } from '../../../interfaces'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		en: "Garchomp",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		445,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Gabite",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],

			name: {
				en: "Dragon Rage",
			},

			effect: {
				en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
			},

			damage: 80
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Jet Sword",
			},
			effect: {
				en: "Discard 2 Energy attached to Garchomp and this attack does 10 damage to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+30"
		},
	],

	retreat: 0,

	description: {
		en: "It flies at speeds equal to a jet fighter plane. It never allows its prey to escape."
	},

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	}
}

export default card
