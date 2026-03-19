import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

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
		fr: "Évoli"
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
				fr: "Retirez 2 marqueurs de dégât à Aquali.",
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
				en: "Choose 2 of your opponent's Pokémon. This attack does 30 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 2 Pokémon de votre adversaire. Cette attaque inflige 30 dégâts à chacun d'entre eux. (N'appliquez pas la Faiblesse et la Résistance aux Pokémon de Banc.)",
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

	thirdParty: {
		cardmarket: 279695,
		tcgplayer: 90287
	}
}

export default card
