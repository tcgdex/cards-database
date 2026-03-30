import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Monorpale",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Coupe",
			},
			damage: "10",
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "J",
	illustrator: "Apios",

	thirdParty: {
		cardmarket: 877472
	}
}

export default card
