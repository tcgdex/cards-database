import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Lianaja",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	stage: "Stage1",
	evolveFrom: {
		fr: "Vipélierre",
	},
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				fr: "Coupe Solaire",
			},
			damage: "40",
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
	illustrator: "Kurata So",

	thirdParty: {
		cardmarket: 877417
	}
}

export default card
