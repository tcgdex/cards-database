import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Electabuzz",
		fr: "Élektek",
		de: "Elektek",
		it: "Electabuzz"
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
				de: "Donnerschock",
				it: "Tuonoshock"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei Kopf ist das verteidigende Pokémon gelhämt.",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore è Paralizzato."
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
				de: "Donnerschlag",
				it: "Tuonopugno"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage; if tails, this attack does 30 damage and Electabuzz does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires ; si c'est pile, cette attaque inflige 30 dégâts et Élektek s'inflige 10 dégâts.",
				de: "Wirf eine Münze. Bei Kopf fügt dieser Angriff 30 Schdenspunkte plus 10 weitere Schadenspunkte zu. Bei Zahl fügt dieser Angriff 30 Schadenspunkte zu, und Elektek fügt sich selbst 10 Schadenspunkte zu.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni più altri 10 danni; se esce croce, questo attacco infligge 30 danni e Electabuzz si infligge 10 danni.",
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
		fr: "Vivant dans les centrales, il provoque des pannes de courant en s'aventurant en ville.",
		it: "Si trova in genere vicino a centrali elettriche, ma può allontanarsi e causare gravissimi blackout nelle città. LIV 35 N.125"
	},

	thirdParty: {
		cardmarket: 273715,
		tcgplayer: 42361
	}
}

export default card
