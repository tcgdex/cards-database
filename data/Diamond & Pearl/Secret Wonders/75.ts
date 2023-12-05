import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Wartortle",
		fr: "Carabaffe",
		de: "Schillok"
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		8,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Squirtle",
		fr: "Carapuce",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Giant Wave",
				fr: "Vague géante",
				de: "Riesenwelle"
			},
			effect: {
				en: "Wartortle can't use Giant Wave during your next turn.",
				fr: "Carabaffe ne peut pas utiliser Vague géante lors de votre prochain tour.",
				de: "Schillok kann Riesenwelle in deinem nächsten Zug nicht einsetzen."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shell Attack",
				fr: "Coquill-attaque",
				de: "Muschelangriff"
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

	retreat: 1,



}

export default card
