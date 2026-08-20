import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Kangaskhan",
		fr: "Kangourex",
		de: "Kangama"
	},

	illustrator: "You Iribi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		115,
	],

	hp: 120,

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
				en: "Parental Fury",
				fr: "Fureur Maternelle",
				de: "Mütterliche Rage"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 40 damage for each heads.",
				fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 40 dégâts pour chaque côté face.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu."
			},
			damage: "40×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Kangaskhan protects its child by keeping it in its pouch. It has zero forgiveness for those who harm its child and will beat them down.",
		de: "Sein Junges beschützt es in seinem Beutel. Wer dieses verwundet, den erwarten Kangamas Groll und eine rücksichtslose Tracht Prügel."
	},

	thirdParty: {
		cardmarket: 396642,
		tcgplayer: 197692
	}
}

export default card
