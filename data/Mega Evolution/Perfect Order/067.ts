import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Couafarel",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Réduction de Main",
			},
			effect: {
				fr: "Défaussez au hasard des cartes de la main de votre adversaire jusqu'à ce qu'il reste 5 cartes dans sa main.",
			},
		},
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Coup d'Boule",
			},
			damage: "30",
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
	illustrator: "Teeziro",

	thirdParty: {
		cardmarket: 877483
	}
}

export default card
