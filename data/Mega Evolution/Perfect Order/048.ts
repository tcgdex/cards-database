import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Fantominus",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				fr: "Attaque Surprise",
			},
			damage: "30",
			effect: {
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			},
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
	illustrator: "MARINA Chikazawa",

	thirdParty: {
		cardmarket: 877463
	}
}

export default card
