import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Wailmer",
		fr: "Wailmer",
		de: "Wailmer"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		320,
	],

	hp: 90,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Attack",
				fr: "Double attaque",
				de: "Doppelter Angriff"
			},
			effect: {
				en: "Choose 2 of your opponent’s Pokémon. This attack does 20 damage to each of them. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 2 des Pokémon de votre adversaire. Cette attaque inflige 20 dégâts à chacun d’entre eux. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Wähle 2 Pokémon deines Gegners. Dieser Angriff fügt jedem der gewählten Pokémon 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Surf",
				fr: "Surf",
				de: "Surfer"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "It bounces playfully like a ball. The more seawater it swallows, the higher it bounces."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279582
	}
}

export default card
