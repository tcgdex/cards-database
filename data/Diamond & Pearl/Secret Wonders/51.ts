import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Ivysaur",
		fr: "Herbizarre",
		de: "Bisaknosp"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		2,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Bulbasaur",
		fr: "Bulbizarre",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leech Seed",
				fr: "Vampigraine",
				de: "Egelsamen"
			},
			effect: {
				en: "Remove 1 damage counter from Ivysaur.",
				fr: "Retirez à Herbizarre 1 marqueur de dégât.",
				de: "Entferne 1 Schadensmarke von Bisaknosp."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch'herbe",
				de: "Rasierblatt"
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 2,



}

export default card
