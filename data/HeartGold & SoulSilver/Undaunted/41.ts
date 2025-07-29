import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Vaporeon",
		fr: "Aquali",
		de: "Aquana"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		134,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spiral Drain",
				fr: "Spirale épuisante",
				de: "Spiralsauger"
			},
			effect: {
				en: "Remove 2 damage counters from Vaporeon.",
				fr: "Retirez 2 marqueurs de dégât à Aquali.",
				de: "Entferne 2 Schadensmarken von Aquana."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Dual Splash",
				fr: "Double splash",
				de: "Doppelplatscher"
			},
			effect: {
				en: "Choose 2 of your opponent’s Pokémon. This attack does 30 damage to each of them. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 2 des Pokémon de votre adversaire. Cette attaque inflige 30 dégâts à chacun d’entre eux. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Wähle 2 Pokémon deines Gegners. Dieser Angriff fügt jedem der gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "When Vaporeon’s fins begin to vibrate, it is a sign that rain will come within a few hours."
	},

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279294
	}
}

export default card
