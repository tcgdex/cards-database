import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Sudowoodo",
		fr: "Simularbre",
		de: "Mogelbaum"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		185,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Flail",
				fr: "Fleau",
				de: "Dreschflegel"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Sudowoodo.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts sur Simularbre.",
				de: "Fügt 10 Schadenspunkte mal der Anzahl der Schadensmarken auf Mogelbaum zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rock Throw",
				fr: "Jet-pierres",
				de: "Steinwurf"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Bien qu'il prétende être un arbre, il ressemble plus à un rock qu'à une plante."
	},

	thirdParty: {
		cardmarket: 274477,
		tcgplayer: 89592
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
