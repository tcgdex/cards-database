import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Tritox",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				fr: "Griffes Enflammées",
			},
			damage: "20",
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Kazuhisa Uragami",

	thirdParty: {
		cardmarket: 877427
	}
}

export default card
