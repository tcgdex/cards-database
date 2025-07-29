import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Pidgeot",
		de: "Tauboss"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		18,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Pidgeotto",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Headwind",
				de: "Gegenwind"
			},
			effect: {
				en: "During your opponent's next turn, the attack cost of each of the Defending Pokémon's attacks is ColorlessColorless more.",
				de: "Während des nächsten Zuges deines Gegners kosten die Angriffe des Verteidigenden Pokémon  mehr."
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
				en: "Quick Attack",
				de: "Ruckzuckhieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 30 more damage.",
				de: "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 40 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	thirdParty: {
		cardmarket: 279673
	}
}

export default card
