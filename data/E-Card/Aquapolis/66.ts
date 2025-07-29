import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Wooper",
		fr: "Axoloto",
		de: "Felino"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		194,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Whap",
				fr: "Queue battoir",
				de: "Tail Whap"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Deep Dive",
				fr: "Gros plongeon",
				de: "Deep Dive"
			},
			effect: {
				en: "Flip 3 coins. For each heads, remove 1 damage counter from Wooper.",
				fr: "Lancez 3 pièces. Pour chaque face, retirez un marqueur de dégâts de Axoloto.",
				de: "Flip 3 coins. For each heads, remove 1 damage counter from Wooper."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275139
	}
}

export default card
