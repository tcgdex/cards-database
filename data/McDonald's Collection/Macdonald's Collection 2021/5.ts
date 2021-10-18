import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2021'

const card: Card = {
	name: {
		en: "Snivy",
		fr: "Vipélierre",
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		495,
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
				"Colorless",
			],
			name: {
				en: "Slam",
				fr: "Souplesse",
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
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

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "It is very intelligent and calm. Being exposed to lots of sunlight makes its movements swifter."
	},

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
