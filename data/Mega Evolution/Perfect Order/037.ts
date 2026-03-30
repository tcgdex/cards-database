import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Tarinor",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				fr: "Rochers Roulants",
			},
			damage: "40",
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
	illustrator: "Jerky",

	thirdParty: {
		cardmarket: 877451
	}
}

export default card
