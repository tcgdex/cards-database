import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Lépidonille",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				fr: "Ronge",
			},
			damage: "20",
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "OKACHEKE",

	thirdParty: {
		cardmarket: 877419
	}
}

export default card
