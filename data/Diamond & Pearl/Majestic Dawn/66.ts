import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Hippopotas",
		fr: "Hippopotas",
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		449,
	],
	hp: 60,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Grainy Sand",
				fr: "Sable graineux",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-edge",
				fr: "Damoclès",
			},
			effect: {
				en: "Hippopotas does 10 damage to itself.",
				fr: "Hippopotas s'inflige 10 dégâts.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	retreat: 2,



}

export default card
