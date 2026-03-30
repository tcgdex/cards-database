import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Opermine",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				fr: "Double Pioche",
			},
			effect: {
				fr: "Piochez 2 cartes.",
			},
		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				fr: "Griffe",
			},
			damage: "30",
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",
	illustrator: "nagimiso",

	thirdParty: {
		cardmarket: 877456
	}
}

export default card
