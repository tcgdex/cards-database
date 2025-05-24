import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Electabuzz",
		pt: "Electabuzz",
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
				pt: "Thundershock",
				fr: "Éclair",
				de: "Donnerschock"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				pt: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
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
				pt: "Thunderpunch",
				fr: "Poing-Éclair",
				de: "Donnerschlag"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage; if tails, this attack does 30 damage and Electabuzz does 10 damage to itself.",
				pt: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage; if tails, this attack does 30 damage and Electabuzz does 10 damage to itself.",
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

	description: {
		fr: "Vivant dans les centrales, il provoque des pannes de courant en s'aventurant en ville."
	}
}

export default card
