import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Togetic",
		fr: "Togetic",
		de: "Togetic"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		176,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Togepi",
		fr: "Togepi",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Speed Dive",
				fr: "Équilibre Plongée",
				de: "Tempohechtsprung"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sweet Kiss",
				fr: "Doux baiser",
				de: "Bitterkuss"
			},
			effect: {
				en: "Your opponent may draw a card.",
				fr: "Votre adversaire peut piocher une carte.",
				de: "Dein Gegner kann 1 Karte ziehen."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
