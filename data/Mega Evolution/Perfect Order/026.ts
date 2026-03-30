import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Lixy",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				fr: "Double Écorchure",
			},
			damage: "10×",
			effect: {
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
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
	illustrator: "Saboteri",

	thirdParty: {
		cardmarket: 877439
	}
}

export default card
