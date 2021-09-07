import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Roselia",
		fr: "Roselia",
	},
	illustrator: "Takashi Yamaguchi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		315,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Petal Dance",
				fr: "Danse-fleur",
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads. Roselia is now Confused.",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face. Roselia est maintenant Confus.",
			},
			damage: "20×",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
