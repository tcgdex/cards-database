import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Chikorita",
		fr: "Germignon"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		152,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Deflector",
				fr: "Protection"
			},
			effect: {
				en: "During your opponent's next turn, whenever Chikorita takes damage, divide that damage in half (rounded down to the nearest 10). (Any other effects still happen.)",
				fr: "Pendant le prochain tour de votre adversaire, à chaque fois que Germignon reçoit des dégâts, divisez ces dégâts par deux (arrondis à la dizaine la plus proche). (Tout autre effet reste actif.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Un doux parfum s'élève des feuilles du sommet de sa tête. Il est doux et adore absorber les rayons du soleil."
	}
}

export default card
