import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Leafeon",
		fr: "Phyllali",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		470,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Spiral Drain",
				fr: "Spirale épuisante",
			},
			effect: {
				en: "Remove 1 damage counter from Leafeon.",
				fr: "Retirez à Phyllali 1 marqueur de dégât.",
			},
			damage: 40,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Leaf Blade",
				fr: "Lame-feuille",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 50 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
