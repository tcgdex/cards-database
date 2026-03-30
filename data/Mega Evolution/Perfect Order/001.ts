import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Mimigal",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				fr: "Fil Gluant",
			},
			damage: "10",
			effect: {
				fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			},
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
	illustrator: "Katsunori Sato",

	thirdParty: {
		cardmarket: 877413
	}
}

export default card
