import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Feebas",
		fr: "Barpau"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		349,
	],
	hp: 30,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Submerge",
				fr: "Submerger"
			},
			effect: {
				en: "As long as Feebas is on your Bench, prevent all damage done to Feebas by attacks (both yours and your opponent's).",
				fr: "Tant que Barpau est sur votre Banc, prévenez tous les dégâts qui lui sont infligés par des attaques (les vôtres et celles de votre adversaire)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Lunge",
				fr: "Coup rapide"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet."
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





}

export default card
