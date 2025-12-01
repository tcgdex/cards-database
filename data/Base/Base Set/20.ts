import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Electabuzz",
		fr: "Élektek",
		de: "Elektek"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		125,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Thundershock",
				fr: "Éclair",
				de: "Donnerschock"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei Kopf ist das verteidigende Pokémon gelhämt."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunderpunch",
				fr: "Poing-Éclair",
				de: "Donnerschlag"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage; if tails, this attack does 30 damage and Electabuzz does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires ; si c'est pile, cette attaque inflige 30 dégâts et Élektek s'inflige 10 dégâts.",
				de: "Wirf eine Münze. Bei Kopf fügt dieser Angriff 30 Schdenspunkte plus 10 weitere Schadenspunkte zu. Bei Zahl fügt dieser Angriff 30 Schadenspunkte zu, und Elektek fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],

	description: {
		fr: "Vivant dans les centrales, il provoque des pannes de courant en s'aventurant en ville."
	},

	thirdParty: {
		cardmarket: 273715,
		tcgplayer: 42361
	},

	related: [
		{
			type: "translation",
			cardPath: "data-asia/PMCG/PMCG1/041.ts"
		}
	]
}

export default card
