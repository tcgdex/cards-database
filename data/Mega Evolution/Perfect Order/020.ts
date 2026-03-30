import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Stari",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				fr: "Pistolet à O",
			},
			damage: "20",
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Takeshi Nakamura",

	thirdParty: {
		cardmarket: 877432
	}
}

export default card
