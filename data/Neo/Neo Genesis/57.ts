import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Cyndaquil",
		fr: "Héricendre",
		de: "Feurigel"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		155,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Fireworks",
				fr: "Feu d'artifice",
				de: "Feuerwerk"
			},
			effect: {
				en: "Flip a coin. If tails, discard 1 Energy card attached to Cyndaquil.",
				fr: "Lancez une pièce. Si c'est pile, défaussez 1 carte Énergie attachée à Héricendre.",
				de: "Wirf eine Münze. Lege bei 'Zahl' eine an Feurigel angelgte Energiekarte an deinen Ablagestapel."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-attaque",
				de: "Ruckzuckhieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires ; si c'est pile, cette attaque inflige 10 points dégâts.",
				de: "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu; bei 'Zahl' fügt dieser Angriff 10 Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "Il est timide et se roule toujours en boule. Quand on l'attaque, il enflamme son dos pour se protéger."
	},

	thirdParty: {
		cardmarket: 274456,
		tcgplayer: 84544
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			size: "jumbo",
			stamp: ["25th-celebration"]
		}
	]
}

export default card
