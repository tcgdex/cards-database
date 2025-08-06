import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Dugtrio",
		fr: "Triopikeur",
		de: "Digdri"
	},

	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		51,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Diglett",
		fr: "Taupiqueur",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Dig",
				fr: "Tunnel",
				de: "Schaufler"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sand Impact",
				fr: "Impact sablonneux",
				de: "Sandiger Einschlag"
			},
			effect: {
				en: "Flip a coin for each Fighting Energy attached to Dugtrio. This attack does 50 damage plus 20 more damage for each heads.",
				fr: "Lancez une pièce pour chaque Énergie Fighting attachée à Triopikeur. Cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires pour chaque côté face.",
				de: "Wirf für jede an Digdri angelegte -Energie 1 Münze. Dieser Angriff fügt 50 Schadenspunkte plus 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		en: "Extremely powerful, they can dig through even the hardest ground to a depth of over 60 miles."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279549,
		tcgplayer: 85004
	}
}

export default card
