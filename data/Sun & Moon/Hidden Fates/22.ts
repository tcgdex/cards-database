import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Electrode",
		fr: "Électrode",
		de: "Lektrobal"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		101,
	],

	hp: 100,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
		de: "Voltobal"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Lightning Ball",
				fr: "Boule Éclair",
				de: "Kugelblitz"
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electroblast",
				fr: "Électro-Explosion",
				de: "Elektrokracher"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte mehr pro Kopf zu."
			},
			damage: "60+",

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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "It explodes in response to even minor stimuli. It is feared, with the nickname of \"The Bomb Ball.\"",
		de: "Es explodiert schon bei kleinsten Reizen. Sein Spitzname „Die Bombenkugel“ spiegelt die Furcht der Menschen wider."
	},

	thirdParty: {
		cardmarket: 394782,
		tcgplayer: 197666
	}
}

export default card
