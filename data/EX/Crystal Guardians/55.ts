import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Lotad",
		fr: "Nenupiot",
		de: "Loturzel"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		270,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Aqua Lift",
				fr: "Aqua-élévation",
				de: "Aquatransporter"
			},
			effect: {
				en: "If Lotad has any Water Energy attached to it, the Retreat Cost for Lotad is 0.",
				fr: "Si Nenupiot possède une Énergie , son Coût de retraite est de 0.",
				de: "Wenn mindestens 1 -Energie an Loturzel angelegt ist, hat Loturzel Rückzugskosten 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rolling Tackle",
				fr: "Roulé-boulé",
				de: "Rolltackle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277136,
		tcgplayer: 86835
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
