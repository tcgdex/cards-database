import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Zangoose",
		fr: "Mangriff",
		de: "Sengo"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		335,
	],
	hp: 70,
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
				en: "Slash",
				fr: "Tranche",
				de: "Schlitzer"
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
				en: "Cutting Claw",
				fr: "Griffe coupante",
				de: "Schneidekralle"
			},
			effect: {
				en: "If your opponent has Seviper in play, this attack does 40 damage plus 50 more damage.",
				fr: "Si votre adversaire a Seviper en jeu, cette attaque inflige 40 dégâts plus 50 dégâts supplémentaires.",
				de: "Wenn dein Gegner Vipitis im Spiel hat, fügt dieser Angriff 40 Schadenspunkte plus 50 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
