import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Porygon",
		fr: "Porygon",
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		137,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Calculate",
				fr: "Calculer",
			},
			effect: {
				en: "Look at the top 3 cards of your deck and put them back on top of your deck in any order.",
				fr: "Regardez les 3 cartes du dessus de votre deck et replacez-les au dessus de votre deck dans n'importe quel ordre.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sharpen",
				fr: "Affûtage",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
