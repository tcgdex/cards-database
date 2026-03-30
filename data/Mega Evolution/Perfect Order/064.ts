import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Sapereau",
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
				fr: "Coud'Pattes",
			},
			damage: "10",
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "MINAMINAMI Take",

	thirdParty: {
		cardmarket: 877480
	}
}

export default card
