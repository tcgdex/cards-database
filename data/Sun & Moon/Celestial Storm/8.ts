import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Treecko",
		fr: "Arcko",
		es: "Treecko",
		it: "Treecko",
		pt: "Treecko",
		de: "Geckarbor"
	},
	illustrator: "tetsuya koizumi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		252,
	],
	hp: 70,
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
				en: "Smack",
				fr: "Claque",
				es: "Palmetazo",
				it: "Schiaffo",
				pt: "Estalo",
				de: "Klatscher"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Tail Whap",
				fr: "Queue Battoir",
				es: "Coletón",
				it: "Codabotta",
				pt: "Surra de Cauda",
				de: "Schweifvertrimmer"
			},

			damage: 20,

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
