import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Tauros",
		fr: "Tauros",
		de: "Tauros"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		128,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stomp",
				fr: "Écrasement",
				de: "Stampfer"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage; if tails, this attack does 20 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires ; si c'est pile, cette attaque inflige 20 dégâts.",
				de: "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff 20 Schadenspunkte plus 10 weitere Schadenspunkte zu; bei 'Zahl' fügt dieser Angriff 20 Schadenspunkte zu."
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
				en: "Rampage",
				fr: "Saccage",
				de: "Randale"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each damage counter on Tauros. Flip a coin. If tails, Tauros is now Confused (after doing damage).",
				fr: "Cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégâts sur Tauros. Lancez une pièce. Si c'est pile, Tauros est maintenant Confus (après le calcul des dégâts).",
				de: "Fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Tauros zu. Wirf eine Münze. Bei 'Zahl' ist Tauros jetzt verwirrt (nach der Schadensverteilung)."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "Une fois sa cible en vue, il la charge furieusement en fouettant l'air de sa queue."
	},

	thirdParty: {
		cardmarket: 273844
	}
}

export default card
