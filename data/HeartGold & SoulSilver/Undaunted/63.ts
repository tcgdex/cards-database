import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Pineco",
		fr: "Pomdepik",
		de: "Tannza"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		204,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Focus Energy",
				fr: "Puissance",
				de: "Energiefokus"
			},
			effect: {
				en: "During your next turn, Pineco’s Surprise Attack attack’s base damage is 80.",
				fr: "Pendant votre prochain tour, l’Attaque surprise de Pomdepik inflige 80 dégâts de base.",
				de: "In deinem nächsten Zug beträgt der Grundschaden von Tannzas Überraschungsangriff 80 Schadenspunkte."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Surprise Attack",
				fr: "Attaque surprise",
				de: "Überraschungsangriff"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				de: "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "It likes to make its shell thicker by adding layers of tree bark. The additional weight doesn’t bother it."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
