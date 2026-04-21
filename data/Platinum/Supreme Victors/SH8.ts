import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Relicanth",
		fr: "Relicanth",
		de: "Relicanth"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		369,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Deep Sea Pressure",
				fr: "Pression abyssale",
				de: "Tiefseedruck"
			},
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon's Retreat Cost is Colorless Colorless more.",
				fr: "Lors du prochain tour de votre adversaire, le Coût de retraite du Pokémon Défenseur est  de plus.",
				de: "Während des nächsten Zuges deines Gegners sind die Rückzugskosten des Verteidigenden Pokémon um  erhöht."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Wave",
				fr: "Aqua-vague",
				de: "Aquawelle"
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage plus 10 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 40 Schadenspunkte plus 10 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	thirdParty: {
		cardmarket: 278690
	},

	variants: [
		{
			type: "reverse"
		}
	]
}

export default card
