import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Cherubi",
		fr: "Ceribou",
	},
	illustrator: "Saya Tsuruta",
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

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Growth",
				fr: "Croissance",
			},
			effect: {
				en: "Attach a Grass Energy card from your hand to Cherubi.",
				fr: "Attachez une carte Énergie Grass de votre main à Ceribou.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch'herbe",
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
