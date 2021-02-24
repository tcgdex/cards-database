import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Cherubi",
		fr: "Cherubi",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		420,
	],
	hp: 50,
	types: [
		"Grass",
	],
	evolveFrom: {
		fr: "Ceribou",
	},
	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Nap",
				fr: "Tit'sieste",
			},
			effect: {
				en: "Remove 2 damage counters from Cherubi.",
				fr: "Retirez à Ceribou 2 marqueurs de dégât.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Bullet Seed",
				fr: "Balle graine",
			},
			effect: {
				en: "Flip 4 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+10"
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
