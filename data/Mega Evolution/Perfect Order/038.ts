import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Tarinorme",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 140,
	stage: "Stage1",
	evolveFrom: {
		fr: "Tarinor",
	},
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				fr: "Rochers Roulants",
			},
			damage: "60",
		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				fr: "Nez Destructeur",
			},
			damage: "260",
			effect: {
				fr: "Défaussez 3 Énergies de ce Pokémon.",
			},
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "J",
	illustrator: "Nurikabe",

	thirdParty: {
		cardmarket: 877452
	}
}

export default card
